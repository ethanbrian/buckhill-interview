
describe('API Endpoint for creating a payment under the users module', () => {
    it('Admin should create a payment with authentication token', () => {
      cy.fixture('payment.json').then(data => {
        cy.request({
          method: 'POST',
          url: `${Cypress.env('api-url')}/api/v1/payment/create`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${Cypress.env('userToken')}`
          },
          form: true,
          body: data
        }).then(response => {
          expect(response.status).to.eq(200);
          // Do something with the response
            // Handle the login response as needed
            // Do something with the response
            const uuid  = response.body.data.uuid;
            expect(uuid).to.exist;
            cy.log(uuid);
               // Update the token value in cypress.env.json
          cy.readFile('cypress/fixtures/payment_uuid.json').then(envFile => {
          envFile.uuid = uuid
          cy.writeFile('cypress/fixtures/payment_uuid.json', envFile)
        })     
        });
      });
    });
  });
  

 
  