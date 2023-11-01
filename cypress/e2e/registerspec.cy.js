import { faker } from '@faker-js/faker/locale/en';
import RegisterPage from "../page/registerPage";
describe('template spec', () => {

  beforeEach(function () {

    cy.visit('/')
  });

  it('passes', () => {

    let nombre = faker.person.fullName();
    let userName= faker.internet.userName()
    let clave = faker.internet.password();

    RegisterPage.typeRegisterButton()
    RegisterPage.typeNombreC(nombre)
    RegisterPage.typeNombreU(userName)
    RegisterPage.typePassword(clave)
    RegisterPage.typePasswordConfirm(clave)
    RegisterPage.typeAceptar()
    RegisterPage.elements.confirmInput()
  })
})