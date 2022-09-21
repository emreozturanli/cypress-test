export class LoginPage {

  enterEmail = (email) => {
    cy.get('#email')
      .type(email)
  }

  enterPassword = (password) => {
    cy.get('#password')
    .type(password)
  }

  clickButton = () => {
    cy.get('.MuiButton-root')
      .click()
  }

}