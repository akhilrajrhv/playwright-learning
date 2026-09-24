// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 40 * 1000, //by default 30ms but we extend the time out to 40ms
  expect: { //expect used to increase assertion time out
    timeout: 60 * 1000,
  },
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  workers: 2,
  //retries: 2,
  fullyParallel: true,

  projects: [{
    name: "Chrome_Project",
    use: {
      headless: false,
      browserName: 'chromium',
      viewport: { height: 500, width: 500 },// for responsive 
      screenshot: 'only-on-failure',
      video: 'retain-on-failure',
      trace: 'retain-on-failure',
      //permissions: ['notifications', 'camera', 'gelocation', 'microphone'],
      ignoreHTTPSErrors: true,
      /*geolocation:{ //check with correct values
        latitude:98.00000,
        longitude: 950.0000
      }*/
      
    },
  },

  {
    name: "Firefox_Project",
    use: {
      headless: false,
      browserName: "firefox",
      ...devices['iPhone 15']// for different mobile responsive
    },
  },

  {
    name: "Webkit_Project",
    use: {
      headless: false,
      browserName: "webkit",
    },
  }

  ]


  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

