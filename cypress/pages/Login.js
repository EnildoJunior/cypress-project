import { createNewCustomerAccount } from "../locators/createNewCustomerAccountLocator";

class Login {
    /**
     Validar Login
     */
    validarLogin(){
        cy.get(createNewCustomerAccount.successMessage).contains("Thank you for registering with Main Website Store.").should("be.visible");
    }
}
export default new Login();