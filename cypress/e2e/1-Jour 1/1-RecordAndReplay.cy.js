describe('1 - Module : Record & Replay', () => {
  it('Record & Replay : Test 1 : Lancer Le site automationexercice.com', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click();
    /* ==== End Cypress Studio ==== */
  })


  /* ==== Test Created with Cypress Studio ==== */
  it("Record & Replay : Test 2 : Ouvrir la page d'un produit", function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click();
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('Record & Replay : Atelier 1 : Recherche Produit', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://automationexercise.com/');
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click();
    cy.get('#search_product').clear('M');
    cy.get('#search_product').type('MEN TSHIRT');
    cy.get('#submit_search').click();
    cy.get('.choose > .nav > li > a').click();
    /* ==== End Cypress Studio ==== */
  });
})