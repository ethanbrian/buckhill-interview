# Test Scenarios for creating a brand and uuid is  generated and retrieving the brand with a valid token and invalid token in using the api endpoints

## Introduction
These test scenarios cover the functionality of creating a brand, logging in with the token store in the cypress.env.json file.

## Account Creation
### Scenario 1: Create an brand with brand title and valid token from the .env file
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter brand title from json file in fixtures folder and the valid token should be called from .env file  | Brand  is created successfully and uuid is generated and written in the brand uuid json file in fixtures folder  | Brand  is created successfully and uuid is generated and written in the brand uuid json file in fixtures folder |

### Scenario 1: Create an brand with brand title and an invalid json
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| Enter brand title from json file in fixtures folder and if invalid  token is called from .env file  | Brand  is created successfully and uuid is generated and written in the brand uuid json file in fixtures folder  | Brand  is created successfully and uuid is generated and written in the brand uuid json file in fixtures folder |

## Getting Brand
### Scenario 1: Get brand with valid token and uuid added as the query parameters
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| valid token retrieved from .env file and uuid value retrieved from the brand uuid json file | Data is retrieved successfully | Data is retrieved successfully |

### Scenario 2: Get brand with invalid token and valid uuid added as the query parameters
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| invalid token retrieved from .env file and valid uuid value retrieved from the brand uuid json file | Data is not retrieved | Data is not retrieved |
| Verify the error message | Response from payload is unauthorized | Response from payload is unauthorized |

### Scenario 2: Get brand with valid token and invalid uuid added as the query parameters
| Test Step | Expected Result | Actual Result |
| --- | --- | --- |
| valid token retrieved from .env file and uuid value retrieved from the brand uuid json file| Data is not retrieved | Data is not retrieved |
| Verify the error message | Response from payload is brand not found | Response from payload is brand not found |