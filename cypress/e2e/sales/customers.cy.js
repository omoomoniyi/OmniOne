describe('Customers', () => {
  beforeEach(() => {
    cy.session('omni-sales-customers-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(20000);
    });
    cy.visit('/');
  });

  it('Adding New Customers', () => {
    cy.get('#sales').click();

    cy.get('#customers').click();
    cy.wait(5000);

    cy.get('#customer-actions-button').click();
    cy.get('#add_single_customer-button').click();



    // cy.get('#customer_type-selected').click();
    // cy.get('#customer_type-search').type('Distributor');
    // cy.contains('Distributor')
    //   .first()
    //   .click();

    cy.get('#customer_type-selected').click();

    cy.get('#customer_type-search')
      .type('Distributor');

    cy.contains(/^Distributor$/)
      .should('be.visible')
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
      cy.get('#contact_phone_number').type(phonenumber);
    });

    cy.get('#proceed-btn-trigger').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > .sc-bypJrU').type('111111');

    cy.get('.dPGPhg').click();

    cy.wait(5000);

    cy.get('#business_name');

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
    cy.get('#state-selected').click();
    cy.wait(2000);
    cy.get('#state-search').type('Lagos');
    cy.get('#state-option-125').click();
    cy.wait(2000);
    cy.get('#lga').click();
    cy.wait(2000);
    cy.get('#lga-search').type('Surulere');
    cy.get('#lga-option-1527').click();
    cy.wait(2000);
    cy.get('#city').click();
    cy.wait(2000);
    cy.get('#city-search').type('Aguda');
    cy.get('#city-option-124').click();
    cy.get('#street_name').type('Market Square');
    cy.get('#unit_number').type('50');
    cy.wait(10000);
    cy.get('#proceed-btn-trigger').click();
    cy.wait(10000);
  });

  it('Adding Duplicate Customers', () => {
    cy.get('#sales').click();

    cy.get('#customers').click();
    cy.wait(5000);

    cy.get('#customer-actions-button').click();
    cy.get('#add_single_customer-button').click();

    cy.wait(5000);
    cy.get('#customer_type-selected').click();

    cy.get('#customer_type-search')
      .type('Distributor');

    cy.contains(/^Distributor$/)
      .should('be.visible')
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

    cy.get('#contact_phone_number').type('8059864828');


    cy.get('#proceed-btn-trigger').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > .sc-bypJrU').type('111111');

    cy.get('.dPGPhg').click();

    cy.wait(5000);

    cy.get('#business_name');

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
    cy.get('#state-selected').click();
    cy.wait(2000);
    cy.get('#state-search').type('Lagos');
    cy.get('#state-option-125').click();
    cy.wait(2000);
    cy.get('#lga').click();
    cy.wait(2000);
    cy.get('#lga-search').type('Surulere');
    cy.get('#lga-option-1527').click();
    cy.wait(2000);
    cy.get('#city').click();
    cy.wait(2000);
    cy.get('#city-search').type('Aguda');
    cy.get('#city-option-124').click();
    cy.get('#street_name').type('Market Square');
    cy.get('#unit_number').type('50');
    cy.wait(3000);
    cy.get('#proceed-btn-trigger').click();

    cy.contains('Phone Number Already exists');
  });

  it('Creating Customer with invalid OTP', () => {
    cy.get('#sales').click();

    cy.get('#customers').click();
    cy.wait(5000);

    cy.get('#customer-actions-button').click();
    cy.get('#add_single_customer-button').click();
    cy.get('#customer_type-selected').click();

    cy.get('#customer_type-search')
      .type('Distributor');

    cy.contains(/^Distributor$/)
      .should('be.visible')
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

    cy.get('#contact_phone_number').type('8059864828');

    cy.get('#proceed-btn-trigger').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > .sc-bypJrU').type('999999');

    cy.get('.dPGPhg').click();

    cy.contains('Invalid OTP');

    cy.wait(5000);
  });

  it('Adding new customer when LGA has city but city option is not selected ', () => {
    cy.get('#sales').click();

    cy.get('#customers').click();
    cy.wait(5000);

    cy.get('#customer-actions-button').click();
    cy.get('#add_single_customer-button').click();
    cy.get('#customer_type-selected').click();

    cy.get('#customer_type-search')
      .type('Distributor');

    cy.contains(/^Distributor$/)
      .should('be.visible')
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
      cy.get('#contact_phone_number').type(phonenumber);
    });

    cy.get('#proceed-btn-trigger').click();

    cy.wait(5000);

    cy.get(':nth-child(1) > .sc-bypJrU').type('111111');

    cy.get('.dPGPhg').click();

    cy.wait(5000);

    cy.get('#business_name');

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
    cy.get('#state-selected').click();
    cy.wait(2000);
    cy.get('#state-search').type('Lagos');
    cy.get('#state-option-125').click();
    cy.wait(2000);
    cy.get('#lga').click();
    cy.wait(2000);
    cy.get('#lga-search').type('Surulere');
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
    cy.wait(5000);
  });

  it('Verify user is able to re-assign customer successfully ', () => {
    cy.get('#sales').click();

    cy.get('#customers').click();
    cy.wait(5000);

    cy.get('#customer-actions-button').click();
    cy.get('#reassign_customers-button').click();
    cy.get(5000);
    cy.get('#assign_from').click();
    cy.wait(5000);
    cy.get('#assign_from-search').type('Rasak ');
    cy.contains('Rasak ')
      .first()
      .click();
    // cy.get('#assign_from')
    cy.get('body').click(0, 0);
    // cy.get(':nth-child(2) > .sc-czkgLO').click();
    cy.get('.sc-dycYrq').click();

    cy.get('tbody tr label').eq(8).click();

    //cy.get('#checkbox_row_1855890').click();
    cy.get('#assign_to').click();
    cy.wait(5000);
    cy.get('#assign_to-search').type('SFA ');
    cy.contains('SFA ')
      .first()
      .click();
    cy.get('#assign-employee-to-customer-button').click();
  });
});
