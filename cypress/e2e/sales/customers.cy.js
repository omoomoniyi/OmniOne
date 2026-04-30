describe("Customers", () => {
  it("Adding New Customers", () => {

    cy.visit("/");

    //cy.screenshot("Home Page")

    cy.fixture("customerData").then((userData) => {
      let customerDetailsInfo = userData.customerInfo[0];
      cy.validLoginFlow(customerDetailsInfo);

      cy.wait(20000);
      cy.get('#sidebar-sales-page-link > .sc-cVzyXr').click();
      
      cy.get('#customers').click();
      cy.wait(5000);
      cy.get('.sc-eeDRCX > :nth-child(1) > .sc-gsFSXt').click();
      cy.get('.sc-imWYAH > :nth-child(1) > .sc-bVVIot').click();
      cy.get(':nth-child(1) > :nth-child(1) > .sc-eeDRCX > :nth-child(1) > .sc-tagGt').click();
      cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Distributor')
      cy.contains('Distributor')
      .first()
      .click();

      cy.generateFirstName().then((firstName) => {
        cy.get('#contact_first_name')
          //.should('be.visible')
          .type(firstName);
      });

      cy.generateLastName().then((lastName) => {
        cy.get('#contact_last_name')
          //.should('be.visible')
          .type(lastName);
      });

      cy.generatePhoneNumber().then((phonenumber) => {
        cy.get(':nth-child(3) > .sc-fBWQRA > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type(phonenumber);
      });

      cy.get('#proceed-btn-trigger').click();

      cy.get(':nth-child(1) > .sc-bypJrU').type('111111');

      cy.get('.dPGPhg').click();

      cy.wait(5000);

    });
  });
});
