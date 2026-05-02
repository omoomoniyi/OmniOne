describe("productivityTracker", () => {
    it("Verify user is able to create beatplan successfully", () => {
  
      cy.visit("/");
  
      //cy.screenshot("Home Page")
  
        cy.fixture("customerData").then((userData) => {
        let customerDetailsInfo = userData.customerInfo[0];
        cy.validLoginFlow(customerDetailsInfo);
  
        cy.wait(20000);

        cy.get('#sales').click();

        cy.wait(10000);

        cy.get('#productivity-tracker').click();
        cy.get('.sc-eeDRCX > div > .sc-gsFSXt').click();
        cy.wait(2000);
        cy.get('#create_plan-button').click();

        cy.generateBeatplanName().then((name) => {
            cy.get('.gJlsDt > :nth-child(1) > .sc-dtInlp > .sc-kOPcWA').type(name);
            cy.log(name);
          });
        
        cy.setStartAndEndDate(6);
        cy.get('body').click(0, 0);


        cy.get('#frequency-select').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Daily')
        cy.contains('Daily')
          .first()
          .click();

        cy.get('#repeats_every').type('1');

        cy.get('#which_days_should_this_take_place').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Mon');
        cy.contains('Mon')
          .first()
          .click();
        cy.get('body').click(0, 0);

        cy.wait(2000);

        cy.get('#which_days_should_this_take_place').click();
        cy.contains('Tue')
          .first()
          .click();
        cy.get('body').click(0, 0);

        cy.get('#create-plan-btn-trigger').click();



        cy.wait(5000);


        cy.get('.sc-eeDRCX > :nth-child(1) > #role-select').click();   // open dropdown
        cy.get('#role-select-search').type('Field Executive');
        cy.contains('Field Executive')               // find option
          .should('be.visible')
          .click();


        cy.wait(2000);

        cy.get('body').click(0, 0);
        
        cy.get('#employee-select').click(); 
        cy.contains('Katty Test Test')
        .first()
        .click();
        cy.get('body').click(0, 0);
        cy.wait(2000);


        cy.get('#customer-select').click();
        cy.get('.sc-jxOSlu > :nth-child(1)').click();
        cy.get('body').click(0, 0);

        cy.get('#create-sub-plan-btn-trigger').click();
        cy.wait(2000);
        cy.contains('Sub-beat plan created successfully! You can add in more plans.');
        cy.wait(5000);
        cy.get('.iQZvxT').click();


        });       

    });

});