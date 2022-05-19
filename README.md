# calculator

https://www.theodinproject.com/lessons/foundations-calculator

## Features

```gherkin
Scenario: 1 - Basic display
    When exists an started operation (7 *)
    Then it should display 7

Scenario: 2 - Display clears when entering a value after operator
    When exists an started operation (7 *)
    And I input another value (5)
    Then it should display 5

Scenario: 3 - String operations
    When exists an started operation (7 *)
    And I input another value (5)
    When I press a button to make a new operation (+)
    Then the previous operation is finished and is shown in display (7 * 5 = 35)
    And exists an started operation (7 *)
    
```