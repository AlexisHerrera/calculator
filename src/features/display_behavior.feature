Feature: Test the diplay behavior
  As a developer
  I want to be able to test if the behavior when pressing buttons is correct
  Scenario: 1 - Basic display
    When enter value "7"
    Then I expect that element "#display" contains the text "7"
    And it should display "7"
