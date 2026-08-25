class MenuPage {
    selectorList(){
        const selectors = {
            adminButton : 'href="/web/index.php/admin/viewAdminModule"',
            myInfoButton : "[href='/web/index.php/pim/viewMyDetails']",
        }

        return selectors

    }
        accessAdmin() {
            cy.get(this.selectorList().adminButton).click()
        }
        
        accessMyInfo() {
            cy.get(this.selectorList().myInfoButton).click()

        }
       
        
}
// Se não fizer esse comando, você não consegue chamar em outras classes
export default MenuPage