import myAccountLocator from "../locators/myAccountLocator";

class MyAccount {
    /* 
    Adicionar compra no carrinho
    */
    clicarBotãoTops(){
        cy.get(myAccountLocator.buttonWomen).trigger('mouseover');
        cy.get(myAccountLocator.buttonTops).trigger('mouseover');
        cy.clickButton(myAccountLocator.buttonJackets);
        cy.clickButton(myAccountLocator.buttonCard);
        cy.clickButton(myAccountLocator.buttonColor);
        cy.clickButton(myAccountLocator.buttonSize);
        cy.clickButton(myAccountLocator.buttonAddToCart);
        cy.clickButton(myAccountLocator.buttonMiniCart);
        cy.clickButton(myAccountLocator.buttonProceedtoCheckout);
        return this;
    }

    /* 
    Setar informações de compra
    */
    setInputAddress(){
        cy.setInput(myAccountLocator.inputStreetAddress, "1248 Magnolia Street");
        cy.clickButton(myAccountLocator.selectState);
        cy.clickButton(myAccountLocator.optionState);
        cy.setInput(myAccountLocator.inputCity, "Montgomery");
        cy.setInput(myAccountLocator.inputPostalCode, "35203");
        cy.setInput(myAccountLocator.inputNumber, "(205) 764-2387");
        return this;
    }

    /* 
    Clicar e Validar Compra
    */
    clicarBotãoCompra(){
        cy.clickButton(myAccountLocator.radioShippingMethods);
        cy.clickButton(myAccountLocator.buttonNext);
        cy.clickButton(myAccountLocator.buttonPlaceOrder);
        cy.get(myAccountLocator.messageSuccessBuy).contains("Thank you for your purchase!").should("be.visible");
        return this;
    }
}

export default new MyAccount();