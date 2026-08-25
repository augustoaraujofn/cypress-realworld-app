class MyInfoPage {

    selectorList(){
        const selectors = {
            firstNameField : "[name='firstName']",
            middleNameField : "[name='middleName']",
            lastNameField : "[name='lastName']",
            genericField : ".oxd-input--active",
            dateCloseButton : ".--close",
            fillStatus : ".oxd-select-text-input",
            genderCheckBox : ".oxd-radio-input--active",
            saveButton: "[type='submit']",
            MessageSuccessUpdate : 'oxd-toast-close'
        }

        return selectors

    }

        fillPersonalDetails(firstName, middleName, lastName) {

            cy.get(this.selectorList().firstNameField).clear().type(firstName)
            cy.get(this.selectorList().middleNameField).clear().type(middleName)
            cy.get(this.selectorList().lastNameField).clear().type(lastName)

        }

        fillEmployeeDetails(employeeId, otherId, driveLi, expireDate, birthDate){

            cy.get(this.selectorList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorList().genericField).eq(5).clear().type(driveLi)
            cy.get(this.selectorList().genericField).eq(6).clear().type(expireDate)
            cy.get(this.selectorList().dateCloseButton).click()
            cy.get(this.selectorList().genericField).eq(7).clear().type(`${birthDate}{esc}`)
           
        }

        fillStatus(nationality, maritalStatus) {

            cy.get(this.selectorList().fillStatus).eq(0).click()
            cy.contains(nationality).click()
            cy.get(this.selectorList().fillStatus).eq(1).click()
            cy.contains(maritalStatus).click()

        }

        SaveForm() {

            cy.get(this.selectorList().saveButton).eq(0).click()
            cy.get('body').should('contain', 'Successfully Updated')

        }


        
}
// Se não fizer esse comando, você não consegue chamar em outras classes
export default MyInfoPage