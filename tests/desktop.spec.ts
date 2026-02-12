import { test, expect, Page } from "@playwright/test";

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
  await page.goto("/");

  const introHeading = page.getByRole("heading", {
    level: 1,
    name: "Introduction",
  });
  await expect(introHeading).toBeVisible();

  const sectionNames = [
    "Pagination",
    "Sorting",
    "Filtering",
    "Selection",
    "Editing",
    "Styling",
    "Introduction",
  ];

  for (const sectionName of sectionNames) {
    await testNavLinkAndHeading(page, sectionName);
  }
});
