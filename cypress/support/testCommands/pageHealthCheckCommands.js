export function visitPageAndListenForErrorsOnLoad(url){
    cy.visit(url, {
        failOnStatusCode: false,
        onBeforeLoad(win) {
            cy.spy(win.console, 'error').as('spyWinConsoleError');
            cy.spy(win.console, 'warn').as('spyWinConsoleWarn');
        }
    });
}

export function checkThereAreNoConsoleErrors(){
    cy.get('@spyWinConsoleError').should('not.be.called');
    cy.get('@spyWinConsoleWarn').should('not.be.called');
}

export function checkTheStatusCodeOfThePage(endpoint, expectedStatusCode) {
    cy.request({
        url: Cypress.config().baseUrl + endpoint, 
        failOnStatusCode: false
    }).its('status').should('equal', expectedStatusCode);
}

export function checkThereAreNoBrokenLinks(page) {
    cy.get('a:not([class="current"])').each(($link) => {
        cy.wrap($link).should('have.attr', 'href')
        .then((href) => {
            let linkText = String(href);

            //checking for email links
            if (linkText.includes('mailto')) {
                return;
            }
            //checking for links that are relative
            if (linkText.includes('../')){
                const dir = page.split('/').at(1);
                linkText = `/${dir}/${linkText.split('./').pop()}`;
            }
            cy.request({
                url: linkText,
                failOnStatusCode: false
            }).its('status').should('equal', 200);
        })
    })
}