import userData from '../fixtures/userData.json'

describe('Orange HRM', () => {

    const selectorList = {
        usernameField : '[name="username"]',
        passwordField : '[name="password"]',
        loginButton : '.orangehrm-login-button',
        sectionTitleTopBar : '.oxd-topbar-header-breadcrumb-module',
        dahsboardGrid : '.orangehrm-dashboard-grid',
        wrongCredentialAlert : "[role='alert']",
        myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
        firstNameField : "[name='firstName']",
        middleNameField : "[name='middleName']",
        lastNameField : "[name='lastName']",
        genericField : ".oxd-input--active",
        dateCloseButton : ".--close",
        genericCheckBox : ".oxd-select-text-input",
        genderCheckBox : ".oxd-radio-input--active",
        saveButton: "[type='submit']",
        MessageSuccessUpdate : 'oxd-toast-close'

    }


    it('User Info Update - Success', () => {

        cy.visit('/web/index.php/auth/login')// entrada padrão
            .get(selectorList.usernameField).type(userData.userSucess.username)
            .get(selectorList.passwordField).type(userData.userSucess.password)
            .get(selectorList.loginButton).click()
            .location('pathname').should('equal', '/web/index.php/dashboard/index')
            .get(selectorList.dahsboardGrid)
            .get(selectorList.myInfoButton).click()
            .get(selectorList.firstNameField).clear().type('antonio')
            .get(selectorList.middleNameField).clear().type('ferreira')
            .get(selectorList.lastNameField).clear().type('araújo')
            // o .eq(4), chama o elemento da 4° posição, devido ter outros elementos
            .get(selectorList.genericField).eq(3).clear().type('Employ. id')
            .get(selectorList.genericField).eq(4).clear().type('Other id')
            .get(selectorList.genericField).eq(5).clear().type('Drive li.')
            .get(selectorList.genericField).eq(6).clear().type('2026-21-08')
            .get(selectorList.dateCloseButton).click()

            // 1. Marca o checkbox primeiro
            .get(selectorList.genericCheckBox).eq(0).click()
            // 2. Procura a opção 'Brazilian' na lista que se abriu e clica 
            cy.contains('Brazilian').click()
            // 3. Marca o segundo checkbox 
            .get(selectorList.genericCheckBox).eq(1).click()
            // 4. Procura a opção 'Married' na lista que se abriu e clica
            cy.contains('Married').click()

            //5 . Seleciona o campo data de nascimento e digita a data
            .get(selectorList.genericField).eq(8).clear().type('2001-21-08')
            .get(selectorList.dateCloseButton).click()

            //6 . Seleciona a caixa de gênero homem que está no primeiro índice
            .get(selectorList.genderCheckBox).eq(0).click()
            // 7. Clica no botão salvar do indíce primeiro que é (0)
            .get(selectorList.saveButton).eq(0).click()

            //8. Deve aparecer a mensagem "Successfully updated user information"
            .get('body').should('contain', 'Successfully Updated')
            .get(selectorList.MessageSuccessUpdate)

    
    })
})