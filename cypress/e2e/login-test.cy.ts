/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
  })

  it('Positive Login', () => {
    cy.login('student', 'Password123')
    cy.url().should('contains', 'practicetestautomation.com/logged-in-successfully/')
    cy.contains('Congratulations').should('be.visible')
    cy.get('a:contains("Log out")').should('be.visible')

  })

  it('Negative Username', () => {
    cy.login('incorrectUser', 'Password1234')
    cy.get('#error').should('be.visible')
    cy.contains('Your username is invalid!').should('be.visible')
  })

  it('Negative Password', () => {
    cy.login('student', 'incorrectPassword')
    cy.get('#error').should('be.visible')
    cy.contains('Your password is invalid!').should('be.visible')
  })

})