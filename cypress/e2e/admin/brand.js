
describe('API Endpoint for creating a brand under the admins module', () => {
    it('Admin should create a brand with authentication token', () => {
      cy.fixture('brand.json').then(data => {
        cy.request({
          method: 'POST',
          url: `${Cypress.env('api-url')}/api/v1/brand/create`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Bearer ${Cypress.env('authToken')}`
          },
          form: true,
          body: data
        }).then(response => {
          expect(response.status).to.eq(200);
          // Do something with the response
          const uuid  = response.body.data.uuid;
          expect(uuid).to.exist;
          Cypress.env('brand_uuid', uuid);
          cy.log(uuid);
             // Update the token value in cypress.env.json
        cy.readFile('cypress/fixtures/brand_uuid.json').then(envFile => {
        envFile.uuid = uuid
        cy.writeFile('cypress/fixtures/brand_uuid.json', envFile)
      })
        });
      });
    });
  });
  
  