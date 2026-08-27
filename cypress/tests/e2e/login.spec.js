import userData from '../../fixtures/userData.json'
import LoginPage from '../../pages/loginPage'
import DashboardPage from '../../pages/dashboard'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login', () => {

  it('Login with valid credentials', () => {
  
    loginPage.accessLoginPage()
    loginPage.loginUserSuccess(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboard()

  })

  it('Login with invalid username', () => {
    loginPage.accessLoginPage()
    loginPage.loginUserFail(userData.userFail.username, userData.userSuccess.password)



  })

   it('Login with invalid password', () => {
    loginPage.accessLoginPage()
    loginPage.loginUserFail(userData.userSuccess.username, userData.userFail.password)



  })

  it('Login button should be disabled with empty credentials', () => {
    loginPage.accessLoginPage()
    loginPage.emptyLogin()
})

})