const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {

    baseUrl: process.env.BASE_URL,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false, //Code wont automatically run test when false
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,  // Ensure screenshots are taken on failure
    video: true,  // Enable video recording (optional)
    env:{

      //Usage in test script cy.visit(Cypress.env('adminuRL'))
      adminURL: "https://dmsmonoadmindev.z6.web.core.windows.net/",
      SSO_URL: process.env.SSO_URL,

    }
  },
});
