class RegisterPage {

    elements = {
        buttonRegisterInput:() =>cy.get('span.ui-button-text.ui-c:contains("Registrarse")'),
        nombreCInput:()=>  cy.get('[name="registro:nombre"]'),
        nombreU:() => cy.get('[id="registro:nombreUsuario"]'),
        passwordInput: () => cy.get('[id="registro:clave"]'),
       confirmPasswordInput:()=> cy.get('[id="registro:verificacionClave"]'),
        buttonAceptarInput:() => cy.get('span.ui-button-text.ui-c:contains("Aceptar")'),
        confirmInput:()=> cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Operación completada'),
        confirmExistInput:()=>    cy.get('div.ui-growl-message span.ui-growl-title').should('have.text', 'Existing registration')

    }
    typeRegisterButton(){

        this.elements.buttonRegisterInput().click()
    }
    typeNombreC(nombre){

        this.elements.nombreCInput().type(nombre)
    }
    typeNombreU(userName){

        this.elements.nombreU().type(userName)
    }
    typePassword(password){

        this.elements.passwordInput().type(password)
    }
    typePasswordConfirm(password){

        this.elements.confirmPasswordInput().type(password)
    }
    typeAceptar(){

        this.elements.buttonAceptarInput().click()
    }



}
module.exports= new  RegisterPage()