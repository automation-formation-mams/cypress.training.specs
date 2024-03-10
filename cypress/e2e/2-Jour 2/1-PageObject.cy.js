const { MenuHeader } = require('./../../POM/MenuHeader');
const menuHeader = new MenuHeader();
const { LoginPage } = require('./../../POM/LoginPage');
const loginPage = new LoginPage();
const { SearchProducts } = require('./../../POM/SearchProducts');
const searchProducts = new SearchProducts();

describe('5 - Module : Page Object Model', () => {

    beforeEach(() => {
        // Code spécifique à chaque test
        cy.visit("https://automationexercise.com/");
    });

    afterEach(() => {
        // Code spécifique à chaque test
        menuHeader.AccessToMenuPage('API Testing', 'api_list');
    });

    it("POM - TP 5 - Ex 1 -  Se connecter à l'application", () => {

        menuHeader.AccessToMenuPage('Signup / Login', 'login');

        loginPage.LoginToApp('hps.ma@cypress.com', 'passwordcypress', 'hps Ma')

    });

    it("POM - TP 5 - Ex 2 -  Rechercher un produit", () => {

        menuHeader.AccessToMenuPage('Products', 'products');

        searchProducts.RechercherProduit('Stylish dress');

        searchProducts.VerifierPresenceProduit("Stylish Dress");

    });

});