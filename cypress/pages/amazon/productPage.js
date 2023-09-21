class productPage {

    elements = {
        productName: () => cy.get("#productTitle"),
        addToCart: () => cy.get("#add-to-cart-button"),
        product: () => cy.get('div[data-index="3"]'),
        addedSuccess: () => cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS').find('span'),
        goToBasket: () => cy.get('#sw-gtc').find('a'),
        goToCheckout: () => cy.get('input[name="proceedToRetailCheckout"]')
    }

    addToCart() {
        this.elements.addToCart().click();
    }

    clickGoToBasket() {
        this.elements.goToBasket().click();
    }

    clickGoToCheckout() {
        this.elements.goToCheckout().click();
    }

}

module.exports = new productPage();