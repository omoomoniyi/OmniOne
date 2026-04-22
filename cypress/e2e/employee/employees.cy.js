describe('Employee', () =>{

    it.only('Creating new employee', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[0];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.validLoginFlow(customerDetailsInfo);
            cy.wait(20000);
            cy.get('#sidebar-employee-page-link > .sc-cVzyXr').click();
            cy.get('#employee-dir-actions').click();
            cy.get('.sc-koXPm > .sc-imWYAH > :nth-child(1)').click();
            cy.wait(3000);

            cy.generateFullName().then(({ firstName, lastName }) => {
                cy.get(':nth-child(1) > .sc-dtInlp > #employee-name').type(firstName);
                cy.get(':nth-child(2) > .sc-dtInlp > #employee-name').type(lastName);
              });
            cy.get('.sc-eeDRCX > :nth-child(1) > #employee-team').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("QA Team")
            cy.contains('QA Team')
              .first()
              .click();
            cy.wait(2000);
            cy.generateEmployeeCode().then((code) => {
                cy.get('#employee-code').type(code);
              });

        });

    });

});
