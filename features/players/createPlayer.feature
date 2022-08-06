Feature: Create player

  Scenario: Bob wants to create a new player
    Given Bob opens players list
    When Bob clicks "Create player" button
    When Bob fills name of the new player and clicks "Save"
    Then Bob sees new player in the list
