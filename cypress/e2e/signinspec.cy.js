import SignInPage from "../page/signinPage";
import smsPage from "../page/smsPage";

describe('template spec', () => {
  beforeEach(function () {

    cy.visit('/')
  });

    // Selecciona el campo de nombre de usuario por su atributo "name"

    it('Login en la pagina sms',() =>{
      SignInPage.typeUsername('brahiam')
      SignInPage.typeClave('1234')

      SignInPage.typeButton()
      smsPage.elements.salirInput()
    })

  })
