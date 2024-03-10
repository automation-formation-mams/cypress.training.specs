var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { SearchProducts } = require('./../../POM/SearchProducts');
const searchProducts = new SearchProducts();

When(`Rerchercher Produit {string}`,  (productName) => {
    // [When] Describes the action or event that triggers the scenario.
    searchProducts.RechercherProduit(productName);
});

Then(`Vérifier Présence Produit {string}`, (productName) => {
    // [Then] Describes the expected outcome or result of the scenario.
    searchProducts.VerifierPresenceProduit(productName);
});