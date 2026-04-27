describe('Sign-up Flow', () =>{

    it('verifying user is able visit help & support', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.validLoginFlow(customerDetailsInfo);

            cy.get('#sidebar-help-support-page-link > .sc-cVzyXr').click();

            cy.wait(10000);

            cy.contains('Help & Support').should('be.visible');





        });
     

    });

});