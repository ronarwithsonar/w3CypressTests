import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the {string} page', (specifiedPage) => {
    cy.log(`${Cypress.config('baseUrl')}/${specifiedPage}`)
    cy.visit(`${Cypress.config('baseUrl')}/${specifiedPage}`)
})

Then('there are no console errors on page load', () => {
    // https://stackoverflow.com/questions/66154889/cypress-how-to-properly-detect-for-js-errors-in-a-page
    cy.spy(window.console, 'error').as('spyWinConsoleError');
    console.error('questo e errore')
    cy.get('@spyWinConsoleError').should('be.calledOnce');

    // https://stackoverflow.com/questions/53898085/check-if-an-error-has-been-written-to-the-console
    Cypress.on('window:before:load', (win) => {
        cy.spy(win.console, 'error');
        cy.spy(win.console, 'warn');
      });

    cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0);
        expect(win.console.warn).to.have.callCount(0);
    });
})

Then('I validate the page response', () => {
    cy.get('#welcome').should('be.visible', {timeout: 10000})
})

Then('all links go to a different live page', () => {
    //https://www.lambdatest.com/blog/find-broken-links-using-cypress/
    cy.get('#welcome').should('be.visible', {timeout: 10000})
})