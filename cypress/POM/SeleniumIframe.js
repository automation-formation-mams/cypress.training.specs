
exports.SeleniumIframe = class SeleniumIframe {

    // ==================================== OBJECTS ==================================== //

    get iframeSeleniumPage(){
        return "#iframePanel"
    }

    get MenuDownloadxpath(){
        return "//a[contains(.,'Download')]";
    }

    // ==================================== METHODES ==================================== //

    accessMenuDownloadsSelenium()
    {
        cy.frameLoaded(this.iframeSeleniumPage);

        cy.iframe().xpath(this.MenuDownloadxpath).click();

        cy.wait(3000);

        cy.iframe().contains("Selenium Clients and WebDriver Language Bindings").should('be.visible');
    }
}