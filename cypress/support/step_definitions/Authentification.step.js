var { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const { MenuHeader } = require('./../../POM/MenuHeader');
const menuHeader = new MenuHeader();
const { LoginPage } = require('./../../POM/LoginPage');
const loginPage = new LoginPage();

Given(`Lancer URL {string}`,  (url) => {
    // [Given] Sets up the initial state of the system.
    cy.visit(url);
});

When(`Cliquer sur le menu {string}`,  (menu) => {
    // [When] Describes the action or event that triggers the scenario.
     menuHeader.CliquerSurMenuByName(menu);

});

Then(`Verifier le pathname contient {string}`, (pathname) => {
    // [Then] Describes the expected outcome or result of the scenario.
    menuHeader.VerifierPathname(pathname);
});

When(`Remplir le fomulaire de Connexion`,  (loginTable) => {
    // [When] Describes the action or event that triggers the scenario.
    for(const row of loginTable.hashes())
    {
         loginPage.LoginToAppWithoutCheck(row['email'],row['password'])
    }
});

Then(`Verifier que le nom de user connecté est {string}`,  (fullname) => {
    // [Then] Describes the expected outcome or result of the scenario.

    loginPage.verifierUserConnecte(fullname);
});