describe('Employee', () => {
  beforeEach(() => {
    cy.session('omni-employee-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(20000);
    });
    cy.visit('/');
  });

  it('Creating new employee', () => {
    cy.get('#sidebar-employee-page-link').click();
    cy.get('#employee').click();
    cy.wait(3000);
    cy.get('#employee-dir-actions').click();
    cy.get('#employee-dir-actions-add_single_employee-button').click();
    cy.wait(3000);

    cy.generateFullName().then(({ firstName, lastName }) => {
      cy.get('#create-employee-first-name').type(firstName);
      cy.get('#create-employee-last-name').type(lastName);
    });
    cy.get('#employee-team-selected').click();
    cy.get('#employee-team-search').type('QA Team');
    cy.contains('QA Team')
      .first()
      .click();
    cy.wait(2000);
    cy.generateEmployeeCode().then((code) => {
      cy.get('#employee-code').type(code);
    });
    cy.get('#employee-role-selected').click();
    cy.get('#employee-role-search').type('Field Sales Manager');
    cy.contains('Field Sales Manager')
      .first()
      .click();
    cy.wait(2000);
    cy.get('#employee-role-to-report-to-6051').click();
    cy.get('#employee-role-to-report-to-6051-option-125470').click();
    cy.get('body').click(0, 0);

    cy.get('#employee-role-to-report-to-6757').click();
    cy.get('#employee-role-to-report-to-6757-option-646317').click();
    cy.get('body').click(0, 0);
    cy.wait(2000);
    cy.generateEmail().then((email) => {
      cy.get('#employee-email').type(email);
    });

    cy.generatePhoneNumber().then((phonenumber) => {
      cy.get('#phone_number').type(phonenumber);
    });    
    cy.get('#employee-office-address-selected').click();
    cy.get('[id^="employee-office-address-option-"]')
    .first()
    .click();
    cy.get('#select_which_level_you_would_set_your_location_for-selected').click();
    cy.get('#select_which_level_you_would_set_your_location_for-search').type('State');
    cy.contains('State')
      .first()
      .click();
    cy.get('body').click(0, 0);
    cy.get('#state-selected').click();
    cy.get('#state-search').type('All');
    cy.contains('All')
      .first()
      .click();
    cy.get('.iQZvxT').click();
    cy.wait(2000);
    cy.contains('Employee Created').should('be.visible');
  });

  it('Creating duplicate employee', () => {
    //cy.get('#sidebar-employee-page-link > .sc-cVzyXr').click();
    cy.get('#employee').click();
    cy.wait(3000);
    cy.get('#employee-dir-actions').click();
    cy.get('#employee-dir-actions-add_single_employee-button').click();
    cy.wait(3000);

    cy.generateFullName().then(({ firstName, lastName }) => {
      cy.get('#create-employee-first-name').type(firstName);
      cy.get('#create-employee-last-name').type(lastName);
    });
    cy.get('#employee-team-selected').click();
    cy.get('#employee-team-search').type('QA Team');
    cy.contains('QA Team')
      .first()
      .click();
    cy.wait(2000);
    cy.generateEmployeeCode().then((code) => {
      cy.get('#employee-code').type(code);
    });
    cy.get('#employee-role-selected').click();
    cy.get('#employee-role-search').type('Field Sales Manager');
    cy.contains('Field Sales Manager')
      .first()
      .click();
    cy.wait(2000);

    cy.get('#employee-role-to-report-to-6051').click();
    cy.get('#employee-role-to-report-to-6051-option-125470').click();
    cy.get('body').click(0, 0);
    cy.get('#employee-role-to-report-to-6757').click();
    cy.get('#employee-role-to-report-to-6757-option-646317').click();
    cy.get('body').click(0, 0);
    cy.generateEmail().then((email) => {
      cy.get('#employee-email').type(email);
    });
    cy.get('#phone_number').type('8029829449');
    cy.get('#employee-office-address-selected').click();
    cy.get('[id^="employee-office-address-option-"]')
    .first()
    .click();
    cy.get('#select_which_level_you_would_set_your_location_for-selected').click();
    cy.get('#select_which_level_you_would_set_your_location_for-search').type('State');
    cy.contains('State')
      .first()
      .click();
    cy.get('body').click(0, 0);
    cy.get('#state-selected').click();
    cy.get('#state-search').type('All');
    cy.contains('All')
      .first()
      .click();
    cy.get('.iQZvxT').click();
    cy.wait(2000);
    cy.contains('Employee already exists. Phone number or employee code is already in use.').should('be.visible');
  });
});
