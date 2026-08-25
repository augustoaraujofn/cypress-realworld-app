class LoginPage {

    selectorList(){
        
        const selectors = {
            usernameField : '[name="username"]',
            passwordField : '[name="password"]',
            loginButton : '.orangehrm-login-button',
            wrongCredentialAlert : "[role='alert']"
        }

        return selectors

    }

    accessLoginPage() {

        cy.visit('/web/index.php/auth/login')
    }

    loginWithUser(username,password){

        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }

    checkAccessInvalid() {

        cy.get(this.selectorList().wrongCredentialAlert)
        
    }
}
// Se não fizer esse comando, você não consegue chamar em outras classes
export default LoginPage 