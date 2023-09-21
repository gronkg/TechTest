class loginPage {

    elements = {
        email: () => cy.get('#ap_email'),
        continue: () => cy.get('#continue'),
        password: () => cy.get('#ap_password'),
        signIn: () => cy.get('#signInSubmit')

    }

    enterEmail() {
        this.elements.email().type('EMAIL GOES HERE');
    }

    continueLogin() {
        this.elements.continue().click();
    }

    enterPassword() {
        this.elements.password().type('PASSWORD GOES HERE');
    }

    login() {
        this.elements.signIn().click();
    }


}

module.exports = new loginPage();