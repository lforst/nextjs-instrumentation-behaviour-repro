import * as Sentry from "@sentry/nextjs";

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    Sentry.init({
      dsn: "https://7cea2b6e298f4fcc86bb28d22ceaeac4@o447951.ingest.sentry.io/4505391490007040",
      tracesSampleRate: 1.0,
    });
  }
}
