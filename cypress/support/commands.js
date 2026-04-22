// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Cypress.Commands.add("validLoginFlow", (userData) => {
//   cy.get('#continue-with-omni').click();
//   // Wait for navigation to complete, then wrap all SSO site commands in cy.origin()
//   cy.wait(3000); // Wait for navigation to the SSO site
//   cy.origin('https://sso-staging.vercel.app', () => {
//     cy.url({ timeout: 10000 }).should('include', 'sso-staging.vercel.app');
//     cy.get('#use-phone-number', { timeout: 10000 }).click();
//     cy.get('#email-input').type('202265');
//   });

// });

// cy.get('#continue-with-omni').click();

// cy.location('origin', { timeout: 15000 }).then((origin) => {

//   expect(origin).to.include('sso');

//   cy.origin(origin, () => {
//     cy.get('#use-phone-number').click();
//     cy.get('#email-input').type('202265');
//   });

// });

// Cypress.Commands.add("validLoginFlow", () => {

//   // Step 1: Click login (redirects to SSO)
//   cy.get('#continue-with-omni').click();

//   // Step 2: Handle SSO domain
//   cy.origin(Cypress.env('SSO_URL'), () => {

//     cy.get('#use-phone-number', { timeout: 10000 }).click();
//     cy.get('#email-input').type('202265');
//     cy.contains('button', 'Continue').click();
//     cy.get('input[type="password"]').type('12345678');
//     cy.get('#signin-button').click();

//     // Handle optional consent modal
//     cy.get('body').then(($body) => {
//       if ($body.find('h2:contains("Grant OmniOne Access to Your Data")').length) {
//         cy.contains('h2', 'Grant OmniOne Access to Your Data')
//           .closest('div')
//           .within(() => {
//             cy.contains('button', 'Grant Access').click();
//           });
//       }
//     });

//   });

//   // ✅ Step 3: BACK to your app (VERY IMPORTANT)
//   cy.url({ timeout: 20000 }).should('include', 'mos-staging');

// });

Cypress.Commands.add("validLoginFlow", () => {

  // Step 1: Click login (triggers redirect to SSO)
  cy.get('#continue-with-omni').click();

  // Step 2: Give the SSO redirect time to initiate before entering cy.origin
  cy.wait(3000);

  // Step 3: Run login steps on SSO origin
  cy.origin(Cypress.env('SSO_URL'), () => {

    cy.get('#use-phone-number', { timeout: 15000 }).click();
    cy.get('#email-input').type('202265');
    cy.contains('button', 'Continue').click();
    cy.get('input[type="password"]').type('12345678');
    cy.get('#signin-button').click();

    // Handle optional consent modal before SSO redirects back to main app
    cy.get('body', { timeout: 15000 }).then(($body) => {

      if ($body.find('h2:contains("Grant OmniOne Access to Your Data")').length) {

        cy.contains('h2', 'Grant OmniOne Access to Your Data')
          .closest('div')
          .parent()
          .within(() => {
            cy.contains('button', 'Grant Access').click();
          });

      } else {
        cy.log('Grant Access modal not present');
      }

    });

  });

});

Cypress.Commands.add("signup", () => {

  // Step 1: Click login (triggers redirect to SSO)
  cy.get('#continue-with-omni').click();

  // Step 2: Give the SSO redirect time to initiate before entering cy.origin
  cy.wait(3000);

  // Step 3: Run login steps on SSO origin
  cy.origin(Cypress.env('SSO_URL'), () => {

    cy.get('create-account-button', { timeout: 15000 }).click();
    cy.get('irst-name-input').type('Omoniyi');
    cy.get('irst-name-input').type('Solomon');
    cy.contains('button', 'Continue').click();
    cy.get('input[type="password"]').type('12345678');
    cy.get('#signin-button').click();

    // Handle optional consent modal before SSO redirects back to main app
    cy.get('body', { timeout: 15000 }).then(($body) => {

      if ($body.find('h2:contains("Grant OmniOne Access to Your Data")').length) {

        cy.contains('h2', 'Grant OmniOne Access to Your Data')
          .closest('div')
          .parent()
          .within(() => {
            cy.contains('button', 'Grant Access').click();
          });

      } else {
        cy.log('Grant Access modal not present');
      }

    });

  });

});



Cypress.Commands.add("invalidPhoneValidPassword", (userData) => {
  cy.get("#username").type(userData.invalidPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

Cypress.Commands.add("invalidPhoneInvalidPassword", (userData) => {
  cy.get("#username").type(userData.invalidPhone);
  cy.get("#password").type(userData.invalidPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

Cypress.Commands.add("blankPhonevalidPassword", (userData) => {
  cy.get("#username").type(userData.blankPhone);
  cy.get("#password").type(userData.validPassword);
  cy.get(".btn").click();
  cy.contains("This user doesn't exist").should("be.visible");
});

// Cypress.Commands.add('signUpWithExistingCustomer', (userData) => {

//     cy.contains('Sign Up').click(); //Unable to get correct Sign-Up Elements
//     cy.get('.text-center>.text-\[\#0275D8\]').click();
//     cy.get('.mt-4 > :nth-child(1) > [style="position: relative;"] > .select-wrapper > .select__input').click();

//     // cy.get('#password').type(userData.validPassword);
//     // cy.get('.btn').click();
//     // cy.contains("This user doesn't exist").should('be.visible');

// })

Cypress.Commands.add("forgetPasswordExistingValidCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.validPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("Password reset code sent").should("be.visible");
});

Cypress.Commands.add("forgetPasswordNonExistingCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.NonExistingCustomerPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("User is not registered").should("be.visible");
});

Cypress.Commands.add("forgetPasswordInvalidCustomer", (userData) => {
  cy.get(".ml-auto").click();
  cy.get(".form__input").type(userData.invalidPhone);
  cy.get(".btn").click();
  cy.wait(2000);
  cy.contains("Phone numbers should have a minimum of 11 numbers").should(
    "be.visible"
  );
});

Cypress.Commands.add(
  "forgetPasswordForalidCustomerPhoneThatDoesNotStartWith0",
  (userData) => {
    cy.get(".ml-auto").click();
    cy.get(".form__input").type(userData.CustomerNumberNotStartingWith0);
    cy.get(".btn").click();
    cy.wait(1000);
    cy.contains("Phone numbers should start with 0").should("be.visible");
  }
);

Cypress.Commands.add("generatePhoneNumber", (prefix = "80") => {
  return prefix + Math.floor(10000000 + Math.random() * 90000000);
});

//Generating random emails
Cypress.Commands.add("generateEmail", (domain = "test.com") => {
  return `user${Date.now()}@${domain}`;
});

//Generating Random Names
const { faker } = require('@faker-js/faker');

Cypress.Commands.add('generateFullName', () => {
  return cy.wrap({
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName()
  });
});


Cypress.Commands.add('generateVariant', () => {
  const variant = `SKU-${faker.string.alphanumeric(8)}`;
  return variant;
});

Cypress.Commands.add('generateManufacturerSKU', () => {
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `MFG-${random}`;
});

Cypress.Commands.add('generateNAFDACNumber', () => {
  const digits = Array.from({ length: 20 }, () => Math.floor(Math.random() * 10)).join('');
  return `PLUS${digits}`;
});

Cypress.Commands.add('generateBarcode', () => {
  // generate first 12 digits
  const digits = Array.from({ length: 12 }, () => Math.floor(Math.random() * 10));

  // calculate check digit
  const sum = digits.reduce((acc, digit, index) => {
    return acc + digit * (index % 2 === 0 ? 1 : 3);
  }, 0);

  const checkDigit = (10 - (sum % 10)) % 10;

  const barcode = [...digits, checkDigit].join('');

  cy.wrap(barcode);
});


Cypress.Commands.add('generateEmployeeCode', () => {
  const employeeCode = faker.string.alphanumeric(8).toUpperCase();
  return cy.wrap(employeeCode);
});

Cypress.Commands.add('generateEmail', () => {
  return cy.wrap(faker.internet.email());
});
