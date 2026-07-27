describe('Settings', () => {
  beforeEach(() => {
    cy.session('omni-settings-customer-type-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(30000);
    });
    cy.visit('/');
  });

  it('verifying user is able to create customer type', () => {
    cy.get('#settings').click();

    cy.get('#settings-sales-btn').click();
    cy.get('#customer-type-page-link').click();
    cy.get('#customer-type-actions-button').click();
    cy.get('#add_new_customer_type-button').click();

    // cy.generateCustomerType().then((customerType) => {
    //     cy.get('#customer-type-name-input').type(customerType);
    //   });

    // Generate and create the customer type
    let customerTypeName;

    cy.generateCustomerType().then((customerType) => {
      customerTypeName = customerType;
      cy.get('#customer-type-name-input').type(customerType);

      // Save the customer type
      cy.get('#create-customer-type-proceed-button').click();
    });

    cy.get('#customer-type-buyers-select').click();
    cy.get('#customer-type-buyers-select-option-1').click();

    cy.get('#customer-type-sellers-select').click();
    cy.get('#customer-type-sellers-select-option-1').click();

    cy.get('#customer-type-app-type-select-1').click();

    cy.get('#customer-type-has-segment-no-radio').click();

    cy.get('.iQZvxT').click();

    cy.get('#customer-fields-cards-radio').click();

    cy.get('.iQZvxT').click();

    //             // Open the Customer Type dropdown
    // cy.get('#config-customer-types-select').click();

    // // Get all dropdown options
    // cy.get('[id*="-option-"]').then(($options) => {

    // // Keep only options that end with a number
    // const validOptions = [...$options].filter(option => {
    //     return /\d+$/.test(option.innerText.trim());
    // });

    // // Pick one randomly
    // const randomOption = Cypress._.sample(validOptions);

    // // Log the selected customer type
    // cy.log(`Selected: ${randomOption.innerText.trim()}`);

    // // Click it
    // cy.wrap(randomOption).click();
    // });

    cy.wait(20000);

    cy.get('#config-customer-types-select').click();

    cy.contains(customerTypeName)
      .should('be.visible')
      .click();
  });
});
