import test, { expect } from "@playwright/test";

test('is the right page', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    const locator = page.locator('h1') // get the <h1> element
    await expect(locator).toContainText('Login') // check if the <h1> element contains the string 'Login"
})