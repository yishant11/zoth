import { chromium } from "playwright";
import assert from "node:assert/strict";
import { spawn } from "node:child_process";
(async () => {
  const server = spawn(
    "node",
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--port",
      "3001",
      "--hostname",
      "127.0.0.1",
    ],
    { cwd: process.cwd(), stdio: ["ignore", "pipe", "pipe"] },
  );
  let browser;
  try {
    await new Promise((r, j) => {
      server.stdout.on("data", (x) => {
        if (x.toString().includes("Ready")) r();
      });
      server.on("exit", j);
    });
    browser = await chromium.launch({
      headless: true,
      ...(process.env.CHROMIUM_EXECUTABLE
        ? {
            executablePath: process.env.CHROMIUM_EXECUTABLE,
            args: ["--no-sandbox", "--disable-dev-shm-usage"],
          }
        : {}),
    });
    const page = await browser.newPage();
    let errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto("http://127.0.0.1:3001");
    await page
      .getByRole("progressbar", { name: "Overall sale progress" })
      .waitFor();
    for (const width of [375, 768, 1024, 1440, 1698]) {
      await page.setViewportSize({ width, height: 950 });
      const size = await page.evaluate(() => ({
        actual: innerWidth,
        scroll: document.documentElement.scrollWidth,
      }));
      assert.equal(size.actual, size.scroll, `overflow at ${width}`);
    }
    console.log(
      "geometry",
      await page.evaluate(() =>
        [
          ".hero-left",
          ".connection-card",
          ".partners-strip",
          ".details-section",
          ".footer",
          ".footer-main",
          ".footer-legal",
          ".wordmark",
        ].map((s) => {
          const r = document.querySelector(s).getBoundingClientRect();
          return { s, x: r.x, y: r.y, w: r.width, h: r.height };
        }),
      ),
    );
    await page
      .getByRole("button", { name: "Connect Wallet", exact: true })
      .first()
      .click();
    await page.getByRole("dialog").waitFor();
    await page.keyboard.press("Tab");
    assert.equal(
      await page
        .getByRole("dialog")
        .evaluate((el) => el.contains(document.activeElement)),
      true,
    );
    await page.keyboard.press("Escape");
    assert.equal(await page.getByRole("dialog").count(), 0);
    assert.equal(
      await page
        .getByRole("button", { name: "Connect Wallet", exact: true })
        .first()
        .evaluate((el) => el === document.activeElement),
      true,
    );
    await page
      .getByRole("button", { name: "Connect Sonar", exact: true })
      .first()
      .click();
    await page.getByRole("dialog").waitFor();
    await page.getByRole("button", { name: "Continue demo" }).click();
    await page.getByText("Demo only — no real connection was made.").waitFor();
    const timer = page.getByRole("timer");
    let before = await timer.getAttribute("aria-label");
    await page.waitForFunction(
      (old) =>
        document.querySelector('[role="timer"]')?.getAttribute("aria-label") !==
        old,
      before,
    );
    await page.setViewportSize({ width: 375, height: 812 });
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page
      .getByRole("navigation", { name: "Mobile navigation" })
      .getByText("Timeline")
      .click();
    assert.equal(await page.getByRole("dialog").count(), 0);
    for (const scenario of ["error", "empty", "expired", "slow"]) {
      await page.goto(`http://127.0.0.1:3001/?scenario=${scenario}`);
      if (scenario === "error")
        await page
          .getByRole("heading", { name: "Unable to load the sale" })
          .waitFor();
      if (scenario === "empty")
        await page.getByRole("heading", { name: "No active sale" }).waitFor();
      if (scenario === "expired")
        await page.getByText("Sale closed", { exact: true }).waitFor();
      if (scenario === "slow") {
        await page.getByText("Loading sale data", { exact: true }).waitFor();
        await page
          .getByRole("progressbar", { name: "Overall sale progress" })
          .waitFor();
      }
    }
    await page.goto("http://127.0.0.1:3001");
    await page
      .getByRole("progressbar", { name: "Overall sale progress" })
      .waitFor();
    await page.getByRole("button", { name: "Whitepaper", exact: true }).click();
    await page.getByRole("dialog").waitFor();
    await page.keyboard.press("Escape");
    await page.getByLabel("Email address").fill("demo@example.com");
    await page
      .locator("form")
      .getByRole("button", { name: "DEMO", exact: true })
      .click();
    await page
      .getByText(
        "Demo subscription received. Your email has not been sent or stored.",
      )
      .waitFor();
    assert.deepEqual(errors, []);
    console.log(
      "PASS: five viewport widths, dialogs, focus trap/restore, countdown, mobile navigation, four API scenarios, resources, toast, subscription, no runtime errors",
    );
  } finally {
    if (browser) await browser.close();
    server.kill();
  }
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
