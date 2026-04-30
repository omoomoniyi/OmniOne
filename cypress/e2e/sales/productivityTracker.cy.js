describe("Customers", () => {
    it("Adding New Customers", () => {
  
      cy.visit("/");
  
      //cy.screenshot("Home Page")
  
        cy.fixture("customerData").then((userData) => {
        let customerDetailsInfo = userData.customerInfo[0];
        cy.validLoginFlow(customerDetailsInfo);
  
        cy.wait(20000);

        cy.get('#sales').click();

        cy.get('#productivity-tracker').click();
        //cy.get('#reassign-plan-btn-trigger');
        cy.get('.sc-eeDRCX > div > .sc-gsFSXt').click();
        cy.wait(2000);
        cy.get('#create_plan-button').click();

        cy.generateBeatplanName().then((name) => {
            cy.get('.gJlsDt > :nth-child(1) > .sc-dtInlp > .sc-kOPcWA').type(name);
            cy.log(name);
          });







        


      




        // cy.get('.sc-eeDRCX > :nth-child(1) > #role-select').click();
        // cy.get('.sc-kOPcWA').type('Field Executive')
        // cy.get('.sc-jxOSlu > :nth-child(1)')
        // //cy.contains('Field Executive')
        // .first()
        // .click();


        // cy.get('.sc-eeDRCX > :nth-child(1) > #role-select').click();   // open dropdown

        // cy.contains('Field Executive')               // find option
        //   .should('be.visible')
        //   .click();


        // cy.wait(2000);

        // cy.get('body').click(0, 0);

        // cy.get(':nth-child(1) > #employee-select').click();
        // cy.wait(2000);
        // cy.get('.sc-kOPcWA').type("SFA TESTING");
      //   cy.contains('SFA TESTING')
      //   .first()
      //   .click();
      // cy.wait(2000);


        });       

    });

});