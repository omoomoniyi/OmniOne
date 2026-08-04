describe('Product', () => {
  beforeEach(() => {
    cy.session('omni-user-session', () => {
      cy.visit('/');
      cy.validLoginFlow();
      cy.wait(20000);
    });
    cy.visit('/');
  });

  it('Creating Product', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.wait(3000);
    cy.get('#products').click();
    cy.wait(3000);
    cy.get('#add-product-button').click();
    cy.wait(3000);
    cy.get('#add_single_product-button').click();
    cy.get('#add-single-product-searchbar').type('Test-ing');
    cy.get('.iGcBwn').click();
    //selecting and item on the drop-down list
    cy.contains('Test-ing')
      .first()
      .click();
    cy.get('.dPGPhg').click();
    cy.generateVariant().then((variant) => {
      cy.get('#general-info-variant').type(variant);
    });
    cy.generateManufacturerSKU().then((sku) => {
      cy.get('#general-info-manufacturer-sku-code').type(sku);
    });
    cy.get('#general-info-packaging-type').click();
    cy.contains('CASE')
      .first()
      .click();
    cy.get('.kJwPWr').click();
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/fileUploads/MO Drinks.png',
      { force: true }
    );
    cy.wait(5000);
    cy.get('.dPGPhg').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#measurement-shipping-weight').type('1');
    cy.get('#measurement-shipping-depth').type('2');
    cy.get('#measurement-shipping-height').type('3');
    cy.get('#measurement-shipping-width').type('4');


    cy.get('#measurement-shipping-weight-unit-selected').click();
    cy.get('#measurement-shipping-weight-unit-search').type('kg');
    cy.get('#measurement-shipping-weight-unit-option-kg').click();

    cy.get('#measurement-shipping-depth-unit-selected').click();
    cy.get('#measurement-shipping-depth-unit-search').type('cm');
    cy.get('#measurement-shipping-depth-unit-option-cm').click();

    cy.get('#measurement-shipping-height-unit-selected').click();
    cy.get('#measurement-shipping-height-unit-search').type('cm');
    cy.get('#measurement-shipping-height-unit-option-cm').click();

    cy.get('#measurement-shipping-width-unit-selected').click();
    cy.get('#measurement-shipping-width-unit-search').type('cm');
    cy.get('#measurement-shipping-width-unit-option-cm').click();

    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);

    cy.get('#certification-certificate-type').click();
    cy.get('#certification-certificate-type-search').type('NAFDAC');
    cy.get('#certification-certificate-type-option-1').click();
    cy.get('body').click(0, 0);

    cy.generateNAFDACNumber().then((nafdac) => {
      cy.get('#certification-certificate-number-1').type(nafdac);
    });

    cy.generateBarcode().then((barcode) => {
      cy.get('#certification-product-barcode-number').type(barcode);
    });
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
  });

  it('Creating Duplicate SKU With Same SKUCode', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.wait(3000);
    cy.get('#products').click();
    cy.wait(3000);
    cy.get('#add-product-button').click();
    cy.wait(3000);
    cy.contains('Add Single Product').click();
    cy.get('#add-single-product-searchbar').type('Test-ing');
    cy.get('.iGcBwn').click();
    //selecting and item on the drop-down list
    cy.contains('Test-ing')
      .first()
      .click();
    cy.get('.dPGPhg').click();
    cy.generateVariant().then((variant) => {
      cy.get('#general-info-variant').type(variant);
    });
    cy.get('#general-info-manufacturer-sku-code').type('MFG-EBRF74');
    cy.get('#general-info-packaging-type').click();
    cy.contains('CASE')
      .first()
      .click();
    cy.get('.kJwPWr').click();
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/fileUploads/MO Drinks.png',
      { force: true }
    );
    cy.wait(5000);
    cy.get('.dPGPhg').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(2000);
    cy.contains('SKU Already Existed').should('be.visible');
  });

  it('Creating SKU with Duplicate NAFDAC Number', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.wait(3000);
    cy.get('#products').click();
    cy.wait(3000);
    cy.get('#add-product-button').click();
    cy.wait(3000);
    cy.contains('Add Single Product').click();
    cy.get('#add-single-product-searchbar').type('Test-ing');
    cy.get('.iGcBwn').click();
    //selecting and item on the drop-down list
    cy.contains('Test-ing')
      .first()
      .click();
    cy.get('.dPGPhg').click();
    cy.generateVariant().then((variant) => {
      cy.get('#general-info-variant').type(variant);
    });
    cy.generateManufacturerSKU().then((sku) => {
      cy.get('#general-info-manufacturer-sku-code').type(sku);
    });
    cy.get('#general-info-packaging-type').click();
    cy.contains('CASE')
      .first()
      .click();
    cy.get('.kJwPWr').click();
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/fileUploads/MO Drinks.png',
      { force: true }
    );
    cy.wait(5000);
    cy.get('.dPGPhg').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#measurement-shipping-weight').type('1');
    cy.get('#measurement-shipping-depth').type('2');
    cy.get('#measurement-shipping-height').type('3');
    cy.get('#measurement-shipping-width').type('4');


    cy.get('#measurement-shipping-weight-unit-selected').click();
    cy.get('#measurement-shipping-weight-unit-search').type('kg');
    cy.get('#measurement-shipping-weight-unit-option-kg').click();

    cy.get('#measurement-shipping-depth-unit-selected').click();
    cy.get('#measurement-shipping-depth-unit-search').type('cm');
    cy.get('#measurement-shipping-depth-unit-option-cm').click();

    cy.get('#measurement-shipping-height-unit-selected').click();
    cy.get('#measurement-shipping-height-unit-search').type('cm');
    cy.get('#measurement-shipping-height-unit-option-cm').click();

    cy.get('#measurement-shipping-width-unit-selected').click();
    cy.get('#measurement-shipping-width-unit-search').type('cm');
    cy.get('#measurement-shipping-width-unit-option-cm').click();

    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);

    cy.get('#certification-certificate-type').click();
    cy.get('#certification-certificate-type-search').type('NAFDAC');
    cy.get('#certification-certificate-type-option-1').click();
    cy.get('body').click(0, 0);

    cy.get('#certification-certificate-number-1').type('PLUS36628338026334651213');

    cy.generateBarcode().then((barcode) => {
      cy.get('#certification-product-barcode-number').type(barcode);
    });
    cy.get('#add-product-proceed-button').click();
    cy.contains('Certification Number Already Existed.').should('be.visible');
  });

  it('Creating SKU with Duplicate Product Bar Code Number', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.get('#products').click();
    cy.get('#add-product-button').click();
    cy.contains('Add Single Product').click();
    cy.get('#add-single-product-searchbar').type('Test-ing');
    cy.get('.iGcBwn').click();
    //selecting and item on the drop-down list
    cy.contains('Test-ing')
      .first()
      .click();
    cy.get('.dPGPhg').click();
    cy.generateVariant().then((variant) => {
      cy.get('#general-info-variant').type(variant);
    });
    cy.generateManufacturerSKU().then((sku) => {
      cy.get('#general-info-manufacturer-sku-code').type(sku);
    });
    cy.get('#general-info-packaging-type').click();
    cy.contains('CASE')
      .first()
      .click();
    cy.get('.kJwPWr').click();
    cy.get('input[type="file"]').selectFile(
      'cypress/fixtures/fileUploads/MO Drinks.png',
      { force: true }
    );
    cy.wait(5000);
    cy.get('.dPGPhg').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#measurement-shipping-weight').type('1');
    cy.get('#measurement-shipping-depth').type('2');
    cy.get('#measurement-shipping-height').type('3');
    cy.get('#measurement-shipping-width').type('4');

    cy.get('#measurement-shipping-weight-unit-selected').click();
    cy.get('#measurement-shipping-weight-unit-search').type('kg');
    cy.get('#measurement-shipping-weight-unit-option-kg').click();

    cy.get('#measurement-shipping-depth-unit-selected').click();
    cy.get('#measurement-shipping-depth-unit-search').type('cm');
    cy.get('#measurement-shipping-depth-unit-option-cm').click();

    cy.get('#measurement-shipping-height-unit-selected').click();
    cy.get('#measurement-shipping-height-unit-search').type('cm');
    cy.get('#measurement-shipping-height-unit-option-cm').click();

    cy.get('#measurement-shipping-width-unit-selected').click();
    cy.get('#measurement-shipping-width-unit-search').type('cm');
    cy.get('#measurement-shipping-width-unit-option-cm').click();

    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);

    cy.get('#certification-certificate-type').click();
    cy.get('#certification-certificate-type-search').type('NAFDAC');
    cy.get('#certification-certificate-type-option-1').click();
    cy.get('body').click(0, 0);

    cy.generateNAFDACNumber().then((nafdac) => {
      cy.get('#certification-certificate-number-1').type(nafdac);
    });

    cy.generateBarcode().then((barcode) => {
      cy.get('#certification-product-barcode-number').type('5611471582527');
    });
    cy.get('#add-product-proceed-button').click();
    cy.wait(2000);
    cy.contains('Product Bar Code Already Existed.').should('be.visible');
  });

  it('Verify user Is able to edit Product/SKU', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.wait(5000);
    cy.get('#products').click();
    cy.wait(15000);
    cy.get('[id$="-action-button"]')
      .first()
      .click();
    cy.wait(5000);
    cy.get('[id$="-Edit-button"]').click();
    cy.wait(10000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();

    cy.get('#certification-certificate-number-1')
      .invoke('val')
      .then((currentValue) => {
        cy.get('#certification-certificate-number-1')
          .clear()
          .type(`${currentValue}+1`);
      });

    cy.wait(5000);
    cy.get('#add-product-proceed-button').click();
  });

  it('Verify user Is able to deactivate SKU', () => {
    cy.get('#sidebar-catalogue-page-link').click();
    cy.wait(5000);
    cy.get('#products').click();
    cy.get(20000);
    cy.scrollTo('right');
    cy.wait(5000);
    cy.get('[id$="-action-button"]')
      .first()
      .click();
    cy.wait(5000);
    cy.get('[id$="Deactivate\\ Product-button"]')
      .first()
      .click();
    cy.get('#confirm-deactivate-button').click();
    cy.contains('Product deactivated successfully!')
      .should('be.visible');
  });

  it('Verify user Is able to view SKU', () => {
    cy.get('#sidebar-catalogue-page-link > .sc-cVzyXr').click();
    cy.wait(5000);
    cy.get('#products').click();
    cy.wait(5000);
    cy.get('[id$="-action-button"]')
      .first()
      .click();
    cy.wait(5000);
    cy.get('[id$="-View-button"]').click();

    cy.wait(5000);

    cy.contains('Measurement').should('be.visible');
    cy.contains('MOQ').should('be.visible');
    cy.contains('Certifications').should('be.visible');
    cy.contains('Pricing Details').should('be.visible');
    cy.contains('SKU Images').should('be.visible');
  });
});
