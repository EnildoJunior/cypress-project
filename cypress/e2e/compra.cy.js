import HomePage from "../pages/HomePage";
import CreateNewCustomerAccount from "../pages/CreateNewCustomerAccount";
import MyAccount from "../pages/MyAccount";

describe('Validar Compra', () => {
  beforeEach(()=>{
    cy.HomePage();
  })
  it('Validar compra pela criação de conta', () => {
    HomePage.cadastro();

    CreateNewCustomerAccount.setCadastro().clicarBotão();

    MyAccount.clicarBotãoTops();
    MyAccount.setInputAddress();
    MyAccount.clicarBotãoCompra();
  })
})