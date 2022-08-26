# W3 Website Tests

An exercise in using Cucumber, Cypress, Docker, and Docker-Compose to test against multiple browsers

## Prerequisites
- [Docker](https://docs.docker.com/get-docker/)
- [Docker-Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/download/package-manager/)

## Installation

Use the package manager [npm](https://nodejs.org/en/download/package-manager/) to build, deploy and execute the test suite.

```bash
npm run build-deploy-test
```
This will build the docker image, deploy the containers, execute the tests on both Chrome and Firefox in parralel, and generates the test report  

-----

To build container with tests installed:

```bash
npm run build:cypress:image-with-tests
```


## Notes

- When `package.json` OR `cypress.config.js` changes, the docker image ***needs to be rebuilt*** using one of the `npm run build:cypress:image` or `build:deploy:test`
- If tests are changed/updated, `npm run build:cypress:image-with-tests`

## Commands

- `npm run build:cypress:image`- Builds the docker image
- `npm run build:cypress:image-with-tests`- Builds the docker image with tests included
- `npm run build:deploy:test`- Builds, deploys, tests, and generates the test report
- `npm run pre-test`- Clears down the test reports
- `npm run generate-report` - Generates the test reports
- `npm run combine-reports` - Combines the test reports
- `npm run post-test` - Combines and generates the test reports
- `npm run scripts` - Runs tests on native machine
- `npm run test:chrome` - Runs tests on Chrome on native machine
- `npm run test:firefox` - Runs tests on Firefox on native machine
- `npm run test-dev` - Opens Cypress for active test development
- `npm run test` - Runs tests on native machine and generates report 
- `npm run test:chrome:docker` - Runs tests on Chrome via Docker and generates report
- `npm run test:firefox:docker` - Runs tests on Firefox via Docker and generates report
- `npm run test:cross-platform` - Runs tests on Chrome and Firefox in parallel via Docker and generates report

