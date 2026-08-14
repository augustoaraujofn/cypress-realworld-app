describe('Orange HRM', () => {

    it('Login - Sucess', () => {

        cy.visit('/')// entrada padrao
            .get('[name="username"]').type('Admin')
            .get('[name="password"]').type('admin123')
            .get('.orangehrm-login-button').click()

            // Aguarda um texto indicando que abriu a página
            cy.contains('Dashboard').should('be.visible')
            // Espera uma outra url com pathname, indicando que fez login
            cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
            
            
            

    })
    it('Login - Fail', () => {
        cy.visit('/')
            .get('[name="username"]').type('test')
            .get('[name="password"]').type('admin123')
            .get('.orangehrm-login-button').click()

            // Verifica se aparece a mensagem "Invalid credentials"
            cy.get('.oxd-alert-content-text').contains('Invalid credentials')
            
            // Outra maneira de verificar se aparece a mensagem "Invalid credentials", 
            // procurando somente pelo texto "Invalid credentials"
            cy.contains('Invalid credentials').should('be.visible')



    })
})