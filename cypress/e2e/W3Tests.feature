Feature: CypressTests
    I want to test the W3 website
@focus 
    ScenarioOutline: Checks there are no console errors on page loads
        Given I am on the {specified} page
        Then there are no console errors on page load
        Examples:
            | specified                 |
            | badpage                   |
            | webofdevices/multimodal   |
            | webdesign/htmlcss         |
@focus 
    ScenarioOutline: Validates the response code from the page
        Given I am on the {specified} page
        Then I validate the page response
        Examples:
            | specified                 |
            | badpage                   |
            | webofdevices/multimodal   |
            | webdesign/htmlcss         |
@focus 
    ScenarioOutline: Checks all links on the page go to another live (non 4xx) page
        Given I am on the {specified} page
        Then all links go to a different live page
        Examples:
            | specified                 |
            | badpage                   |
            | webofdevices/multimodal   |
            | webdesign/htmlcss         |
