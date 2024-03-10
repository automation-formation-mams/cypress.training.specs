const { SeleniumIframe } = require('../../POM/SeleniumIframe');
const seleniumIframe = new SeleniumIframe();

const { AutoExoIframe } = require('../../POM/AutoExoIframe');
const autoExoIframe = new AutoExoIframe();

const { AlertPage } = require('../../POM/AlertPage');
const alertPage = new AlertPage();

const { TabsPage } = require('../../POM/TabsPage');
const tabsPage = new TabsPage();

describe('6 - Module : Gestion des objets avancé', () => {

    context.skip('01 - IFRAME', () => {
        it("Advanced Objects - TP 6 - Ex 1 -  Accèder à l'iframe Selenium", () => {

            cy.visit("iframesdemo.html");
            seleniumIframe.accessMenuDownloadsSelenium();
        });

        it("Advanced Objects - TP 6 - Ex 1 -  Accèder à l'iframe Exercice Auto Page Login", () => {

            cy.visit("iframesdemoNATGEO.html");

            autoExoIframe.accessMenuLoginExerciseAuto();
            autoExoIframe.RenseignerLoginEmail('ma.hps@cypress.com');
        });
    })

    context.skip('02 - ALERT', () => {
        beforeEach(() => {
            // Code spécifique à chaque test
            cy.visit("https://practice-automation.com/popups/");
        });

        it("Advanced Objects - TP 7 - Ex 1 -  Vérifier & Valider Alert", () => {

            cy.on('window:alert', (str) => {
                cy.log('Message Alert : ' + str);
                return true;
            });

            alertPage.AlertBtn.click();
        });

        it("Advanced Objects - TP 7 - Ex 2 -  Cancel Confirm Window", () => {

            cy.on('window:confirm', () => {
                //cy.log('Message Alert : ' + str);
                return false;
            });

            alertPage.ConfirmBtn.click();
            alertPage.ConfirmResult.should('have.text', 'Cancel it is!')
        });

        it("Advanced Objects - TP 7 - Ex 2 -  Valider Confirm Window", () => {

            cy.on('window:confirm', () => {
                //cy.log('Message Alert : ' + str);
                return true;
            });

            alertPage.ConfirmBtn.click();
            alertPage.ConfirmResult.should('have.text', 'OK it is!')
        });

        it("Advanced Objects - TP 7 - Ex 3 -  Passer une Valeur dans un Prompt", () => {

            cy.window().then((win) => {
                cy.stub(win, 'prompt').returns('HPS'); // Simuler la saisie de 'MaValeur'
            });

            alertPage.PromptBtn.click();
            alertPage.PromptResult.should('have.text', 'Nice to meet you, HPS!')
        });

    })

    context('03 - TABS', () => {
        //Cypress ne gère pas les onglets ; il est nécessaire de supprimer l'attribut "target" pour traiter cette situation.

        beforeEach(() => {
            // Code spécifique à chaque test
            cy.viewport(2500,1800)

        });

        it("Advanced Objects - TP 8 - Ex 1 -  Accèder à un nouveau Tab", () => {

            // let prevURL = cy.url();
            cy.visit("tabspage.html");

            let prevURL = cy.location();

            cy.get("#ouvrirTabs").should('be.visible');
            
            cy.get("#ouvrirTabs").invoke('removeAttr', 'target').click();

            cy.url().should('contain', 'www.google.com');
        });


    })


});