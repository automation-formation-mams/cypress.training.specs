exports.TabsPage = class TabsPage {

    // ==================================== OBJECTS ==================================== //

    get NewTabBtn() {
        return cy.xpath("//button[contains(.,'New Tab')]");
    }

    get NewWindowBtn() {
        return cy.xpath("//button[contains(.,'New Window')]");
    }

}