# calculator [![CI](https://github.com/AlexisHerrera/calculator/actions/workflows/ci.yaml/badge.svg)](https://github.com/AlexisHerrera/calculator/actions/workflows/ci.yaml)

App: https://alexisherrera.github.io/calculator

Lesson: https://www.theodinproject.com/lessons/foundations-calculator

## Features

```gherkin
Scenario: 1 - Basic display
    When enter value "7"
    Then it should display "7"

Scenario: 2 - Display clears when entering a value after operator
    When enter value "7"
    And enter an operator "*"
    And enter value "5"
    And press equals
    Then it should display "35"

Scenario: 3 - String operations
    When enter value "7"
    And enter an operator "*"
    And enter value "5"
    And enter an operator "+"
    Then it should display "35"

Scenario: 4 - Operator after equals should use result as left operand
    When enter value "7"
    And enter an operator "*"
    And enter value "5"
    And press equals
    And enter an operator "+"
    Then it should display "35"

Scenario: 5 - Rounds up to two decimals
    When enter value "1"
    And enter an operator "*"
    And enter value "3"
    And press equals
    Then it should display "0.33"

Scenario: 6 - Change operator
    When enter value "7"
    And enter an operator "*"
    And enter an operator "+"
    And enter value "5"
    And press equals
    Then it should display "12"

Scenario: 7 - Accepts decimals
    When enter value "1"
    And enter "."
    And enter value "2"
    Then it should display "1.2"

Scenario: 8 - Should not accept more than 1 decimal just after one
    When enter value "1"
    And enter "."
    And enter "."
    And enter value "2"
    Then it should display "1.2"

Scenario: 9 - Should not accept more than 1 decimal in any place
    When enter value "1"
    And enter "."
    And enter value "2"
    And enter "."
    Then it should display "1.2"

Scenario: 10 - Backspace removes last value introduced
    When enter value "12"
    And enter "backspace"
    Then it should display "1"
```