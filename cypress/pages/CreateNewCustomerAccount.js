import { createNewCustomerAccount } from "../locators/createNewCustomerAccountLocator";
import account from "../fixtures/account.json"

class CreateNewCustomerAccount {
    /**
    Setar input no cadastro
    @param informar texto a ser setado
    */
    setCadastro(){
        cy.setInput(createNewCustomerAccount.firtName, "Roni");
        cy.setInput(createNewCustomerAccount.lastName, "Cost");
        cy.setInput(createNewCustomerAccount.email, account.email);
        cy.setInput(createNewCustomerAccount.password, account.password);
        cy.setInput(createNewCustomerAccount.confirmationPassword, account.password);
        return this;
    }

    /**
     Clicar no botão
     */
    clicarBotão(){
        cy.clickButton(createNewCustomerAccount.buttonCreateAccount);
        cy.get(createNewCustomerAccount.successMessage).contains("Thank you for registering with Main Website Store.").should("be.visible");
    }
}

export default new CreateNewCustomerAccount();