class smsPage{

    elements = {

        salirInput: () =>  cy.get('span.ui-button-text.ui-c:contains("Salir")').should('exist')

    }


}
module.exports= new smsPage();