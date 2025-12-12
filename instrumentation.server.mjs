import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://7885edbb91163e5b98483a08bdbacafb@o4510522591346688.ingest.us.sentry.io/4510522596196352",
    tracesSampleRate: 1,
    enableLogs: true
})