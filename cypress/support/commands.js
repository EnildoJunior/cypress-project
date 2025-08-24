Cypress.Commands.add('HomePage',()=>{
    cy.visit('https://magento2-demo.magebit.com/');
    cy.wait(5000);
})

Cypress.Commands.add('Login',(button)=>{
    cy.get(button).click();
})