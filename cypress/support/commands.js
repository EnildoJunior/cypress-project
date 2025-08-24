import homePageLocator from "../locators/homePageLocator";
import customerLoginLocator from "../locators/customerLoginLocator";
import account from "../fixtures/account.json";

Cypress.Commands.add('HomePage',()=>{
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(5000);
});

Cypress.Commands.add('Login',()=>{
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(8000);
    cy.get(homePageLocator.buttonSignIn).click();
    cy.wait(5000);
    cy.get(customerLoginLocator.email).type(account.email);
    cy.get(customerLoginLocator.password).type(account.password);
    cy.wait(15000);
    //informe o captcha de maneira manual
    cy.get(customerLoginLocator.buttonSignIn).click();
});

Cypress.Commands.add('clickButton',(button)=>{
    cy.get(button).click();
});

Cypress.Commands.add('setInput',(input, text)=>{
    cy.get(input).type(text);
});