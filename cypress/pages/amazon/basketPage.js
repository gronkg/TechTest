class basketPage {

    elements = {
        deleteItem: () => cy.get('span[data-feature-id="delete"]').find('input[date-action="delete"]'),
        emptyCartText: () => cy.get('#sc-active-cart').find('h1[class="a-spacing-mini a-spacing-top-base"}')
    }

    deleteBasketItem() {
        this.elements.deleteItem().click();
    }


}

module.exports = new basketPage();