const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/tracalorie/?');
  });

test('TC01', async ({ page }) => {

    await page.getByPlaceholder('Add Item').fill('Egg');
    await page.getByPlaceholder('Add Calories').fill('25');
    await page.getByRole('button', { name: ' Add Meal' }).click();
    expect(page.url()).toBe('https://practice.expandtesting.com/tracalorie/?');

})

test('TC02' , async ({ page }) => {

    await page.getByPlaceholder('Add Item').fill('Egg');
    await page.getByPlaceholder('Add Calories').fill('25');
    await page.getByRole('button', { name: ' Add Meal' }).click();
    await page.getByPlaceholder('Add Item').fill('shushi');
    await page.getByPlaceholder('Add Calories').fill('75');
    await page.getByRole('button', { name: ' Add Meal' }).click();
    expect(page.url()).toBe('https://practice.expandtesting.com/tracalorie/?');


})
