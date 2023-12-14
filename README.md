## playwright reproduce

### reproduce steps

1. pull docker image

    ```shell
   docker pull mcr.microsoft.com/playwright:v1.40.0-jammy

   docker run -it --rm -v .:/demo --ipc=host mcr.microsoft.com/playwright:v1.40.0-jammy  /bin/bash
   ```

2. run tests in docker

   ```shell
   yarn

   yarn playwright test -u
   ```

### behavior

test-1.spec.ts:29:1 › test - 压缩文件 will fail

```log
Running 2 tests using 2 workers
  1) [chromium] › test-1.spec.ts:29:1 › test - 压缩文件 ─────────────────────────────────

    Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

    Locator: locator('#root')
    Expected string: "压缩文件.zip"
    Received string: "Fileselectopen modal"
    Call log:
      - expect.toContainText with timeout 5000ms
      - waiting for locator('#root')
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"
      -   locator resolved to <div id="root">…</div>
      -   unexpected value "Fileselectopen modal"


      33 |   const fileChooser1 = await fileChooserPromise1
      34 |   await fileChooser1.setFiles(filePath2)
    > 35 |   await expect(page.locator('#root')).toContainText('压缩文件.zip');
         |                                       ^
      36 |
      37 |   await page.getByRole('button', { name: 'open modal' }).click();
      38 |   const fileChooserPromise2 = page.waitForEvent('filechooser')

        at /demo/tests/test-1.spec.ts:35:39

    attachment #1: trace (application/zip) ──────────────────────────────────────────
    test-results/test-1-test---压缩文件-chromium/trace.zip
    Usage:

        yarn playwright show-trace test-results/test-1-test---压缩文件-chromium/trace.zip

    ─────────────────────────────────────────────────────────────────────────────────

  1 failed
    [chromium] › test-1.spec.ts:29:1 › test - 压缩文件 ──────────────────────────────────
  1 passed (7.5s)
```
we can commit the test-1.spec.ts file line 35 and 42, and test agagin, it will pass.
screenshots will generate in tests/test-1.spec.ts-snapshots, we can see difference between the different test case
