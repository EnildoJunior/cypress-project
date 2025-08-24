import Commands from "../support/commands";
import { homePageLocator } from "../locators/homePageLocator";

class HomePage {
    //*
    //Realiza o cadastro do login
    // */
    cadastro(){
        cy.Login(homePageLocator.cadastro);
    }

}

export default new HomePage();