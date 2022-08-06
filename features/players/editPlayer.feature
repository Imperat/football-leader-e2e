Feature: Edit player

  Scenario: Bob wants to rename an existing player
    Given Bob opens players list
    When On the first player Bob clicks "Edit"
    When Bob fills name of the player with random number and saves
    Then Bob sees new name in the list
