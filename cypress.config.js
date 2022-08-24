const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {    
    setupNodeEvents(on, config) {
    // require("@deploysentinel/cypress-recorder")(on, config)
    return require('./cypress/plugins/index.js')(on, config)
  },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      html: true,
      reportDir: "cypress/reports/mochawesome-report"
    },
    specPattern:
    ['**/*.feature', 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    baseUrl: 'https://www.w3.org/standards/',
  },
});
