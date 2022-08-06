Feature: Tournaments creation
  Everyone uses football leader for handling tournaments

  Scenario: Tournaments should not be unknown
    Given User goes to create tournament form
    When They decided to not give any name to the new tournament and clicks "Create"
    Then User should see validation error

  Scenario Outline: Tournaments without teams can be created
    Given User goes to create tournament form
    When They input "<name>" and click "Create"
    Then User should see form of teams selection

  Examples:
    | name                     |
    | Tournament Test in Angar |
    | Tournament Test in VSO   |

  Scenario: Tournaments can be created and started
    Given User goes to create tournament form
    When They input "<name>" and click "Create"
    Then User should see form of teams selection
    When They create blue team
    When They create red team
    When They create yellow team
    When They decided blue and red will play first
    Then They see game between blue and red
