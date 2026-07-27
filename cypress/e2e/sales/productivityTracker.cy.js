describe('productivityTracker', () => {
  beforeEach(() => {
    cy.session('omni-sales-productivity-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(20000);
    });
    cy.visit('/');
  });

  it('Verify user is able to create beatplan successfully', () => {
    cy.get('#sales').click();

    cy.wait(10000);

    cy.get('#productivity-tracker').click();
    // cy.get('.sc-eeDRCX > div > .sc-gsFSXt').click();
    cy.get('#create-plan-btn-trigger').click();
    cy.wait(2000);
    cy.get('#create_plan-button').click();

    cy.generateBeatplanName().then((name) => {
      cy.get('#plan_name').type(name);
      cy.log(name);
    });

    cy.setStartAndEndDate(6);
    cy.get('body').click(0, 0);

    cy.get('#frequency-select').click();
    cy.get('#frequency-select-search').type('Daily');
    cy.contains('Daily')
      .first()
      .click();

    cy.get('#repeats_every').type('1');

    cy.get('#which_days_should_this_take_place').click();
    cy.get('#which_days_should_this_take_place-search').type('Mon');
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

    cy.get('#role-select-selected').click();   // open dropdown
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
    cy.get('#customer-select-selected').click();
    cy.get('[id^="customer-select-option-"]')
    .first()
    .click();
    // cy.get('.sc-jxOSlu > :nth-child(1)').click();
    cy.get('body').click(0, 0);

    cy.get('#create-sub-plan-btn-trigger').click();
    cy.wait(2000);
    cy.contains('Sub-beat plan created successfully! You can add in more plans.');
    cy.wait(5000);
    cy.get('.iQZvxT').click();
  });
});
