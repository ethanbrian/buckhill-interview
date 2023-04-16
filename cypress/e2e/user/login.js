describe('The normal user created should be able to login with a token', () => {
  it('should log in an admin user and store the authentication token', () => {
    cy.fixture('user.json').then(credentials => {
      cy.loginUser(credentials.email, credentials.password);
    });
  });
});
