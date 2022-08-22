Feature: As user I am able to search courses

  Scenario: User is able to search course
    Given I am on home page
    When I enter anthropology into search box
    And I click on search button
    Then I verify total found courses

