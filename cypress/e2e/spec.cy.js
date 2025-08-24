import HomePage from "../pages/HomePage";

describe('Validar Compra', () => {
  beforeEach(()=>{
    cy.HomePage();
  })
  it('cadastro', () => {
    HomePage.cadastro();
  })
})