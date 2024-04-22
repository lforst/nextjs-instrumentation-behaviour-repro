import http from "http";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const chunks = [];
  await new Promise<void>((resolve) => {
    http.get("http://localhost:3000/check", (res) => {
      res.on("data", (chunk) => {
        chunks.push(chunk.toString());
      });
      res.on("close", resolve);
    });
  });

  const res = JSON.parse(chunks.join());

  console.log(res);

  // Works on 14.1.4, does not work on 14.2.0
  if (res.headers["sentry-trace"] === undefined) {
    throw new Error(
      "`http` was not successfully instrumented: `http.get` did not have tracing headers attached"
    );
  }

  return new NextResponse();
}
