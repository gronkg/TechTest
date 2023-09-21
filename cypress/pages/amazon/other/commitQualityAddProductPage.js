class commitQualityAddProductPage {

    elements = {
        productName: () => cy.get('[data-testid="product-textbox"]'),
        productPrice: () => cy.get('[data-testid="price-textbox"]'),
        productDate: () => cy.get('[data-testid="price-textbox"]'),
        submit: () => cy.get('[data-testid="submit-form"]')
    }

    addName() {
        this.elements.productName().type("Golf Balls");
    }
    
    addPricee() {
        this.elements.productPrice().type("100");
    }

    addDate() {
        this.elements.productDate().type('10052023');
    }

    submitProduct() {
        this.elements.submit().click();
    }

}

module.exports = new commitQualityAddProductPage();