describe('Admin Account creation with a API Endpoint Provided', () => {
    it('An admin should create a  user ', () => {
      cy.fixture('user').then(userData => {
        cy.request({
          method: 'POST',
          url: `${Cypress.env('api-url')}/api/v1/user/create`,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: {
            first_name: userData.first_name,
            last_name: userData.last_name,
            email: userData.email,
            password: userData.password,
            password_confirmation: userData.password_confirmation,
            avatar: userData.avatar,
            address: userData.address,
            phone_number: userData.phone_number,
            marketing: userData.marketing

          }
        }).then(signupResponse => {
          // Handle the sign up response as needed
          expect(signupResponse.status).to.equal(200);
          const token = signupResponse.body.data.token;
          expect(token).to.exist;
          cy.log(`Token received: ${token}`);
          
          // Log in the user and store the token in the .env file
          cy.request({
            method: 'POST',
            url: `${Cypress.env('api-url')}/api/v1/user/login`,
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
              email: userData.email,
              password: userData.password
            }
          }).then(loginResponse => {
            // Handle the login response as needed
            expect(loginResponse.status).to.equal(200);
           
             const token1 = loginResponse.body.data.token;
             expect(token1).to.exist;
            // cy.writeFile('.env', `ADMIN_AUTH_TOKEN=${token}\n`, { flag: 'a' })

            // Store the token in the .env file
            // Cypress.env('authToken', token1);
            // cy.log(`Token received: ${token1}`);
          });
        });
      });
    });
  });
  