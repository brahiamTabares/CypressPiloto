import SignInPage from "../../page/signinPage";
import smsPage from "../../page/smsPage";

const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");

beforeEach( () => {
    cy.visit('/')
});

    Given('Ya estoy registrado en el sms', function () {

    });

    When('Ingreso mi nombre de usuario {string} y mi contraseña {string} para ingresar al SMS1', function (nombreUsuario, password) {

        SignInPage.typeUsername('brahiam')
        SignInPage.typeClave('1234')
        SignInPage.typeButtonIngresar()
    });

    Then('Me muestra la pantalla principal del SMS-Builder y valido que se observe el sms',  function () {
        smsPage.elements.salirInput()

    });


