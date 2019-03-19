Feature: login
  In order to use the site
  As a user
  I want to login

  Background:
    Given a user exists with username "denizsimsek93" and password "123456789"
    And I am on the login page

  Scenario: Login (with username)
    And I fill in "username" with "denizsimsek93"
    And I fill in "password" with "123456789"
    And I press "login" button
    Then I should be on the "home" page
    And I should see "Welcome back, denizsimsek93!" text

  Scenario: Fail to login (incorrect username)
    And I fill in "username" with "bob"
    And I fill in "password" with "123456789101112"
    And I press "login" button
    Then I should be on the "login" page
    And the field "alert" should be "the user bob does not exist"

  Scenario: Fail to login (incorrect password)
    And I fill in "username" with "denizsimsek93"
    And I fill in "password" with "123456788888888"
    And I press "login" button
    Then I should be on the "login" page
    And the field "alert" should be "password incorrect"