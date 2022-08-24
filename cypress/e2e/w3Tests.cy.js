import failOnConsoleError from "cypress-fail-on-console-error"

context ('It tests several pages on the W3 website', () => {
    
    const pagesToTest = [
        'badpage',
        'webofdevices/multimodal',
        'webdesign/htmlcss',
    ]
    
    for(const page in pagesToTest){

        describe(`It tests the ${pagesToTest[page]} page on the W3 website`, () => {

            beforeEach(`Navigates to the ${pagesToTest[page]} page`, () => {
                cy.visit(Cypress.config().baseUrl + pagesToTest[page], {failOnStatusCode: false})
            })

            it('Checks there are no console errors on page load', () => {
            })
        })
    }
})