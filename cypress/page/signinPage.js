const {ne} = require("@faker-js/faker");

class  SigninPage {


elements = {

    usernameInput: () => cy.get('[name="nombreUsuario"]'),
    // Selecciona el campo de contraseña por su atributo "id"
    claveInput: () => cy.get('#clave'),
    buttonIngresarInput: () => cy.get('#j_idt74')
}
typeUsername(userName){
    this.elements.usernameInput().type(userName)
}
typeClave(clave){

    this.elements.claveInput().type(clave)
}
typeButtonIngresar(){
    this.elements.buttonIngresarInput().click()
}
} module.exports= new SigninPage();