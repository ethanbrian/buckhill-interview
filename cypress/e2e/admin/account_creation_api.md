# Test Scenarios for Account Creation, Login with Token Creation, and Getting Data using the api endpoints

## Introduction
These test scenarios cover the functionality of creating an account, logging in with token creation and store in the cypress.env.json file.

## Account Creation
### Scenario 1: Create an account with details
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter first_name and last_name and valid email and password and password_confirmation and avatar and address and phone_number and marketing  | Account is created successfully | Account is created successfully |

### Scenario 2: Create an account with invalid email
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter an invalid email address | Account is not created | Account is not created |
| Verify the error message | Error message is displayed | Error message is displayed |

## Login with Token Creation
### Scenario 1: Login with valid credentials and create a token
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter valid email and password | User is logged in successfully | User is logged in successfully |
| Create a token | Token is created successfully and written successfully in the cypress.env.json | Token is created successfully and written successfully in the cypress.env.json |

### Scenario 2: Login with invalid credentials
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter invalid email and password | User is not logged in | User is not logged in |
| Verify the error message | Error message is displayed | Error message is displayed |


