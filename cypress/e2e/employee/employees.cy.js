describe('Employee', () =>{

    it('Creating new employee', () => {

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
            cy.get('.sc-eeDRCX > :nth-child(1) > #employee-role').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("Field Sales Manager");
            cy.contains('Field Sales Manager')
              .first()
              .click();
            cy.wait(2000);
            cy.get('.sc-eeDRCX > :nth-child(1) > #employee-role-to-report-to-3110').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("SFA TESTING");
            cy.contains('SFA TESTING')
            .first()
            .click();
          cy.wait(2000);
          cy.get('body').click(0, 0);
          cy.generateEmail().then((email) => {
            cy.get('#employee-email').type(email);
          });

          cy.generatePhoneNumber().then((phonenumber) => {
            cy.get('[style="width: 100%; margin-top: -4px;"] > .sc-fBWQRA > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type(phonenumber);
          });
          cy.get('.sc-eeDRCX > :nth-child(1) > #employee-office-address').click();
        //   cy.get('[data-testid="address-dropdown"]').click(); // open dropdown
            cy.get('.sc-koXPm')   // adjust to actual item selector
                .eq(0)                  // first item (index 0)
                .click();
          cy.get('.dpJqzr > .sc-dCFHLc > .sc-eeDRCX > :nth-child(1) > .sc-tagGt').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("State")
          cy.contains('State')
          .first()
          .click();
          cy.get('body').click(0, 0);
          cy.get('.sc-eDPEui > .dctKQR > :nth-child(2) > .sc-imWYAH > .sc-dCFHLc > .sc-eeDRCX > :nth-child(1) > .sc-tagGt').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("All")
          cy.contains('All')
          .first()
          .click();
          cy.get('.iQZvxT').click();
          cy.wait(2000);
          cy.contains('Employee Created').should('be.visible');


        
          

        });

    });

    it('Creating duplicate employee', () => {

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
          cy.get('.sc-eeDRCX > :nth-child(1) > #employee-role').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("Field Sales Manager");
          cy.contains('Field Sales Manager')
            .first()
            .click();
          cy.wait(2000);
          cy.get('.sc-eeDRCX > :nth-child(1) > #employee-role-to-report-to-3110').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("SFA TESTING");
          cy.contains('SFA TESTING')
          .first()
          .click();
        cy.wait(2000);
        cy.get('body').click(0, 0);
        cy.generateEmail().then((email) => {
          cy.get('#employee-email').type(email);
        });

        cy.generatePhoneNumber().then((phonenumber) => {
          cy.get('[style="width: 100%; margin-top: -4px;"] > .sc-fBWQRA > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type(phonenumber);
        });
        cy.get('.sc-eeDRCX > :nth-child(1) > #employee-office-address').click();
      //   cy.get('[data-testid="address-dropdown"]').click(); // open dropdown
          cy.get('.sc-koXPm')   // adjust to actual item selector
              .eq(0)                  // first item (index 0)
              .click();
        cy.get('.dpJqzr > .sc-dCFHLc > .sc-eeDRCX > :nth-child(1) > .sc-tagGt').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("State")
        cy.contains('State')
        .first()
        .click();
        cy.get('body').click(0, 0);
        cy.get('.sc-eDPEui > .dctKQR > :nth-child(2) > .sc-imWYAH > .sc-dCFHLc > .sc-eeDRCX > :nth-child(1) > .sc-tagGt').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("All")
        cy.contains('All')
        .first()
        .click();
        cy.get('.iQZvxT').click();
        cy.wait(2000);
        cy.contains('Employee already exists. Phone number or employee code is already in use.').should('be.visible');


      
        

      });

  });

});
