Feature: login
  In order to use the site
  As a user
  I want to login

  Background:
    Given a user exists with username "denizsimsek" and password "123456789"
    And I am on the "login" page

  Scenario: Login (with username)
    And I provide "username" with "denizsimsek"
    And I provide "password" with "123456789"
    And I press "login" button
    Then I should be on the "home" page
    And I should see "Welcome back, denizsimsek!" text

  Scenario: Fail to login (incorrect username)
    And I provide "username" with "bob"
    And I provide "password" with "123456789101112"
    And I press "login" button
    Then I should be on the "login" page
    And the field "alert" should be "the user bob does not exist"

  Scenario: Fail to login (incorrect password)
    And I provide "username" with "denizsimsek"
    And I provide "password" with "123456788888888"
    And I press "login" button
    Then I should be on the "login" page
    And the field "alert" should be "password incorrect"