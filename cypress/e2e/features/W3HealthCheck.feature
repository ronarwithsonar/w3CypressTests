Feature: Health Checks
    I want to test several health checks on the W3 website

    Scenario Outline: Checks there are no console errors on page loads
        Given I am on the "<specified>" page
        Then there are no console errors on page load
        Examples:
            | specified                            |
            | /standards/badpage                   |
            | /standards/webofdevices/multimodal   |
            | /standards/webdesign/htmlcss         |

    Scenario Outline: Validates the response code from the page
        Given I am on the "<specified>" page
        Then I validate the page has a response code of <expectedStatusCode>
        Examples:
            | specified                            | expectedStatusCode | 
            | /standards/badpage                   | 404                |
            | /standards/webofdevices/multimodal   | 200                |
            | /standards/webdesign/htmlcss         | 200                |

    Scenario Outline: Checks all links on the page go to another live (non 4xx) page
        Given I am on the "<specified>" page
        Then all links go to a different live page
        Examples:
            | specified                            |
            | /standards/badpage                   |
            | /standards/webofdevices/multimodal   |
            | /standards/webdesign/htmlcss         |
