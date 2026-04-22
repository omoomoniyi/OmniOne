describe('Product', () =>{

    it('Creating Product', () => {

        cy.visit('/');

        //cy.screenshot("Home Page")

        cy.fixture('customerData').then((userData)=>{

            let customerDetailsInfo = userData.customerInfo[0];
            //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                        //by userData.customerInfo[0]
            cy.validLoginFlow(customerDetailsInfo);
            cy.wait(20000);
            cy.get('#sidebar-catalogue-page-link').click();
            cy.wait(3000);
            cy.get('#products').click();
            cy.wait(3000);
            cy.get('#add-product-button').click();
            cy.wait(3000);
            cy.contains('Add Single Product').click();
            cy.get('.ggUtBl > .sc-imWYAH > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Test-ing');
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
              cy.get(':nth-child(1) > #general-info-packaging-type').click();
              cy.contains('CASE')
              .first()
              .click();
            cy.get('.kJwPWr').click();
            cy.get('input[type="file"]').selectFile(
                'cypress/fixtures/fileUploads/MO Drinks.png',
                { force: true }
              );
            cy.wait(5000)
            cy.get('.dPGPhg').click();
            cy.wait(5000)
            cy.get('#add-product-proceed-button').click()
            cy.get('#measurement-shipping-weight').type("1");
            cy.get('#measurement-shipping-depth').type("2");
            cy.get('#measurement-shipping-height').type("3");
            cy.get('#measurement-shipping-width').type("4");
            // cy.get('#measurement-shipping-weight-unit').click();
            // cy.get('input')
            //     .type('kg');
            // cy.contains('kg')
            //     .click();
            cy.get(':nth-child(1) > #measurement-shipping-weight-unit').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("kg")
            cy.get('.sc-esYiGC').click();

            cy.get(':nth-child(1) > #measurement-shipping-depth-unit').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
            cy.get('.sc-jxOSlu > :nth-child(1)').click();

            cy.get(':nth-child(1) > #measurement-shipping-height-unit').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
            cy.get('.sc-jxOSlu > :nth-child(1)').click();

            cy.get(':nth-child(1) > #measurement-shipping-width-unit').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
            cy.get('.sc-jxOSlu > :nth-child(1)').click();

            cy.get('#add-product-proceed-button').click();
            cy.get('#add-product-proceed-button').click();

            cy.get('.sc-eeDRCX > :nth-child(1) > #certification-certificate-type').click();
            cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("NAFDAC")
            cy.get('.sc-jxOSlu > :nth-child(1)').click();
            cy.get('body').click(0, 0);

            cy.generateNAFDACNumber().then((nafdac) => {
                cy.get('#certification-certificate-number-1').type(nafdac);
              });

            cy.generateBarcode().then((barcode) => {
                cy.get('#certification-product-barcode-number').type(barcode);
              });
              cy.get('#add-product-proceed-button').click();
              cy.get('#add-product-proceed-button').click();



        });

    });

    it('Creating Duplicate SKU With Same SKUCode', () => {

      cy.visit('/');

      //cy.screenshot("Home Page")

      cy.fixture('customerData').then((userData)=>{

          let customerDetailsInfo = userData.customerInfo[0];
          //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                      //by userData.customerInfo[0]
          cy.validLoginFlow(customerDetailsInfo);
          cy.wait(20000);
          cy.get('#sidebar-catalogue-page-link').click();
          cy.wait(3000);
          cy.get('#products').click();
          cy.wait(3000);
          cy.get('#add-product-button').click();
          cy.wait(3000);
          cy.contains('Add Single Product').click();
          cy.get('.ggUtBl > .sc-imWYAH > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Test-ing');
          cy.get('.iGcBwn').click();
          //selecting and item on the drop-down list
          cy.contains('Test-ing')
              .first()
              .click();
          cy.get('.dPGPhg').click();
          cy.generateVariant().then((variant) => {
              cy.get('#general-info-variant').type(variant);
            });
          cy.get('#general-info-manufacturer-sku-code').type("MFG-EBRF74");
          cy.get(':nth-child(1) > #general-info-packaging-type').click();
          cy.contains('CASE')
            .first()
            .click();
          cy.get('.kJwPWr').click();
          cy.get('input[type="file"]').selectFile(
              'cypress/fixtures/fileUploads/MO Drinks.png',
              { force: true }
            );
          cy.wait(5000)
          cy.get('.dPGPhg').click();
          cy.wait(5000)
          cy.get('#add-product-proceed-button').click()
          cy.wait(2000);
          cy.contains('SKU Already Existed').should('be.visible');

      });

    });


    it('Creating SKU with Duplicate NAFDAC Number', () => {

      cy.visit('/');

      //cy.screenshot("Home Page")

      cy.fixture('customerData').then((userData)=>{

          let customerDetailsInfo = userData.customerInfo[0];
          //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                      //by userData.customerInfo[0]
          cy.validLoginFlow(customerDetailsInfo);
          cy.wait(20000);
          cy.get('#sidebar-catalogue-page-link').click();
          cy.wait(3000);
          cy.get('#products').click();
          cy.wait(3000);
          cy.get('#add-product-button').click();
          cy.wait(3000);
          cy.contains('Add Single Product').click();
          cy.get('.ggUtBl > .sc-imWYAH > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Test-ing');
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
            cy.get(':nth-child(1) > #general-info-packaging-type').click();
            cy.contains('CASE')
            .first()
            .click();
          cy.get('.kJwPWr').click();
          cy.get('input[type="file"]').selectFile(
              'cypress/fixtures/fileUploads/MO Drinks.png',
              { force: true }
            );
          cy.wait(5000)
          cy.get('.dPGPhg').click();
          cy.wait(5000)
          cy.get('#add-product-proceed-button').click()
          cy.get('#measurement-shipping-weight').type("1");
          cy.get('#measurement-shipping-depth').type("2");
          cy.get('#measurement-shipping-height').type("3");
          cy.get('#measurement-shipping-width').type("4");
          // cy.get('#measurement-shipping-weight-unit').click();
          // cy.get('input')
          //     .type('kg');
          // cy.contains('kg')
          //     .click();
          cy.get(':nth-child(1) > #measurement-shipping-weight-unit').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("kg")
          cy.get('.sc-esYiGC').click();

          cy.get(':nth-child(1) > #measurement-shipping-depth-unit').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
          cy.get('.sc-jxOSlu > :nth-child(1)').click();

          cy.get(':nth-child(1) > #measurement-shipping-height-unit').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
          cy.get('.sc-jxOSlu > :nth-child(1)').click();

          cy.get(':nth-child(1) > #measurement-shipping-width-unit').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
          cy.get('.sc-jxOSlu > :nth-child(1)').click();

          cy.get('#add-product-proceed-button').click();
          cy.get('#add-product-proceed-button').click();

          cy.get('.sc-eeDRCX > :nth-child(1) > #certification-certificate-type').click();
          cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("NAFDAC")
          cy.get('.sc-jxOSlu > :nth-child(1)').click();
          cy.get('body').click(0, 0);

          // cy.generateNAFDACNumber().then((nafdac) => {
          cy.get('#certification-certificate-number-1').type("PLUS36628338026334651213");
            // });

          cy.generateBarcode().then((barcode) => {
              cy.get('#certification-product-barcode-number').type(barcode);
            });
            cy.get('#add-product-proceed-button').click();
            cy.contains('Certification Number Already Existed.').should('be.visible');
      });

  });


  it('Creating SKU with Duplicate Product Bar Code Number', () => {

    cy.visit('/');

    //cy.screenshot("Home Page")

    cy.fixture('customerData').then((userData)=>{

        let customerDetailsInfo = userData.customerInfo[0];
        //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                    //by userData.customerInfo[0]
        cy.validLoginFlow(customerDetailsInfo);
        cy.wait(20000);
        cy.get('#sidebar-catalogue-page-link > .sc-cVzyXr').click();
        cy.get('#products').click();
        cy.get('#add-product-button').click();
        //cy.get(':nth-child(7) > [data-layer="Padding"]').click();
        cy.get('.sc-koXPm > .sc-imWYAH > :nth-child(1)').click();
        cy.get('.ggUtBl > .sc-imWYAH > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Test-ing');
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
          cy.get(':nth-child(1) > #general-info-packaging-type').click();
          cy.contains('CASE')
          .first()
          .click();
        cy.get('.kJwPWr').click();
        cy.get('input[type="file"]').selectFile(
            'cypress/fixtures/fileUploads/MO Drinks.png',
            { force: true }
          );
        cy.wait(5000)
        cy.get('.dPGPhg').click();
        cy.wait(5000)
        cy.get('#add-product-proceed-button').click()
        cy.get('#measurement-shipping-weight').type("1");
        cy.get('#measurement-shipping-depth').type("2");
        cy.get('#measurement-shipping-height').type("3");
        cy.get('#measurement-shipping-width').type("4");
        // cy.get('#measurement-shipping-weight-unit').click();
        // cy.get('input')
        //     .type('kg');
        // cy.contains('kg')
        //     .click();
        cy.get(':nth-child(1) > #measurement-shipping-weight-unit').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("kg")
        cy.get('.sc-esYiGC').click();

        cy.get(':nth-child(1) > #measurement-shipping-depth-unit').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        cy.get('.sc-jxOSlu > :nth-child(1)').click();

        cy.get(':nth-child(1) > #measurement-shipping-height-unit').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        cy.get('.sc-jxOSlu > :nth-child(1)').click();

        cy.get(':nth-child(1) > #measurement-shipping-width-unit').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        cy.get('.sc-jxOSlu > :nth-child(1)').click();

        cy.get('#add-product-proceed-button').click();
        cy.get('#add-product-proceed-button').click();

        cy.get('.sc-eeDRCX > :nth-child(1) > #certification-certificate-type').click();
        cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("NAFDAC")
        cy.get('.sc-jxOSlu > :nth-child(1)').click();
        cy.get('body').click(0, 0);

        cy.generateNAFDACNumber().then((nafdac) => {
        cy.get('#certification-certificate-number-1').type(nafdac);
           });

        cy.generateBarcode().then((barcode) => {
            cy.get('#certification-product-barcode-number').type("5611471582527");
          });
          cy.get('#add-product-proceed-button').click();
          cy.get('#add-product-proceed-button').click();
          cy.contains('Product Bar Code Already Existed.').should('be.visible');
    });

  });

  it.only('Verify user Is able to edit Product/SKU', () => {

    cy.visit('/');

    //cy.screenshot("Home Page")

    cy.fixture('customerData').then((userData)=>{

        let customerDetailsInfo = userData.customerInfo[0];
        //let addressdDetails = customerDetailsInfo.address.place   //Address usage is control 
                                                                    //by userData.customerInfo[0]
        cy.validLoginFlow(customerDetailsInfo);
        cy.wait(20000);
        cy.get('#sidebar-catalogue-page-link > .sc-cVzyXr').click();
        cy.get('#products').click();
        cy.get('.dctKQR')
            .first()
            .find('td:last')
            .click();
        //cy.get('#product-45783-action-button').click();
        cy.get('#product-45784-action-button').click();
        cy.get('.sc-koXPm > :nth-child(2) > .sc-cVzyXr').click();
        cy.get('#add-product-proceed-button').click();
        cy.wait(1000);
        cy.get('#add-product-proceed-button').click();
        cy.wait(1000);
        cy.get('#add-product-proceed-button').click();
        cy.wait(1000);
        cy.get('#add-product-proceed-button').click();
        cy.wait(1000);
        cy.get('#add-product-proceed-button').click();






        // cy.get('#add-product-button').click();
        // //cy.get(':nth-child(7) > [data-layer="Padding"]').click();
        // cy.get('.sc-koXPm > .sc-imWYAH > :nth-child(1)').click();
        // cy.get('.ggUtBl > .sc-imWYAH > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type('Test-ing');
        // cy.get('.iGcBwn').click();
        // //selecting and item on the drop-down list
        // cy.contains('Test-ing')
        //     .first()
        //     .click();
        // cy.get('.dPGPhg').click();
        // cy.generateVariant().then((variant) => {
        //     cy.get('#general-info-variant').type(variant);
        //   });
        // cy.generateManufacturerSKU().then((sku) => {
        //     cy.get('#general-info-manufacturer-sku-code').type(sku);
        //   });
        //   cy.get(':nth-child(1) > #general-info-packaging-type').click();
        //   cy.contains('CASE')
        //   .first()
        //   .click();
        // cy.get('.kJwPWr').click();
        // cy.get('input[type="file"]').selectFile(
        //     'cypress/fixtures/fileUploads/MO Drinks.png',
        //     { force: true }
        //   );
        // cy.wait(5000)
        // cy.get('.dPGPhg').click();
        // cy.wait(5000)
        // cy.get('#add-product-proceed-button').click()
        // cy.get('#measurement-shipping-weight').type("1");
        // cy.get('#measurement-shipping-depth').type("2");
        // cy.get('#measurement-shipping-height').type("3");
        // cy.get('#measurement-shipping-width').type("4");
        // // cy.get('#measurement-shipping-weight-unit').click();
        // // cy.get('input')
        // //     .type('kg');
        // // cy.contains('kg')
        // //     .click();
        // cy.get(':nth-child(1) > #measurement-shipping-weight-unit').click();
        // cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("kg")
        // cy.get('.sc-esYiGC').click();

        // cy.get(':nth-child(1) > #measurement-shipping-depth-unit').click();
        // cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        // cy.get('.sc-jxOSlu > :nth-child(1)').click();

        // cy.get(':nth-child(1) > #measurement-shipping-height-unit').click();
        // cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        // cy.get('.sc-jxOSlu > :nth-child(1)').click();

        // cy.get(':nth-child(1) > #measurement-shipping-width-unit').click();
        // cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("cm")
        // cy.get('.sc-jxOSlu > :nth-child(1)').click();

        // cy.get('#add-product-proceed-button').click();
        // cy.get('#add-product-proceed-button').click();

        // cy.get('.sc-eeDRCX > :nth-child(1) > #certification-certificate-type').click();
        // cy.get('.sc-fhzFiN > .sc-kOHTFy > .sc-dtInlp > .sc-kOPcWA').type("NAFDAC")
        // cy.get('.sc-jxOSlu > :nth-child(1)').click();
        // cy.get('body').click(0, 0);

        // cy.generateNAFDACNumber().then((nafdac) => {
        // cy.get('#certification-certificate-number-1').type(nafdac);
        //    });

        // cy.generateBarcode().then((barcode) => {
        //     cy.get('#certification-product-barcode-number').type("5611471582527");
        //   });
        //   cy.get('#add-product-proceed-button').click();
        //   cy.get('#add-product-proceed-button').click();
        //   cy.contains('Product Bar Code Already Existed.').should('be.visible');
    });

  });

});
