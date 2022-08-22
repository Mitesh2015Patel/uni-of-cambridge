Feature: As user I am able to click on menu tab

  Scenario Outline: User is able to click on all menu tab
    Given I am on home page
    When I am able to click on all menu tab "<Menu>"
    Examples:
      | Menu                     |
      | Courses                  |
      | Bursaries                |
      | Information for Students |
      | Events                   |
      | Abouts Us                |