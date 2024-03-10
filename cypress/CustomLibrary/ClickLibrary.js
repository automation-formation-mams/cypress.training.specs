const { WaitLibrary } = require('./WaitLibrary');
const waitLibrary = new WaitLibrary();

exports.ClickLibrary = class ClickLibrary {

    async ClickTillElementDisappear(ObjectToClick) {

        let count;
        await cy.get(ObjectToClick, { timeout: 2000 }).then((elements) => {
            count = elements.length;
            cy.log("COMMAND COUNT = " + count);
        });
        await waitLibrary.WaitBySecond(2);
        await cy.log('FIRST COUNT OBJ = ' + count)
        while (count > 0) {
            try {
                await cy.get(ObjectToClick).click();
                await waitLibrary.WaitBySecond(2);
                await cy.get(ObjectToClick, { timeout: 2000 }).should('have.have.length',0).then((el) => {
                    if (el.length === 0) {
                        count = 0
                    }
                    else {
                        count = el.length;
                    }
                    cy.log("SECOND COUNT = " + count);
                });
            }
            catch (Uncaught) {
                count = 0;
                return e
            }

        }
    }
}

