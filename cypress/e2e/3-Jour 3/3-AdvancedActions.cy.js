const { MenuHeader } = require('./../../POM/MenuHeader');
const menuHeader = new MenuHeader();
const { LoginPage } = require('./../../POM/LoginPage');
const loginPage = new LoginPage();
const { SearchProducts } = require('./../../POM/SearchProducts');
const searchProducts = new SearchProducts();

describe('Module : Action Avancee', () => {


    it("Advanced Actions - Ex 1 -  Se connecter à l'application", () => {
        // Code spécifique à chaque test
        cy.visit("https://automationexercise.com/");

        menuHeader.AccessToMenuPage('Signup / Login', 'login');

        loginPage.LoginToApp('hps.ma@cypress.com', 'passwordcypress', 'hps Ma');

    });

});