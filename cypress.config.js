const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

if(process.env.ENV)
{
  require('dotenv').config({
    path: './cypress/EnvFiles/.env.'+process.env.ENV,
    override : true
  });
}
else
{
  require('dotenv').config({
    path: './cypress/EnvFiles/.env.test',//La valeur par défaut
    override : true
  });
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
    experimentalStudio: true,
    watchForFileChanges: false,//désactiver le chargement/relance des tests après changement du code  
    "chromeWebSecurity": false,//désactiver le protocole de sécurité du navigateur chrome
    defaultCommandTimeout: 30000,
    pageLoadTimeout : 90000,
    specPattern: ["**/*.feature"] 
    // specPattern: ["**/*.feature", "**/*.cy.js"] 
  },
  env:{
    ...process.env,
    omitFiltered: true,
    filterSpecs: true,
  }
  
});
