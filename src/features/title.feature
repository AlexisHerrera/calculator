Feature: Test the page title
    As a developer
    I want to be able to test if a page has a certain title

    Background:
        Given I open the site "/"

    Scenario: Test if the Calculator has the title "Calculator"
        Then the title is "Calculator"
