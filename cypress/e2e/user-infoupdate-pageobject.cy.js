import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboard'
import MenuPage from '../pages/menu'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage

describe('Orange HRM', () => {

    it.only('User Info Update - Success', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSucess.username, userData.userSucess.password)
        dashboardPage.checkDashboard()
        menuPage.accessMyInfo()


      })  
})