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


//this is the command that enables the admin user in to login and store the token in the cypress.env file
Cypress.Commands.add('login', (email, password) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('api-url')}/api/v1/admin/login`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: true,
      body: {
        email,
        password
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      const authToken = response.body.data.token;
    // Update the token value in cypress.env.json
    cy.readFile('cypress.env.json').then(envFile => {
        envFile.authToken = authToken
        cy.writeFile('cypress.env.json', envFile)
      })
    
    //   Cypress.env('authToken', authToken);
    //   cy.log(authToken);
      

    });
  });

  //this is the command that enables the normal user in to login and store the token in the cypress.env file

  Cypress.Commands.add('loginUser', (email, password) => {
    cy.request({
      method: 'POST',
      url: `${Cypress.env('api-url')}/api/v1/user/login`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      form: true,
      body: {
        email,
        password
      }
    }).then(response => {
      expect(response.status).to.eq(200);
      const userToken = response.body.data.token;
    // Update the token value in cypress.env.json
    cy.readFile('cypress.env.json').then(envFile => {
        envFile.userToken = userToken
        cy.writeFile('cypress.env.json', envFile)
        localStorage.setItem('usertoken', response.body.data.token);
      })
    
    //   Cypress.env('authToken', authToken);
    //   cy.log(authToken);
      

    });
  });


  //this is the command that enables the normal user in to login with a token when adding items to cart

  // Cypress.Commands.add('cartlogin', () => {
  //   cy.request({
  //     method: 'POST',
  //     url: `${Cypress.env('api-url')}/api/v1/user/login`,
  //     headers: {
  //       Authorization: `Bearer ${Cypress.env('userToken')}`
  //     }
  //   }).then((response) => {
  //     localStorage.setItem('usertoken', response.body.data.token);
  //   });
  // });
  


//   Cypress.Commands.add('makeGetRequestWithToken', (token, id) => {
//     cy.request({
//       method: 'GET',
//       url: `/your-api-endpoint/${id}`,
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   });
  
  
  
  

