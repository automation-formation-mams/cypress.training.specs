describe('2 - Module : 2 - Actions', () => {

    it("Actions : Atelier 3 : Créer un nouveau compte", () => {

        cy.visit('https://automationexercise.com');

        cy.contains('a', 'Signup / Login').click();

        cy.location('pathname',{timeout: 8000}).should('include','/login');

        cy.contains('New User Signup!').should('be.visible');
        cy.xpath("//input[@data-qa='signup-name']").type('hps Ma')
        cy.xpath("//input[@data-qa='signup-email']").type('hps.ma.2@cypress.com')
        cy.xpath("//button[@data-qa='signup-button']").click();

        cy.contains("Enter Account Information");

        cy.get('#id_gender1').click();
        cy.get('#password').type('passwordcypress');
        cy.get('#days').select('2');
        cy.get('#months').select('June');
        cy.get('#years').select('1994');

        cy.get("#newsletter").check();

        cy.get('#first_name').type("Mams");
        cy.xpath("//input[@id='last_name']").type("Formateur");


        cy.get('#address1').type("SHORE 1 ETG 1");
        cy.get('#state').type("GRAND CASABLANCA");
        cy.get('#city').type("CASABLANCA");
        cy.get('#zipcode').type("20050");
        cy.get('#mobile_number').type("0661000000");

        cy.get("[data-qa='create-account']").click();

        cy.contains("Account Created!").should('be.visible');

        // cy.get('.login-form').should('be.visible');
        // cy.get("[data-qa='login-email']").should('be.visible');
        // cy.get("[data-qa='login-password']").should('be.visible');
        // cy.get("[data-qa='login-button']").should('be.visible');

    });

});