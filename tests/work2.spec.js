const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/bmi');
  });

test('TC01', async ({ page }) => {
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByPlaceholder('35').fill('21');
    await page.getByPlaceholder('190').fill('180');
    await page.getByPlaceholder('70').fill('67');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.locator('#bmi-gauge')).toBeVisible();

})

test('TC02', async ({ page }) => {
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('35').fill('23');
    await page.getByPlaceholder('190').fill('182');
    await page.getByPlaceholder('70').fill('68');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.locator('#bmi-gauge')).toBeVisible();
    await page.getByRole('button', { name: 'Clear' }).click();

})

test('TC03', async ({ page }) => {
    await page.getByLabel('Gender').selectOption('Male');
    await page.getByPlaceholder('35').fill('21');
    await page.getByPlaceholder('190').fill('180');
    await page.getByPlaceholder('70').fill('67');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await expect(page.locator('#bmi-gauge')).toBeVisible();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByPlaceholder('35').fill('23');
    await page.getByPlaceholder('190').fill('167');
    await page.getByPlaceholder('70').fill('58');
    await page.getByRole('button', { name: 'Calculate' }).click();
    await page.getByRole('button', { name: 'Clear' }).click();

})