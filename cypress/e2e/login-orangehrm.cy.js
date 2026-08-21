import userData from '../fixtures/userData.json'

describe('Orange HRM', () => {

    const selectorList = {
        usernameField : '[name="username"]',
        passwordField : '[name="password"]',
        loginButton : '.orangehrm-login-button',
        sectionTitleTopBar : '.oxd-topbar-header-breadcrumb-module',
        wrongCredentialAlert : "[role='alert']"
    }


    it('Login - Success', () => {

        cy.visit('/web/index.php/auth/login')// entrada padrao
            .get(selectorList.usernameField).type(userData.userSucess.username)
            .get(selectorList.passwordField).type(userData.userSucess.password)
            .get(selectorList.loginButton).click()
            .location('pathname').should('equal', '/web/index.php/dashboard/index')
            .get(selectorList.sectionTitleTopBar).contains('Dashboard')
            
            

    })
    it('Login - Fail', () => {
        cy.visit('/web/index.php/auth/login')
            .get(selectorList.usernameField).type(userData.userFail.username)
            .get(selectorList.passwordField).type(userData.userFail.password)
            .get(selectorList.loginButton).click()
            .get(selectorList.wrongCredentialAlert)


    })
})