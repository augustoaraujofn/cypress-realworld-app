class LoginPage {

    selectorList(){

    const selectors = {
        usernameField: '[name="username"]',
        passwordField : '[name="password"]',
        signinSubmit : "[data-test='signin-submit']",
        accessValid : '[data-test="sidenav"]',
        signinErrorMessage : "[data-test='signin-error']",
        usernameRequired : '#username-helper-text'
    }

    return selectors

  }

  accessLoginPage() {
    cy.visit('http://localhost:3000')
  }

  loginUserSuccess(username, password){
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().signinSubmit).click()
  }

  loginUserFail(username, password){
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().signinSubmit).click()
    cy.get(this.selectorList().signinErrorMessage)
  }

  emptyLogin() {
    cy.get(this.selectorList().signinSubmit).click()
    cy.get(this.selectorList().usernameRequired)
}
  
}

export default LoginPage