import { test, expect, Page } from "@playwright/test";
import { sectionNames } from "./shared";

const testNavLinkAndHeading: (
  page: Page,
  sectionName: string,
) => Promise<void> = async (page, sectionName) => {
  // this complex selector is needed to differentiate between the desktop and
  // mobile nav links
  const nav = page.locator("div.container > div> div.nav");
  const link = nav.getByRole("link", { name: sectionName });
  await link.click();
  const heading = page.getByRole("heading", {
    level: 1,
    name: sectionName,
  });
  await expect(heading).toBeVisible();
};

test("desktop links work", async ({ page }) => {
  await page.goto("/docs/introduction");

  const introHeading = page.getByRole("heading", {
    level: 1,
    name: "Introduction",
  });
  await expect(introHeading).toBeVisible();

  for (const sectionName of sectionNames) {
    await testNavLinkAndHeading(page, sectionName);
  }
});
