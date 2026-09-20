import { useEffect, useRef } from "react";

interface CalendlyInlineProps {
  url: string;
  className?: string;
}

export const CalendlyInline = ({ url, className }: CalendlyInlineProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget ${className ?? ""}`}
      data-url={url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
};