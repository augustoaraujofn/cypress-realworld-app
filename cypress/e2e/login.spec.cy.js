import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboard'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Orange HRM', () => {

    it('Login - Success', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        dashboardPage.checkDashboard()

        })

    it('Login - Fail', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
        loginPage.checkAccessInvalid()

      })
})