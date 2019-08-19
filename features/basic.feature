Feature: Searching for articles
  In order to be able to see an article
  As a user
  I want to be able to search for an article

  Scenario: Serach for a simple article
    Given I a have an ipad in my hand in horizontal orientation
    When I search for a random article
    Then I want to find the article
