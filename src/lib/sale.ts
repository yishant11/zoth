import { z } from "zod";
const amount = z.number().finite().nonnegative();
export const saleSchema = z
  .object({
    id: z.string(),
    name: z.string(),
    ticker: z.string(),
    raised: amount,
    target: z.number().finite().positive(),
    price: z.number().finite().positive(),
    participants: amount.int(),
    allocation: amount,
    opensAt: z.string().datetime(),
    closesAt: z.string().datetime(),
    serverNow: z.string().datetime(),
    pools: z.array(
      z.object({
        name: z.string(),
        raised: amount,
        target: z.number().finite().positive(),
      }),
    ),
    timeline: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        description: z.string(),
        date: z.string().datetime(),
      }),
    ),
    details: z.array(z.object({ label: z.string(), value: z.string() })),
  })
  .refine((s) => Date.parse(s.closesAt) > Date.parse(s.opensAt), {
    message: "Sale dates are invalid",
  });
export type Sale = z.infer<typeof saleSchema>;
export function getProgress(raised: number, target: number) {
  if (!Number.isFinite(raised) || !Number.isFinite(target) || target <= 0)
    return 0;
  return Math.min(100, Math.max(0, (raised / target) * 100));
}
export function getRemaining(closesAt: string, now: number) {
  const end = Date.parse(closesAt);
  const total =
    Number.isFinite(end) && Number.isFinite(now)
      ? Math.max(0, Math.ceil((end - now) / 1000))
      : 0;
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor(total / 3600) % 24,
    minutes: Math.floor(total / 60) % 60,
    seconds: total % 60,
    expired: total === 0,
  };
}
export const money = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
