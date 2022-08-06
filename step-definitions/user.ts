// step-definitions/homepage.ts
import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { OurWorld } from "../types";
// Using a cucumber expression
Given("Bob is not logged", async function (this: OurWorld) {
  // Use the page instance from the World instance to navigate
});

Given("opens main page", async function (this: OurWorld) {
  await this.page.goto(this.predvoditelUrl);
});

When("Bob types his username", async function(this: OurWorld) {
  await this.page.fill('[name="Username"] input', 'Imperat');
});

When("Bob types his password", async function(this: OurWorld) {
  await this.page.fill('[name="Password"] input', 'liederlich49');
});

When("Bob clicks login button", async function(this: OurWorld) {
  const button = await this.page.$('#login');

  if (!button) {
    throw new Error('There is no login button');
  }

  await button.click();
});

Then("Bob sees main menu page", async function(this: OurWorld) {
  const isVisible = await this.page.waitForSelector('.main-menu1');

  if (!isVisible) {
    throw new Error('Error 23');
  }
});
