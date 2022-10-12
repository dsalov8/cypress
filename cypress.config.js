const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'oncgwc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // base URL the use cy.origin for other URL
      // chromeWebSecurity --> FALSE
    },
  },
});