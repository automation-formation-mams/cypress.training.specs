

describe('5 - Module : API', () => {



    it("API  - Ex 1 -  Lancer API GET All Brands", () => {

        const apiURL = 'https://automationexercise.com/api/brandsList'

        cy.request({
            method: 'GET',
            url:apiURL
        }).then((response)=>{

            cy.log(JSON.stringify(response.body));
            cy.log(response.status);

            expect(response.status).to.equal(200)
            expect(response.body).to.contain("Polo")

        })
    });

    it('API - EX 2 - Lancer API POST - Vérifier est ce que le USER exist',()=> {
        const apiURL = ' https://automationexercise.com/api/verifyLogin'
        cy.request({
            method:'POST',
            url:apiURL,
            form:true,
            body:{
                email : 'hps.ma@cypress.com',
                password: 'passwordcypress'
            },     

        }).then((response)=>{

            cy.log(JSON.stringify(response.body));

            cy.log(response.status);

            expect(response.status).to.equal(200)
            expect(response.body).to.contain("User exists!")
        })
    })

});