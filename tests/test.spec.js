const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
  });

test('TC01', async ({ page }) => {
    // await page.setViewportSize({ width: 375, height: 667 });
    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.getByLabel('Username').fill('student');

    await page.locator('#username').fill('student');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click();
    expect(page.url()).toBe('https://practicetestautomation.com/logged-in-successfully/');

    // const currentURL = page.url();
    // expect(currentURL).toBe('https://practicetestautomation.com/logged-in-successfully/');

    // await expect(page.getByRole('heading', { name: 'Logged In Successfully' })).toBeVisible();

    // const logoLink = page.getByRole('link', { name: 'Practice Test Automation', exact: true });
    // await expect(logoLink).toBeVisible();
    // const logoImage = logoLink.locator('img');
    // await expect(logoImage).toBeVisible();
    // await page.screenshot({ path: "./imge/screenshot1.png" });

})

test('TC02', async ({ page }) => {
    await page.getByLabel('Username').fill('incorrectUser');
    await page.getByLabel('Password').fill('Password123');
    await page.getByRole('button', { name: 'Submit' }).click(); 
    await expect(page.locator('#error', { name: 'Your username is invalid!' })).toBeVisible();

})

test('TC03', async ({ page }) => {
    await page.getByLabel('Username').fill('student');
    await page.getByLabel('Password').fill('incorrectPassword');
    await page.getByRole('button', { name: 'Submit' }).click();

    const successMessage = await page.locator('#error').textContent();
    expect(successMessage).toContain('Your password is invalid!');

})