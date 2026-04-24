describe('Sign-up Flow', () =>{

    it('verifying user is able visit help & support', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.validLoginFlow(customerDetailsInfo);

            cy.get('#sidebar-help-support-page-link > .sc-cVzyXr').click();

            cy.wait(2000);

            cy.contains('Help & Support').should('be.visible');

            cy.contains('Talk to us').should('be.visible');

            cy.contains('07000055555')
                .should('be.visible');
            cy.contains('Chat with us').should('be.visible');

            cy.contains('07000055555')
                .should('have.length.at.least', 2); // appears twice (call + chat)

            cy.contains('Send us an email').should('be.visible');

            cy.contains('support@omnibizafrica.freshdesk.com')
                .should('be.visible');




        });
     

    });

});