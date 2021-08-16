Feature: Validate the Contact Search feature

#With Examples Keyword: Here Scenario Outline is needed.

Scenario Outline: Validate the Contact Search functionality
Given user is on Login Page
Then user types "<username>" and clicks Next
Then user types "<password>" and clicks SignIn button
Then user clicks on the Yes option
Then on the Home Page user clicks on Contacts Menu
And user enters "<firstname>" in the search box and clicks Enter
Then user verifies Contact Search functionality is pass or fail
Then user closes the Browser
#
#
##Below is a Parameterisation example using Examples.
Examples:
    | username | password | firstname |
    | admin@CRM215677.onmicrosoft.com | pf8POcMEtF | Steve |
