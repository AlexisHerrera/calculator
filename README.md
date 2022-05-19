# calculator

https://www.theodinproject.com/lessons/foundations-calculator

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

```