Feature: Login

  Scenario: User wants to login to the page
    Given Bob is not logged
    And opens main page
    When Bob types his username
    When Bob types his password
    When Bob clicks login button
    Then Bob sees main menu page

  Scenario: User can not login with wrong password
    Given Bob is not logged
    And opens main page
    When Bob types his username
    When Bob types wrong password
    Then Bob sees wrong password error
