const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      inlineAssets: true,
      saveAllAttempts: false,
      html: true,
      reportDir: "cypress/reports/mochawesome-report"
    },
    screenshotsFolder: "screenshots",
    specPattern:
    [
      '**/*.feature',
      // 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'
    ],
    baseUrl: 'https://www.w3.org',
    watchForFileChanges: false,
  },
});
