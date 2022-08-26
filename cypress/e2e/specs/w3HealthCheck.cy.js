import * as pageHealthCheckCommands from "../../support/testCommands/pageHealthCheckCommands"

context ('It tests several pages on the W3 website', () => {
    
    const pagesToTest = [
        {endpoint: '/standards/badpage', expectedStatusCode: 404},
        {endpoint: '/standards/webdesign/htmlcss', expectedStatusCode: 200},
        {endpoint: '/standards/webofdevices/multimodal', expectedStatusCode: 200},
    ]
    
    for(const page in pagesToTest){

        describe(`It tests the ${pagesToTest[page].endpoint} page on the W3 website`, () => {

            beforeEach(`Navigates to the ${pagesToTest[page].endpoint} page`, () => {
                pageHealthCheckCommands
                .visitPageAndListenForErrorsOnLoad(
                    Cypress.config().baseUrl + pagesToTest[page].endpoint
                );
            });

            afterEach('Checks that there are no console errors', () => {
                pageHealthCheckCommands.checkThereAreNoConsoleErrors();
            });

            it('Validates the response from the page', () => {
                pageHealthCheckCommands
                .checkTheStatusCodeOfThePage(
                    pagesToTest[page].endpoint, 
                    pagesToTest[page].expectedStatusCode
                );
            })

            it('Checks links all lead to live pages', () => {
                pageHealthCheckCommands
                .checkThereAreNoBrokenLinks(pagesToTest[page].endpoint);
            })
        })
    }
})