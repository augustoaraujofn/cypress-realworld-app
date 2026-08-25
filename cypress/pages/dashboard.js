class DashboardPage {
    selectorList(){
        const selectors = {
            dahsboardGrid : '.orangehrm-dashboard-grid'
        }

        return selectors

    }
    checkDashboard(){
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorList().dahsboardGrid)
    }

   
}
// Se não fizer esse comando, você não consegue chamar em outras classes
export default DashboardPage