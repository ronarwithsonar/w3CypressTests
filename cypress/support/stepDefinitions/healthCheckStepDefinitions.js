import * as pageHealthCheckCommands from "../testcommands/pageHealthCheckCommands"
import { Given, Then} from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the {string} page', (specified) => {
    cy.wrap(specified).as('page');
    pageHealthCheckCommands
        .visitPageAndListenForErrorsOnLoad(Cypress.config().baseUrl + specified);
})

Then('there are no console errors on page load', () => {
    pageHealthCheckCommands.checkThereAreNoConsoleErrors();
})

Then('I validate the page has a response code of {int}', (statusCode) => {
    cy.get('@page').then(page => {
        pageHealthCheckCommands.checkTheStatusCodeOfThePage(page, statusCode);
    });
})

Then('all links go to a different live page', () => {
    cy.get('@page').then(page => {
        pageHealthCheckCommands.checkThereAreNoBrokenLinks(page);
    });
})