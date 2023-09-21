class basketPage {

    elements = {
        deleteItem: () => cy.get('span[data-feature-id="delete"]').find('input[data-action="delete"]'),
        emptyCartText: () => cy.get('.a-row > .a-spacing-mini')
    }

    deleteBasketItem() {
        this.elements.deleteItem().click();
    }


}

module.exports = new basketPage();