# Repro

```sh
npm i
npm run build
npm run start
curl http://localhost:3000/make-req
```

Afterwards, look at the server logs.

Inside `make-req/route.ts`, we are making an `http.get()` call to `check/route.ts`.
This `http.get()` call should be instrumented, meaning tracing headers should be attached.
The `check/route.ts` endpoint simply returns the headers it receives, but no tracing headers are attached, meaning the instrumentation didn't work.

You might be inclined to say "yo the folks at Sentry did something wrong", but I don't think this is the case.
For the sake of simplicity I used the Sentry SDK which uses the OpenTelemetry instrumentation under the hood.
You could probably also reproduce this by using the OpenTelemetry HTTP instrumentation + any OTEL HTTP propagator, and the propagation would also fail.
