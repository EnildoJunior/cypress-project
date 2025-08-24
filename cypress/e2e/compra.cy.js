import HomePage from "../pages/HomePage";
import CreateNewCustomerAccount from "../pages/CreateNewCustomerAccount";
import MyAccount from "../pages/MyAccount";

describe('Validar Compra', () => {
  beforeEach(()=>{
    cy.HomePage();
  })
  it('Cadastro', () => {
    HomePage.cadastro();

    CreateNewCustomerAccount.setCadastro().clicarBotão();

    MyAccount.clicarBotãoTops();
    MyAccount.setInputAddress();
    MyAccount.clicarBotãoCompra();
  })
})