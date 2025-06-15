import '@testing-library/cypress/add-commands';
import 'cypress-real-events';
import webpage from '../pageObjects';

declare global {
  namespace Cypress {
    interface Chainable {
      loadWebsite(): Chainable<void>;
      goToPage(page: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loadWebsite', () => {
  cy.visit('http://localhost:7777');
});

Cypress.Commands.add('goToPage', (page: string) => {
  webpage.navigation.navPage(page).click();
});
