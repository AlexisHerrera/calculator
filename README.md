# calculator

https://www.theodinproject.com/lessons/foundations-calculator

## Features

```gherkin
Scenario: String operations
    Given exists a started operation (7 *)
    And I input another value (5)
    When I press a button to make a new operation (+)
    Then the previous operation is finished and is shown in display (7 * 5 = 35)
    And exists a started operation (35 +)
```