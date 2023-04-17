# Test Scenarios for Account Creation, Login with Token Creation, and Getting Data using the api endpoints

## Introduction
These test scenarios cover the functionality of creating an account, logging in with token creation and store in the cypress.env.json file.

## Account Creation
### Scenario 1: Create an account with details
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter first_name and last_name and valid email and password and password_confirmation and avatar and address and phone_number and marketing |post the bio data in this format  first_name: userData.first_name from the json file in the fixtures folder | Account is created successfully | Account is created successfully |

### Scenario 2: Try to login the account with invalid email
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter an invalid email address |post the bio data in this format set an invalid email: userData.email from the json file in the fixtures folder| Account is not created | Account is not created |
| Verify the error message |post the bio data in this format set an invalid email: userData.email from the json file in the fixtures folder| Error message is displayed | Error message is displayed |

## Login with Token Creation
### Scenario 1: Login with valid credentials and create a token
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter valid email and password | post the bio data in this format set a valid email: userData.email and userData.password from the json file in the fixtures folder |User is logged in successfully | User is logged in successfully |
| Create a token |cy.writeFile('cypress.env.json', envFile) the data written in the .env file| Token is created successfully and written successfully in the cypress.env.json | Token is created successfully and written successfully in the cypress.env.json |

### Scenario 2: Login with invalid credentials
| Test Step |Test Data| Expected Result | Actual Result |
| --- | --- | --- |--- |
| Enter invalid email and password |cy.readFile('cypress.env.json', envFile) read wrong data authtoken the .env file| User is not logged in | User is not logged in |
| Verify the error message |cy.readFile('cypress.env.json', envFile) read wrong data authtoken the .env file| Error message is displayed | Error message is displayed |


