const { MenuHeader } = require('./../../POM/MenuHeader');
const menuHeader = new MenuHeader();
const { LoginPage } = require('./../../POM/LoginPage');
const loginPage = new LoginPage();
const { SearchProducts } = require('./../../POM/SearchProducts');
const searchProducts = new SearchProducts();
const jsonpath = require("jsonpath");

var allproduct;
var PremierProduit;

describe('5 - Module : Gestion Jeux de données', () => {

    beforeEach(() => {
        // Code spécifique à chaque test
        cy.visit(Cypress.env('URL_BASIC'));
    });

    before(()=>{
        cy.fixture('products.json').then ((prodt)=>{
            allproduct = prodt;
            PremierProduit = prodt.products[0]
        })
    })

    it.skip("ENV  - Ex 1 -  Utiliser les fichiers d'environnement", () => {

        cy.log('ENVIRONNEMENT : ' + Cypress.env('ENVIRONMENT'));
        cy.log('Login : ' + Cypress.env('EMAIL_ACCOUNT1'));

        menuHeader.AccessToMenuPage('Signup / Login', 'login');

        loginPage.LoginToApp(Cypress.env('EMAIL_ACCOUNT1'), Cypress.env('PASSWORD_ACCOUNT1'), Cypress.env('NAME_ACCOUNT1'));
    });

    it("Fixture - Ex 2 - Utiliser les fixtures Produits",()=>{

        cy.log('Name : ' + PremierProduit.name);
        cy.log('id : ' + PremierProduit.id);
        cy.log('price : ' + PremierProduit.price);
        

    })

    it("Fixture - Ex 3 - Utiliser les fixtures Produits en utilisant le JsonPath",async ()=>{

        allproduct = JSON.stringify(allproduct);
        allproduct = JSON.parse(allproduct);

        let extractProduct = jsonpath.query(allproduct, '$.products[?(@.id==2)]')

        await  cy.log('Extracted Product : ' + JSON.stringify(extractProduct));
     
        await  expect('H&M').to.equal(extractProduct[0].brand);

    })

});