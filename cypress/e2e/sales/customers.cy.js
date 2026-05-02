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

      cy.get('#business_name')

      cy.generateBusinessName().then((name) => {
        cy.get('#business_name').type(name);
      });

      cy.get('#proceed-btn-trigger').click();

      cy.generateBusinessName().then((name) => {
        cy.get('#business_location_name').type(name);
      });

      cy.get('#location_type').click();
      cy.get('#location_type-search').click();
      cy.get('#location_type-option-3').click();
      cy.get('#state').click();
      cy.wait(2000);
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
      cy.wait(10000);
      cy.get('#proceed-btn-trigger').click();
      cy.wait(10000);

    });
  });

  it("Adding Duplicate Customers", () => {

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

      cy.get(':nth-child(3) > .sc-fBWQRA > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('8059864828');

      cy.get('#proceed-btn-trigger').click();


      cy.get(':nth-child(1) > .sc-bypJrU').type('111111');

      cy.get('.dPGPhg').click();

      cy.wait(5000);

      cy.get('#business_name')

      cy.generateBusinessName().then((name) => {
        cy.get('#business_name').type(name);
      });

      cy.get('#proceed-btn-trigger').click();



      cy.generateBusinessName().then((name) => {
        cy.get('#business_location_name').type(name);
      });

      cy.get('#location_type').click();
      cy.get('#location_type-search').click();
      cy.get('#location_type-option-3').click();
      cy.get('#state').click();
      cy.wait(2000);
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
      cy.wait(3000);
      cy.get('#proceed-btn-trigger').click();

      cy.contains("Phone Number Already exists");

    });
  });

  it("Creating Customer with invalid OTP", () => {

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

      cy.get(':nth-child(3) > .sc-fBWQRA > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('8059864828');

      cy.get('#proceed-btn-trigger').click();


      cy.get(':nth-child(1) > .sc-bypJrU').type('999999');

      cy.get('.dPGPhg').click();

      cy.contains("Invalid OTP");

      cy.wait(5000);


    });
  });

  it("Adding new customer when LGA has city but city option is not selected ", () => {

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

      cy.get('#business_name')

      cy.generateBusinessName().then((name) => {
        cy.get('#business_name').type(name);
      });

      cy.get('#proceed-btn-trigger').click();

      cy.generateBusinessName().then((name) => {
        cy.get('#business_location_name').type(name);
      });

      cy.get('#location_type').click();
      cy.get('#location_type-search').click();
      cy.get('#location_type-option-3').click();
      cy.get('#state').click();
      cy.wait(2000);
      cy.get('#state-search').type('Lagos');
      cy.get('#state-option-125').click();
      cy.wait(2000);
      cy.get('#lga').click();
      cy.wait(2000);
      cy.get('#lga-search').type('Surulere')
      cy.get('#lga-option-1527').click();
      cy.wait(2000);
      // cy.wait(2000);
      // cy.get('#city-search').type('Aguda')
      // cy.get('#city-option-124').click();
      cy.get('#street_name').type('Market Square');
      cy.get('#unit_number').type('50');
      cy.wait(10000);
      cy.get('#proceed-btn-trigger').click();
      cy.wait(2000);
      cy.contains('Please fill all required fields in Location Details.');
      cy.wait(10000);

    });
  });


});
