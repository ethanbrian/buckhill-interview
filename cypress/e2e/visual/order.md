# Test Scenarios for a user submitting an order with the assumption that the user has to be authorized hence the function in commands.js file stores the auth token generated when a user logs in in the session storage that will be used by the test when submit the order where the details are set in the submit-order json file in the fixtures folder 

## Introduction
These test scenarios cover the functionality of a user submitting an order where user details should be retrieved from the json file in the fixtures folder and the token stored in the cypress.env.json file as a query parameter.

## Ensure that unauthenticated users cannot submit any orders
### Scenario 1: Try and submit an order without being authenticated in this case the bearer token is being used 

| Test Step |TestData| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Clear the  session storage to ensure the user is not  authenticated |details should be retrieved from a json file in the fixtures folder and passed in a parameter in this format order.data.first_name from the submit order json file in the fixtures folder| It should display an error message upon placing an order | It does display an error message upon placing an order |

## Ensure that authenticated users can submit any orders
### Scenario 2: Try and submit an order when authenticated in this case the bearer token is being used 

| Test Step |TestData| Expected Result | Actual Result |
| --- | --- | --- |--- |
|Set the authentication token in the session storage to ensure the user is authenticated. |details should be retrieved from a json file in the fixtures folder and passed in a parameter in this format order.data.first_name from the submit order json file in the fixtures folder| It should display an success message upon placing an order | It  displays an error message upon placing an order |

## Ensure that error message is displayed if a succesful order is not placed
### Scenario 3: Try and submit an order without being authenticated in this case the bearer token is being used 

| Test Step |TestData| Expected Result | Actual Result |
| --- | --- | --- |--- |
|Set an invalid authentication token in the session storage to ensure the user is not authenticated.|details should be retrieved from a json file in the fixtures folder and passed in a parameter in this format order.data.first_name from the submit order json file in the fixtures folder| It should display error message upon placing an order | It  displays an error message upon placing an order |