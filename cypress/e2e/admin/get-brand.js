
describe('Data', () => {
    it('should retrieve data using the bearer token and a unique identifier', () => {
   // define the base URL from the Cypress environment configuration
const baseUrl = Cypress.env('api-url')

// load the JSON fixture file containing the unique identifier
cy.fixture('uuid.json').then(data => {
  const uniqueIdentifier = data.uuid

  // get the bearer token from the environment configuration
  const bearerToken = Cypress.env('authToken')

  // send the GET request using the base URL, unique identifier, and bearer token
  cy.request({
    method: 'GET',
    url: `${baseUrl}/api/v1/brand/${uniqueIdentifier}`,
    headers: {
      Authorization: `Bearer ${bearerToken}`
    }
  }).then(response => {
    // handle the response
        // Handle the login response as needed
        expect(response.status).to.equal(200);
        cy.writeFile('cypress/fixtures/get-brand.json', response.body);
  })
})

    });
  });
  