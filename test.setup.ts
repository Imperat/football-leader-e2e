import { Before, BeforeAll, AfterAll, After, setDefaultTimeout } from "@cucumber/cucumber";
import { devices, chromium, Browser } from "playwright";
import { OurWorld } from "./types";

setDefaultTimeout(60 * 1000);

const BrowserWrapper: { browser: Browser } = {
  // @ts-ignore
  browser: null,
};

BeforeAll(async function () {
  // Browsers are expensive in Playwright so only create 1
  BrowserWrapper.browser = await chromium.launch({
    // Not headless so we can watch test runs
    headless: false,
    // Slow so we can see things happening
  });
});
AfterAll(async function () {
  await BrowserWrapper.browser.close();
});
// Create a new test context and page per scenario
Before(async function (this: OurWorld) {
  const pixel2 = devices["Pixel 2"];
  this.predvoditelUrl = 'http://localhost:8080';
  this.context = await BrowserWrapper.browser.newContext({
    viewport: pixel2.viewport,
    userAgent: pixel2.userAgent,
  });
  this.page = await this.context.newPage();
});
// Cleanup after each scenario
After(async function (this: OurWorld) {
  await this.page.close();
  await this.context.close();
});
