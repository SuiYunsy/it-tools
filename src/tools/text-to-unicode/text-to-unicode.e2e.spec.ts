import { expect, test } from '@playwright/test';

test.describe('Tool - Text to Unicode', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/text-to-unicode');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Text to Unicode - IT Tools');
  });

  test('Text to unicode conversion', async ({ page }) => {
    await page.getByTestId('text-to-unicode-input').fill('it-tools');
    const unicode = await page.getByTestId('text-to-unicode-output').inputValue();

    expect(unicode).toEqual('\\u0069\\u0074\\u002d\\u0074\\u006f\\u006f\\u006c\\u0073');
  });

  test('Unicode to text conversion', async ({ page }) => {
    await page.getByTestId('unicode-to-text-input').fill('\\u0069\\u0074\\u002d\\u0074\\u006f\\u006f\\u006c\\u0073');
    const text = await page.getByTestId('unicode-to-text-output').inputValue();

    expect(text).toEqual('it-tools');
  });
});
