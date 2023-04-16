import '../../support/commands';

describe('Add to cart', () => {
  it('can add a product to the cart', () => {
    // Get the product ID from the fixture
    const baseUrl = Cypress.env('api-url')
    cy.fixture('get-product').then((product) => {
      const productId = product.data.uuid;


      // Call your API endpoint to get the product with the given ID
      cy.request({
        method: 'GET',
        url: `${baseUrl}/api/v1/product/${productId}`,
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
          Authorization: `Bearer ${Cypress.env('userToken')}`

        },
        body: {
          productId: productId
        },
        form: true
      }).then((response) => {
        const productToAdd = response.body.data;

        // Visit the product page and add it to the cart
        cy.visit(`https://pet-shop.buckhill.com.hr/products/${productToAdd.uuid}`);
        cy.get('[data-cy=add-to-cart-button]').click();

        // Verify that the product was added to the cart
        cy.get('[data-cy=cart-count]').should('have.text', '1');
        cy.get('[data-cy=cart-items]').should('contain', productToAdd.title);
      });
    });
  });
});
