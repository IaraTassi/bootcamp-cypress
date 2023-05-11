const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "h6aw9g",
  e2e: {
    baseUrl: 'http://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
