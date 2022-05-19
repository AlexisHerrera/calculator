# calculator

https://www.theodinproject.com/lessons/foundations-calculator

## Features

```gherkin
Scenario: 1 - Basic display
    When start an operation "7 *"
    Then it should display 7

Scenario: 2 - Display clears when entering a value after operator
    When start an operation "7 *"
    And enter another value "5"
    Then it should display 5

Scenario: 3 - String operations
    When start an operation "7 *"
    And enter another value "5"
    When enter an operator "+"
    Then the previous operation is finished and is shown in display (35)
```