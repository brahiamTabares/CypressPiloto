import RegisterPage from "../../page/registerPage";
import {faker} from "@faker-js/faker/locale/en";


const {When, Given, Then} = require("@badeball/cypress-cucumber-preprocessor");

beforeEach( () => {
    cy.visit('/')
});

Given('Estoy en la página SMS-Builder para registrarme',  function () {

});

When('Ingreso los datos para registrarme', function () {
    let nombre = faker.person.fullName();
    let userName= faker.internet.userName()
    let clave = faker.internet.password();

    RegisterPage.typeRegisterButton()
    RegisterPage.typeNombreC(nombre)
    RegisterPage.typeNombreU(userName)
    RegisterPage.typePassword(clave)
    RegisterPage.typePasswordConfirm(clave)
    RegisterPage.typeAceptar()
});

Then('Me muestra un mensaje de operacion completa por el registro',  function () {
    RegisterPage.elements.confirmInput()
});


