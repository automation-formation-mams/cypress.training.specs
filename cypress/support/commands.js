require('cypress-xpath');
require('cypress-iframe');
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// Commandes pour vérifier le pathname de la page courante
Cypress.Commands.add('CheckPathname', (pathname) => {
    cy.location('pathname', { timeout: 10000 }).should('include', pathname);
    cy.log('Le pathname : ' + pathname);
})

//Commande d'assertion de text avec un booleen de EQUAL ou CONTAINS
Cypress.Commands.add('AssertText', { prevSubject: 'element' }, (subject, ExpectedText, isEqual) => {

    if (isEqual) {
        cy.wrap(subject).should('have.text', ExpectedText);
    }
    else {
        cy.wrap(subject).should('include.text', ExpectedText);
    }
});

Cypress.Commands.add('Count', { prevSubject: 'element' }, (subject) => {
    let cpt;
    cy.wrap(subject).then((elements)=>{
        cpt = elements.length;
        cy.log("COMMAND COUNT = "+ cpt);  
    });
    return cpt;
});

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
Cypress.Commands.overwrite('visit', (originalFn, url, options) => { 
    cy.log('Lancer URL : '+url);
    originalFn(url,options);
    return cy.url().should('contain',url);
 })