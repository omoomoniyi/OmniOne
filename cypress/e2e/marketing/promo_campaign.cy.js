describe('Marketing', () => {
  beforeEach(() => {
    cy.session('omni-marketing-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(20000);
    });
    cy.visit('/');
  });

  it('Verify user is a able to Create new promo type - Cashback', () => {
    cy.get('#marketing').click();
    cy.wait(2000);
    cy.get('#promo-and-campaigns').click();
    cy.get('#create-promo').click();
    cy.get('#cashback-and-loyalty').click();
    cy.get('#promo-type-proceed-btn-trigger').click();

    cy.generatePromoName().then((promoName) => {
      cy.log(promoName);

      cy.get('#promo_name')
        .type(promoName);
    });

    cy.setPromoDates();

    cy.get('#create-promo-proceed-btn-trigger').click();
    cy.get('#select_brand').click();
    cy.get('[id*="-option-"]')
      .first()
      .click();
    cy.get('#select_sku_that_applies_to_promo').click();
    cy.wait(5000);
    cy.get('[id*="-option-"]')
      .eq(1)
      .click();
    cy.get('#minimum_order_quantity').type('5');
    cy.get('#total_amount_dedicated_to_this_cashback').type(10000);
    cy.get('#total_cashback_value_per_customer').type(200);
    cy.get('#how_many_times_is_a_customer_eligible_for_this').type(10);

    cy.get('#location_selector').click();
    cy.get('[id*="-option-"]')
      .first()
      .click();
    cy.get('body').click(0, 0);
    cy.wait(5000);

    cy.get('#state').click();

    cy.get('[id^="state-option-"]')
      .then(($options) => {
        const states = [...$options]
          .map((el) => el.innerText.trim())
          .filter((text) => text !== 'All')
          .sort();

        const randomState = states[Math.floor(Math.random() * states.length)];

        cy.contains(randomState).click();
      });

    cy.get('body').click(0, 0);
    cy.get('#which_customer_type_do_you_want_this_to_apply_to').click();
    cy.get('[id*="-option-"]')
      .first()
      .click();
    cy.get('body').click(0, 0);
    cy.get('#customer_app').click();
    cy.get('#agent_app').click();
    cy.get('#Create-Promo-Button').click();
    cy.contains('Promo created successfully!')
      .should('be.visible');
    cy.wait(2000);
  });

  it('Verify user is a able Deactivate Promo type - Cashback', () => {
    cy.get('#marketing').click();
    cy.wait(2000);
    cy.get('#promo-and-campaigns').click();
    cy.get('tbody tr')
      .first()
      .find('[id$="-action-button"]')
      .click();
    cy.get('[id$="Deactivate Promo-button"]').click();
    cy.wait(2000);
    cy.get('#deactivate-promo-confirm').click();
    cy.contains('has been disabled successfully')
      .should('be.visible');
    cy.wait(5000);
  });

  it('Verify that user is able click on the Deactivated Promos Tab', () => {
    cy.get('#marketing').click();
    cy.wait(2000);
    cy.get('#promo-and-campaigns').click();
    cy.get('#promo-top-card-inactive').click();
    cy.wait(5000);
  });

  it('Verify that user is able view Active Promos', () => {
    cy.get('#marketing').click();
    cy.wait(2000);
    cy.get('#promo-and-campaigns').click();
    cy.get('tbody tr')
      .first()
      .find('[id$="-action-button"]')
      .click();
    cy.wait(5000);
    cy.get('[id$="View Promo-button"]').click();

    cy.contains('Promo Details')
      .should('be.visible');

    cy.contains('Active')
      .should('be.visible');
  });
});
