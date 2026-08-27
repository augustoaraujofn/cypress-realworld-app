class DashboardPage {

    selectorList(){

    const selectors = {
        dashboardGrid : "[data-test='sidenav']"
    }

    return selectors

  }

  checkDashboard(){
    cy.visit(this.selectorList().dashboardGrid)

  }
}

export default DashboardPage