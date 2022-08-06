Scenario: Tournaments might have different statuses - live, planned and completed
  Given User goes to tournaments list
  When They click completed tournament
  Then They see tournament stats
  When They go back
  And They click live tournament
  Then They can see the last game of the tournament
  When they go back
  And They click planned tournament "empty tournament"
  Then they can see form of selecting starting teams
  When they decided to select "team1" and "team2" as they will play first
  Then they see form of the first game of the tournament
