Feature: As user able to select course

  Scenario Outline: As user able to click on apply now button
    Given I am on home page
    When I click on Undergraduate Certificate in Immunology image
    And I click on apply now button
    And I click on register
    And I enter first name "<FirstName>"
    And I enter surname "<Surname>"
    And I enter email "<Email>"
    Then I click on register button
    And I should get error message
  Examples:
    | FirstName | Surname | Email                    |
    | Tom       | patel   | Tom.cat@yahoo.com        |
    | Cat       | patel   | Cat.Tom@yahoo.com        |
    | TomCat    | patel   | Tomcat.cartoon@yahoo.com |