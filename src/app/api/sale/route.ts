import { NextRequest, NextResponse } from "next/server";
export const dynamic = "force-dynamic";
// One deadline per process, not a new deadline on each request. Optional fixed ISO dates for demos.
const opensAt =
  process.env.MOCK_SALE_OPENS_AT ||
  new Date(Date.now() - 86400000).toISOString();
const closesAt =
  process.env.MOCK_SALE_CLOSES_AT ||
  new Date(Date.now() + 3 * 86400000 + 7 * 3600000 + 24 * 60000).toISOString();
export async function GET(request: NextRequest) {
  const scenario = request.nextUrl.searchParams.get("scenario");
  if (scenario === "slow")
    await new Promise((resolve) => setTimeout(resolve, 2200));
  if (scenario === "error")
    return NextResponse.json(
      { message: "The demo sale is temporarily unavailable." },
      { status: 503 },
    );
  if (scenario === "empty") return NextResponse.json(null);
  const deadline =
    scenario === "expired"
      ? new Date(Date.now() - 1000).toISOString()
      : closesAt;
  const start =
    scenario === "expired"
      ? new Date(Date.now() - 86400000).toISOString()
      : opensAt;
  return NextResponse.json(
    {
      id: "demo-ido",
      name: "Demo",
      ticker: "DEMO",
      raised: 412500,
      target: 1000000,
      price: 0.05,
      participants: 1250,
      allocation: 20000000,
      opensAt: start,
      closesAt: deadline,
      serverNow: new Date().toISOString(),
      pools: [
        { name: "Community pool", raised: 270000, target: 300000 },
        { name: "Public pool", raised: 142500, target: 160000 },
      ],
      timeline: [
        {
          id: "registration",
          label: "Demo",
          description: "Lorem ipsum",
          date: start,
        },
        { id: "sale", label: "DEMO", description: "Lorem ipsum", date: start },
        {
          id: "end",
          label: "Demo",
          description: "Lorem ipsum",
          date: deadline,
        },
        {
          id: "claim",
          label: "DEMO",
          description: "Lorem ipsum",
          date: new Date(Date.parse(deadline) + 86400000).toISOString(),
        },
      ],
      details: [
        { label: "Demo", value: "DEMO" },
        { label: "Lorem ipsum", value: "USDC" },
        { label: "Lorem ipsum", value: "20,000,000 DEMO" },
        { label: "Demo", value: "$0.05" },
        { label: "Demo", value: "Lorem ipsum" },
        { label: "Lorem ipsum", value: "Demo" },
      ],
    },
    { headers: { "Cache-Control": "no-store" } },
  );
}
