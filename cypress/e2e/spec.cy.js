import HomePage from "../pages/HomePage";
import CreateNewCustomerAccount from "../pages/CreateNewCustomerAccount";

describe('Validar Compra', () => {
  beforeEach(()=>{
    cy.HomePage();
  })
  it('cadastro', () => {
    HomePage.cadastro();

    CreateNewCustomerAccount.setCadastro().clicarBotão();
  })
})