describe('Submit order when a user is authorized', () => {
  let bearerToken;

  before(() => {
    // Get bearer token from .env file
    bearerToken = Cypress.env('userToken');
  });

  it('User submits an order when authorized', () => {
    // Fill out order form using data from JSON file
    cy.fixture('submit-order.json').then((orderData) => {
      cy.visit('https://pet-shop.buckhill.com.hr/checkout');
      cy.get('#input-28').type(orderData.firstname);
      cy.get('#input-30').type(orderData.lastname);
      cy.get('#input-32').type(orderData.address);
      cy.get('#input-36').type(orderData.city);
      cy.get('#input-38').type(orderData.state);
      cy.get('#input-40').type(orderData.postalCode);
      cy.get('#input-42').type(orderData.country);
      cy.get('#checkbox-44').click();
      cy.get('[data-v="15368677"]').click();
      cy.get('[ data-v="15cae24c"]').click();
      cy.get('#input-28').type(orderData.firstname);
      cy.get('#input-30').type(orderData.lastname);
      cy.get('#input-32').type(orderData.address);
      cy.get('#checkbox-82').click();
      cy.get('[data-v="15368677"]').click();
      cy.get('[data-v="15368677"]').click();
    });

    // Check that order was submitted successfully
    cy.get('#success-message').should('be.visible');
  });
});