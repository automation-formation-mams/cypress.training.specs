exports.SearchProducts = class SearchProducts {

    // ==================================== OBJECTS ==================================== //

    get searchProductsInput() {
        return cy.get("#search_product");
    }

    get LoupeBtn() {
        return cy.get('#submit_search');
    }

    ProductCardByName(Name) {
        return cy.xpath("//div[contains(@class,'productinfo') and contains(.,'" + Name + "')]");
    }

    // ==================================== METHODS ==================================== //

    RechercherProduit(ProductName) {
        this.searchProductsInput.type(ProductName);

        this.LoupeBtn.click();

        cy.location('href').should('include', 'products?search');
    }

    VerifierPresenceProduit(ProductName) {
        this.ProductCardByName(ProductName).should('be.visible');
    }

}