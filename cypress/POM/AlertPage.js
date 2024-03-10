exports.AlertPage = class AlertPage {

    // ==================================== OBJECTS ==================================== //

    get AlertBtn() {
        return cy.get("#alert");
    }

    get ConfirmBtn() {
        return cy.get("#confirm");
    }

    get ConfirmResult() {
        return cy.get("#confirmResult");
    }

    get PromptBtn() {
        return cy.get("#prompt");
    }

    get PromptResult() {
        return cy.get('#promptResult');
    }
}