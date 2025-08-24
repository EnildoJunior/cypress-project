Cypress.Commands.add('HomePage',()=>{
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(5000);
})

Cypress.Commands.add('clickButton',(button)=>{
    cy.get(button).click();
})

Cypress.Commands.add('setInput',(input, text)=>{
    cy.get(input).type(text);
})