describe('3 - Module : 1 - Assertions & Vérifications', () => {


    it("Assertions : Atelier 4 : Rechercher un produit et Vérifier ses données", () => {

        cy.visit('https://automationexercise.com');

        cy.contains('a', 'Products').click();

        cy.location('pathname', { timeout: 8000 }).should('include', '/products');

        cy.get('#search_product').type('Winter Top');

        cy.get("#submit_search").click();

        let productByName = "//div[contains(@class,'productinfo') and contains(.,'Winter Top')]";

        cy.xpath(productByName).should('be.visible');
        cy.xpath(productByName+'//img').should('have.attr','src','/get_product_picture/5');
        cy.xpath(productByName+"//*[contains(text(),'Rs.')]").should('have.text','Rs. 600');

        cy.xpath(productByName+"//a[contains(@class,'add-to-cart')]").should("exist");
        cy.xpath(productByName+"//a[contains(@class,'add-to-cart')]").should("have.text",'Add to cart');
        cy.xpath(productByName+"/ancestor::div[@class='product-image-wrapper']//a[contains(.,'View Product')]").click();

        cy.location('pathname', { timeout: 8000 }).should('include', '/product_details');

    });
});