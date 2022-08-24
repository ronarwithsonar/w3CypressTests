# W3 Website Tests

An exercise in using Cucumber, Cypress, Docker, and Docker-Compose to test against multiple browsers

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/package-manager/)

## Installation

Use the package manager [npm](https://nodejs.org/en/download/package-manager/) to build, deploy and test the test suite.

```bash
npm run build-deploy-test
```
This will build the docker image, deploy the containers, execute the tests in both Chrome and Firefox, and generate the test report  

## Notes
When `package.json` OR `cypress.config.js` changes, the docker image needs to be rebuilt using one of the commands below

## Commands

- `npm run build-cypress-image`- Builds the docker image
- `npm run build-deploy-test`- Builds, deploys, tests, and generates the test report
- `npm run pre-test`- Clears down the test reports
- `npm run generate-report` - Generates the test reports
- `npm run combine-reports` - Combines the test reports
- `npm run scripts` - Runs tests on native machine
- `npm run scripts:chrome` - Runs tests on Chrome via Docker
- `npm run scripts:firefox` - Runs tests on Firefox via Docker
- `npm run posttest` - Combines and generates the test reports
- `npm run test-development` - Opens Cypress browser for test development
- `npm run test` - Runs tests on native machine and generates report 
- `npm run test:chrome` - Runs tests on Chrome via Docker and generates report
- `npm run test:firefox` - Runs tests on Firefox via Docker and generates report
- `npm run test:cross-platform` - Runs tests on Chrome and Firefox in parralel via Docker and generates report

