describe('2 - Module : 1 - Selecteurs', () => {


    it('Selecteurs : Test 1 : Récupérer les éléments de la page connexion', () => {

        cy.visit('https://automationexercise.com/login');

        cy.get('#form').should('be.visible');

        cy.get('.login-form').should('be.visible');

        cy.contains('Login to your account').should('be.visible');

        cy.xpath("//input[@data-qa='login-email']").should('be.visible');

        cy.get('.signup-form').children("form").should('be.visible');

    }
    
    
    );

    it("Selecteurs : Atelier 2 : Identification des objets de la page login", () => {

        cy.visit('https://automationexercise.com');

        cy.contains('a','Signup / Login').click();

        cy.get('.login-form').should('be.visible');

        cy.get("[data-qa='login-email']").should('be.visible');
        cy.get("[data-qa='login-password']").should('be.visible');
        cy.get("[data-qa='login-button']").should('be.visible');

        cy.contains('New User Signup!').should('be.visible');
        cy.xpath("//input[@data-qa='signup-name']").should('be.visible');
        cy.xpath("//input[@data-qa='signup-email']").should('be.visible');
        cy.xpath("//button[@data-qa='signup-button']").should('be.visible');

    });
});