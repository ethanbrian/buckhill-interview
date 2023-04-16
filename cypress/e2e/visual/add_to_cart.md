# Test Scenarios for adding a product to cart with the assumption that the user has to be authorized hence the function in commands.js file stores the auth token generated when a user logs in in the session storage that will be used by the test when adding the product to cart and the product details should be retrieved from an api endpoint 

## Introduction
These test scenarios cover the functionality of adding a product to cart where the product should be retrieved from the api endpoint with the token stored in the cypress.env.json file as a query parameter and the uuid from the product uuid json file in the fixtures folder.

## Retrieving the product with uuid and token as query parameters
### Scenario 1: retrieve the product with the right query parameters which are valid bearer token and valid product uuid
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| retrieve a valid product uuid from the product uuid json file in fixtures folder and the bearer token stored in the cypress.env json file after logging in as a user then do a get request  | Product details are  retrieved  successfully | Product details are  retrieved  successfully |

## Retrieving the product with invalid uuid and token as query parameters
### Scenario 2: retrieve the product with the wrong query parameters which is invalid uuid
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| retrieve an  invalid product uuid from the product uuid json file in fixtures folder and the bearer token stored in the cypress.env json file after logging in as a user then do a get request  | Product details are not received successfully | Product details are not received successfully |

## Retrieving the product with valid uuid and an invalid token as query parameters
### Scenario 3: retrieve the product with the wrong query parameters which is invalid token
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| retrieve a  valid product uuid from the product uuid json file in fixtures folder and an invalid bearer token stored in the cypress.env json file after logging in as a user then do a get request  | Product details are not received successfully the error message is unauthorized  | Product details are not received successfully the error message is unauthorized |

## Adding products in cart
### Scenario 4: adding products to cart 
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| set the authentication token in the session storage to ensure the user is authenticated  | The user should be able to view the products   | The user should be able to view the products  |
| --- | --- | --- |
|Navigate to the product  page| The user should be able to view the products and attempt to add product in the cart| The user is not be able to view the products and attempt to add product in the cart under the products page unless they navigate to the main page
| --- | --- | --- |
|The cart should show a count of how many items added to cart when a user attempts to add an item cart|The count of items that the user has added to cart should display when a user navigates to the main page and select the products from there an attempts to products to cart  | The number of products is displayed that the user has selected when attempting to add products to cart when navigating on the home page 


