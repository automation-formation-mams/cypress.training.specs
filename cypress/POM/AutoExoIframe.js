
exports.AutoExoIframe = class AutoExoIframe {

    // ==================================== OBJECTS ==================================== //

    get iframeExerciceAutoPage(){
        return "#iframeExoAutom"
    }

    get LoginMenuBtnXpath(){
        return "//a[contains(.,'Signup / Login')]"
    }

    get emailInputByXPath(){
        return "//input[@data-qa='login-email']"
    }
    // ==================================== METHODES ==================================== //

    accessMenuLoginExerciseAuto()
    {
        cy.frameLoaded(this.iframeExerciceAutoPage);

        cy.iframe().xpath(this.LoginMenuBtnXpath).should('be.visible');

        cy.iframe().xpath(this.LoginMenuBtnXpath).click();

        cy.wait(6000);

        cy.iframe().xpath(this.emailInputByXPath).should('be.visible');
       
    }

    RenseignerLoginEmail(email)
    {
        cy.frameLoaded(this.iframeExerciceAutoPage);
        cy.iframe().xpath(this.emailInputByXPath).type(email);
    }

}