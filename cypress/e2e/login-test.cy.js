import {LoginPage} from './loginPage/loginPage'

const loginAction = new LoginPage

it('dashboard login', ()=>{

  cy.visit('https://admin-dashboard-lime.vercel.app/')

  loginAction.enterEmail('admin@admin.xyz')

  loginAction.enterPassword('123456')

  loginAction.clickButton()

})