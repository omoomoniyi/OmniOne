describe('Sign-up Flow', () =>{

    it('signing-up new manucfacturer account', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.signup(customerDetailsInfo);




        });
     

    });

});