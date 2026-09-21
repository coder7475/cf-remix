import { useEffect, useRef } from "react";

export function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || button.dataset.initialized === "true") return;
    button.dataset.initialized = "true";

    const pageWrapper = document.querySelector(".page-wrapper");

    function getScrollPosition() {
      return Math.max(
        window.scrollY || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0,
        pageWrapper ? pageWrapper.scrollTop : 0
      );
    }

    function updateButton() {
      if (!button) return;
      button.classList.toggle("is-visible", getScrollPosition() > 300);
    }

    window.addEventListener("scroll", updateButton, { passive: true });
    document.addEventListener("scroll", updateButton, {
      passive: true,
      capture: true,
    });

    if (pageWrapper) {
      pageWrapper.addEventListener("scroll", updateButton, { passive: true });
    }

    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });

      if (pageWrapper) {
        pageWrapper.scrollTo({ top: 0, behavior: "smooth" });
      }
    });

    updateButton();

    return () => {
      window.removeEventListener("scroll", updateButton);
      document.removeEventListener("scroll", updateButton);
      if (pageWrapper) {
        pageWrapper.removeEventListener("scroll", updateButton);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        #ScrollToTop {
          position: fixed;
          right: 2rem;
          bottom: 2rem;
          z-index: 99999;
          display: flex;
          width: 46px;
          height: 46px;
          padding: 0;
          align-items: center;
          justify-content: center;
          appearance: none;
          background: var(--scroll-top-bg);
          color: #fff;
          border: 1px solid var(--scroll-top-border);
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          cursor: pointer;
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transform: translateY(15px);
          transition:
            opacity 0.25s ease,
            transform 0.25s ease,
            visibility 0.25s ease;
        }

        #ScrollToTop.is-visible {
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        @media (hover: hover) {
          #ScrollToTop:hover {
            background: var(--scroll-top-hover);
          }
        }

        @media screen and (max-width: 749px) {
          #ScrollToTop {
            right: 1rem;
            bottom: 1rem;
            width: 42px;
            height: 42px;
          }
        }
      `}</style>
      <button
        ref={buttonRef}
        id="ScrollToTop"
        type="button"
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
