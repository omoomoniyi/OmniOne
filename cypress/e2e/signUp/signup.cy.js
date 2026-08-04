describe('sign-up', () =>{

    it('signing-up new manucfacturer account', () => {

        cy.visit('/');


        //To read CustomerData.json
        cy.fixture('customerData').then((userData)=>{  

            let customerDetailsInfo = userData.customerInfo[0];
            cy.signup(customerDetailsInfo);
            cy.wait(5000);
            cy.get('#importer_exporter').click();
            // cy.get('#manufacturer').click();
            cy.get('#jurisdiction_of_registration').click();
            // cy.wait(10000);
        
            // cy.generateCACNumber().then((cacNumber) => {
            //     cy.get('#cac_number').type(cacNumber);
            //   });
            

            cy.generateTradingCompanyName().then((companyName) => {
                cy.get('#company_trading_name').type(companyName);
              });

            cy.get('#business_segment').click();
            cy.get('#business_segment-option-1').click();


            cy.get('#no_of_employee').click();
        
            cy.wait(2000);
            cy.get('#no_of_employee-option-1').click();

            cy.wait(2000);

            cy.get('#state').click();
            cy.wait(5000)

            cy.get('#state-search').type('Lagos');
            cy.get('#state-option-125').click();
            cy.wait(2000);
            cy.get('#lga').click();
            cy.wait(2000);
            cy.get('#lga-search').type('Surulere')
            cy.get('#lga-option-1527').click();
            cy.wait(2000);
            cy.get('#city').click();
            cy.wait(2000);
            cy.get('#city-search').type('Aguda')
            cy.get('#city-option-124').click();
            cy.get('#street_name').type('Market Square');
            cy.get('#unit_number').type('50');

            // cy.generatePhoneNumber().then((phonenumber) => {
            //     cy.get('#alternate_contact_phone_number').type(phonenumber);
            //   });

            cy.get('.kDmuAZ > .sc-iGgWBk').click();
            cy.get('input[type="file"]').selectFile(
                  'cypress/fixtures/fileUploads/MO Drinks.png',
                  { force: true }
                );
            cy.wait(10000);

            cy.get('.gbTVtS > .sc-gsFSXt').click();

            cy.wait(30000);
            




        });
     

    });

});