class commitQualityPage {

    elements = {
        addProductLink: () => cy.get('[data-testid="navbar-addproduct"]'),
        newestProductName: () => cy.get('.product-list-table').find('tr').first().find('[data-testid="name"]')
    }

    openAddProduct() {
        this.elements.addProductLink().click();
    }

}

module.exports = new commitQualityPage();