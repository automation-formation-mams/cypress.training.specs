exports.MenuHeader = class MenuHeader {

    // ==================================== OBJECTS ==================================== //

    get HomeMenu() {
        return cy.xpath("//a[contains(.,'Home')]");
    }

    get LoginSignUpMenu() {
        return cy.xpath("//a[contains(.,'Signup / Login')]");
    }

    MenuHeaderByName(Name) {
        return cy.xpath("//a[contains(.,'" + Name + "')]");
    }

    get ConnectedUserFullName() {
        return cy.xpath("//a[contains(.,'Logged in as')]");
    }

    // ==================================== METHODES ==================================== //

    AccessToMenuPage(MenuName, PathnamePage) {

        this.MenuHeaderByName(MenuName).click();

        // cy.location('pathname', { timeout: 10000 }).should('include', PathnamePage)
        cy.CheckPathname(PathnamePage);
    }

    CliquerSurMenuByName(MenuName)
    {
        this.MenuHeaderByName(MenuName).click();
    }

    VerifierPathname(pathname)
    {
        cy.CheckPathname(pathname);
    }
}