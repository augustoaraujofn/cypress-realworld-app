import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboard'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

// carrega o chance, que cria nomes aleatórios e outras coisas
const Chance = require('chance');

//cria o objeto variável chance para usar
const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM', () => {

    it('User Info Update - Success', () => {

        loginPage.accessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)

        dashboardPage.checkDashboard()

        menuPage.accessMyInfo()

        myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
        myInfoPage.fillEmployeeDetails('outro', '573245', '983421', '2024-09-12', '2001-03-22')
        myInfoPage.fillStatus('Brazilian', 'Married')
        myInfoPage.SaveForm()

      })  

})