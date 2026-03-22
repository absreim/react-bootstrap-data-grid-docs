import { test, expect, Page } from "@playwright/test";
import { sectionNames } from "./shared";

test.use({
  viewport: { width: 375, height: 667 }, // iPhone SE
});

const testNavLinkAndHeading: (
  page: Page,
  sectionName: string,
) => Promise<void> = async (page, sectionName) => {
  const navbar = page.getByRole("navigation");
  let menuToggleButton = navbar.getByRole("button", { name: "Articles" });
  await menuToggleButton.click();

  const dialog = page.getByRole("dialog");
  const link = dialog.getByRole("link", { name: sectionName });
  await link.click();

  const heading = page.getByRole("heading", {
    level: 1,
    name: sectionName,
  });
  await expect(heading).toBeVisible();

  menuToggleButton = navbar.getByRole("button", { name: "Articles" });
  await expect(menuToggleButton).toBeVisible();
};

test("off-canvas links work", async ({ page }) => {
  await page.goto("/docs/introduction");

  const introHeading = page.getByRole("heading", {
    level: 1,
    name: "Introduction",
  });
  await expect(introHeading).toBeVisible();

  for (const section of sectionNames) {
    await testNavLinkAndHeading(page, section);
  }
});
