
import { BrowserContext, Locator, Page } from '@playwright/test';
export async function openNewTab(
  context: BrowserContext,
  trigger: Locator
): Promise<Page> {
  const [newPage] = await Promise.all([
    context.waitForEvent('page'),
    trigger.click()
  ]);

  await newPage.waitForLoadState('domcontentloaded');
  return newPage;
}

export async function closePage(page: Page): Promise<void> {
  await page.close();
}
