Feature: A registered user tries to login to the site
  In order to use the site
  As a registered user
  The user wants to login

  Background:
    Given a user exists with username "denizsimsek" and password "123456789"

  Scenario: The user logs in with valid credentials
    And I provide "username" with "denizsimsek"
    And I provide "password" with "123456789"
    When the user is logging in
    Then the user should be logged in

  Scenario: The user fails to login with incorrect username
    And I provide "username" with "bob"
    And I provide "password" with "123456789101112"
    When the user is logging in
    Then the user should not be logged in

  Scenario: The user fail to login with incorrect password
    And I provide "username" with "denizsimsek"
    And I provide "password" with "123456788888888"
    When the user is logging in
    Then the user should not be logged in