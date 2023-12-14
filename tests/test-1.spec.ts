import { fileURLToPath } from 'node:url';
import { test, expect } from '@playwright/test';
import path from 'node:path';

const __filename = fileURLToPath(import.meta.url)

const filePath1 = path.resolve(__filename, '..', 'trace.zip')
const filePath2 = path.resolve(__filename, '..', '压缩文件.zip')


test('test - trace', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const fileChooserPromise1 = page.waitForEvent('filechooser')
  await page.locator('button').filter({ hasText: 'select' }).click();
  const fileChooser1 = await fileChooserPromise1
  await fileChooser1.setFiles(filePath1)
  await expect(page.locator('#root')).toContainText('trace.zip');

  await page.getByRole('button', { name: 'open modal' }).click();
  const fileChooserPromise2 = page.waitForEvent('filechooser')
  await page.getByLabel('select file with modal').locator('button').filter({ hasText: 'select' }).click();
  const fileChooser2 = await fileChooserPromise2
  await fileChooser2.setFiles(filePath1)

  await expect(page.getByLabel('select file with modal')).toContainText('trace.zip');
  await expect(page).toHaveScreenshot()
});

test('test - 压缩文件', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  const fileChooserPromise1 = page.waitForEvent('filechooser')
  await page.locator('button').filter({ hasText: 'select' }).click();
  const fileChooser1 = await fileChooserPromise1
  await fileChooser1.setFiles(filePath2)
  await expect(page.locator('#root')).toContainText('压缩文件.zip');

  await page.getByRole('button', { name: 'open modal' }).click();
  const fileChooserPromise2 = page.waitForEvent('filechooser')
  await page.getByLabel('select file with modal').locator('button').filter({ hasText: 'select' }).click();
  const fileChooser2 = await fileChooserPromise2
  await fileChooser2.setFiles(filePath2)
  await expect(page.getByLabel('select file with modal')).toContainText('压缩文件.zip');
  await expect(page).toHaveScreenshot()
});