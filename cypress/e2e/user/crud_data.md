# Test Scenarios for creating category,creating payment,creating order status, getting product and uuid is  generated and retrieving the product and also the uuid generated for retrieving data mostly with a valid token and invalid token in using the api endpoints

## Introduction
These test scenarios cover the functionality of creating category,creating payment,creating order status, getting product and uuid is  generated and retrieving the product, logging in with the token store in the cypress.env.json file.

## Category Creation
### Scenario 1: Create a category with category title and valid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter category title in the  json file in fixtures folder and the valid token should be called from .env file  |Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands.js file and also the category title is set the in the json file in the fixtures folder which is added in the body | Category  is created successfully and uuid is generated and written in the category uuid json file in fixtures folder  | Category  is created successfully and uuid is generated and written in the category uuid json file in fixtures folder |

### Scenario 2: Create a category with category title and an invalid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter category title in the json file in fixtures folder and if invalid  token is called from .env file  | Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands. sinc the database is seeded every midnight instead of redoing the routes again just use the stored token in the env variable it should be invalid js file and also the category title is set the in the json file in the fixtures folder which is added in the body |Category  is not created successfully and uuid is  not generated and written in the category uuid json file in fixtures folder  | Category  is not created successfully and uuid is not generated and written in the category uuid json file in fixtures folder |

## Order status Creation
### Scenario 1: Create an order status with order status title and valid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter order status title in the json file in fixtures folder and the valid token should be called from .env file  |Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file and also the order status title is set the in the json file in the fixtures folder which is added in the body | Order status  is created successfully and uuid is generated and written in the order status json file in fixtures folder  | Order status  is created successfully and uuid is generated and written in the order status json file in fixtures folder |

### Scenario 2: Create a order status with order status title and an invalid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter order status title in the json file in fixtures folder and if invalid  token is called from .env file  |Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands.js file since the database is seeded every midnight instead of redoing the routes again just use the stored token in the env variable it should be invalid js and also the order status title is set the in the json file in the fixtures folder which is added in the body | Order status  is not created successfully and uuid is  not generated and written in the order status json file in fixtures folder  | Order Status  is not created successfully and uuid is not generated and written in the order status uuid json file in fixtures folder |


## Payment Creation
### Scenario 1: Create Payment with type and details which is a nested json object and valid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter type and details which is a nested json object in the json file in fixtures folder and the valid token should be called from .env file  |Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file and also the payment title and the details which is a nested object are set the in the json file in the fixtures folder which is added in the body | Payment  is created successfully and uuid is generated and written in the payment uuid json file in fixtures folder  | Payment  is created successfully and uuid is generated and written in the payment uuid json file in fixtures folder |

### Scenario 2: Create Payment with type and details which is a nested json object and an invalid token from the .env file
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter type and details which is a nested json object in the json file in fixtures folder and if invalid  token is called from .env file  | Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file since the database is seeded every midnight instead of redoing the routes again just use the stored token in the env variable it should be invalid js and also the payment title and the details which is a nested object are set the in the json file in the fixtures folder which is added in the body |Payment  is not created successfully and uuid is  not generated and written in the payment uuid json file in fixtures folder  | Payment  is not created successfully and uuid is not generated and written in the payment uuid json file in fixtures folder |




## Getting Product
### Scenario 1: Get Product Details with valid token and uuid added as the query parameters
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| valid token retrieved from .env file and uuid value retrieved from the product uuid json file after creating product in postman or swagger api |Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file and also the product uuid  json file in the fixtures folder which is added as a query parameter  | Data is retrieved successfully | Data is retrieved successfully |

### Scenario 2: Get Product Details with invalid token and valid uuid added as the query parameters
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| invalid token retrieved from .env file and valid uuid value retrieved from the product uuid json file| Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file since the database is seeded every midnight instead of redoing the routes again just use the stored token in the env variable it should be invalid  and also the product uuid  json file in the fixtures folder which is added as a query parameter  | Data is not retrieved | Data is not retrieved |
| Verify the error message | Response from payload is unauthorized | Response from payload is unauthorized |

### Scenario 3: Get brand with valid token and invalid uuid added as the query parameters
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| valid token retrieved from .env file and invalid uuid value retrieved from the product uuid json file|Retrieve 'Authorization': `Bearer ${Cypress.env('userToken')}` which is stored from the function in commands js file  and also the product uuid  json file in the fixtures folder since the database is seeded every midnight instead of redoing the routes again just use the stored value in the json file it should be invalid  then add it as a query parameter | Data is not retrieved | Data is not retrieved |
| Verify the error message | Response from payload is brand not found | Response from payload is product not found |