import login from "../pages/Login";

describe('Validar Login',()=>{
    beforeEach(()=>{
        cy.Login();
    })
    it('Validar Login', () => {
        login.validarLogin();
    });
})