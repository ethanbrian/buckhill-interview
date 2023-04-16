describe('The admin user created should be able to login with a token', () => {
  it('should log in an admin user and store the authentication token', () => {
    cy.fixture('signup.json').then(credentials => {
      cy.login(credentials.email, credentials.password);
    });
  });
});
