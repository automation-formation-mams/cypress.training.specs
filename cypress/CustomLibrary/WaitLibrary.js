exports.WaitLibrary = class WaitLibrary {

    WaitBySecond(second) {
        cy.wait(second * 1000);
        cy.log('Attente de : ' + second + ' s !!')
    }

    WaitTillObjectExist(XpathObject,timeoutMax)
    {
        cy.xpath(XpathObject,{timeout:timeoutMax}).should("be.visible");
        cy.log('Object is Visible !!!');
    }


}