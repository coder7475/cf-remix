import { init, replayIntegration, browserTracingIntegration } from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser, useLocation, useMatches } from "@remix-run/react";
import { startTransition, StrictMode, useEffect } from "react";
import { hydrateRoot } from "react-dom/client";

init({
    dsn: "https://7885edbb91163e5b98483a08bdbacafb@o4510522591346688.ingest.us.sentry.io/4510522596196352",
    tracesSampleRate: 1,
    enableLogs: true,

    integrations: [browserTracingIntegration({
      useEffect,
      useLocation,
      useMatches
    }), replayIntegration({
        maskAllText: true,
        blockAllMedia: true
    })],

    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1,
    sendDefaultPii: true
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});