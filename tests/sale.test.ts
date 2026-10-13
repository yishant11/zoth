import { test } from "node:test";
import assert from "node:assert/strict";
import { getProgress, getRemaining, saleSchema } from "../src/lib/sale";
test("progress handles overfunding, negative values and invalid targets", () => {
  assert.equal(getProgress(25, 100), 25);
  assert.equal(getProgress(200, 100), 100);
  assert.equal(getProgress(-3, 100), 0);
  assert.equal(getProgress(20, 0), 0);
  assert.equal(getProgress(Infinity, 10), 0);
});
test("countdown decomposes remaining time and stops at zero", () => {
  const now = Date.parse("2026-10-13T00:00:00Z");
  assert.deepEqual(getRemaining("2026-10-14T01:02:03Z", now), {
    days: 1,
    hours: 1,
    minutes: 2,
    seconds: 3,
    expired: false,
  });
  assert.equal(getRemaining("2026-10-12T00:00:00Z", now).expired, true);
  assert.equal(getRemaining("invalid", now).seconds, 0);
});
test("malformed response is rejected before rendering", () => {
  assert.equal(saleSchema.safeParse({ raised: -1, target: 0 }).success, false);
});
