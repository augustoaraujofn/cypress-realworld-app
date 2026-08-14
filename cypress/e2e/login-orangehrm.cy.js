describe('Orange HRM', () => {

    const selectorList = {
        usernameField : '[name="username"]',
        passwordField : '[name="password"]',
        loginButton : '.orangehrm-login-button',
        sectionTitleTopBar : '.oxd-topbar-header-breadcrumb-module',
        wrongCredentialAlert : "[role='alert']"
    }

    it('Login - Sucess', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')// entrada padrao
            .get(selectorList.usernameField).type('Admin')
            .get(selectorList.passwordField).type('admin123')
            .get(selectorList.loginButton).click()
            .location('pathname').should('equal', '/web/index.php/dashboard/index')
            .get(selectorList.sectionTitleTopBar).contains('Dashboard')
            
            

    })
    it('Login - Fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            .get(selectorList.usernameField).type('test')
            .get(selectorList.passwordField).type('admin123')
            .get(selectorList.loginButton).click()
            .get(selectorList.wrongCredentialAlert)


    })
})