const { MenuHeader } = require('./MenuHeader');
const menuHeader = new MenuHeader();

const { WaitLibrary } = require('../CustomLibrary/WaitLibrary');
const waitLibrary = new WaitLibrary();

const { ClickLibrary } = require('../CustomLibrary/ClickLibrary');
const clickLibrary = new ClickLibrary();

exports.LoginPage = class LoginPage {

    // ==================================== OBJECTS ==================================== //

    get LoginEmailInput() {
        return cy.get("[data-qa='login-email']");
    }

    get LoginPasswordInput() {
        return cy.get("[data-qa='login-password']");
    }

    get LoginSubmitBtn() {
        return cy.get("[data-qa='login-button']");
    }

    // ==================================== METHODS ==================================== //

    async LoginToApp(email, password, fullname) {

        this.LoginEmailInput.type(email);
        this.LoginPasswordInput.type(password);

        //await clickLibrary.ClickTillElementDisappear("[data-qa='login-button']");

        this.LoginSubmitBtn.click();

        waitLibrary.WaitTillObjectExist("//a[contains(.,'Logged in')]", 20000);

        cy.contains("Logged in as").should("be.visible");
        cy.contains(fullname).should("be.visible");

        menuHeader.ConnectedUserFullName.should("be.visible");
        menuHeader.ConnectedUserFullName.should('include.text', fullname);

        menuHeader.ConnectedUserFullName.AssertText(fullname, false)
        // menuHeader.ConnectedUserFullName.AssertText(fullname,true)
    }

    LoginToAppWithoutCheck(email, password) {

        this.LoginEmailInput.type(email);
        this.LoginPasswordInput.type(password);

        //await clickLibrary.ClickTillElementDisappear("[data-qa='login-button']");

        this.LoginSubmitBtn.click();

        //await waitLibrary.WaitTillObjectExist("//a[contains(.,'Logged in')]", 20000);
    }

    verifierUserConnecte(fullname)
    {
        cy.contains("Logged in as").should("be.visible");
        cy.contains(fullname).should("be.visible");

        menuHeader.ConnectedUserFullName.should("be.visible");
        menuHeader.ConnectedUserFullName.should('include.text', fullname);

        menuHeader.ConnectedUserFullName.AssertText(fullname, false)
    }

}