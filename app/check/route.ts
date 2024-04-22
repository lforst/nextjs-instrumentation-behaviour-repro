import { headers } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// This endpoint just returns the received headers
export async function GET() {
  const headerList = headers();
  const headerObj: Record<string, unknown> = {};

  headerList.forEach((value, key) => {
    headerObj[key] = value;
  });

  return NextResponse.json({ headers: headerObj });
}
