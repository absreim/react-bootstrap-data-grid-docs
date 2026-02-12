import { test, expect, Page } from "@playwright/test";

test.use({
  viewport: { width: 375, height: 667 }, // iPhone SE
})

const testNavLinkAndHeading: (
  page: Page,
  sectionName: string,
) => Promise<void> = async (page, sectionName) => {
  const navbar = page.getByRole("navigation");
  const menuToggleButton = navbar.getByRole("button", { name: "Contents" });
  await menuToggleButton.click();

  const dialog = page.getByRole("dialog");
  const link = dialog.getByRole("link", { name: sectionName });
  await link.click();
  const heading = page.getByRole("heading", {
    level: 1,
    name: sectionName,
  });
  await expect(heading).toBeVisible();
};

test("off-canvas links work", async ({ page }) => {
  await page.goto("/");

  const introHeading = page.getByRole("heading", {
    level: 1,
    name: "Introduction",
  });
  await expect(introHeading).toBeVisible();

  await testNavLinkAndHeading(page, "Pagination");
  // TODO: fix the test for other links. There appears to be flakiness due to
  // the use of react-bootstrap's Offcanvas component.
});
