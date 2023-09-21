class landingPage {

    elements = {
        searchBar: () => cy.get("#twotabsearchtextbox"),
        searchSubmit: () => cy.get("#nav-search-submit-text"),
        product: () => cy.get('div[data-index="3"]'),
        productName: () => cy.get('div[data-index="3"]').find('span[class="a-size-base-plus a-color-base a-text-normal"]'),
        burgerBarOpen: () => cy.get('#nav-hamburger-menu'),
        burgerMenuOption: (option) => cy.get('.hmenu-visible').find('div').contains(option),
        burgerMenuFollowUpOption: (option) => cy.get('.hmenu-translateX').find('.hmenu-item').contains(option),
        filteredListHeader: () => cy.get('.a-list-item').find('span'),
        todaysDealsOption: () => cy.get('.nav-a  ').contains("Today's Deals"),
        //NOT HAPPY WITH BELOW SELECTOR
        specificCategoryChoice: () => cy.get('.a-carousel').find('span').contains('Back to School'),
        firstDealCategory: () => cy.get('div[data-testid="grid-deals-container"]').find('div').first(),
        firstDealProduct: () => cy.get('li').first()
    }

    enterSearchText(searchText) {
        this.elements.searchBar().type(searchText);
    }

    submitSearch() {
        this.elements.searchSubmit().click();
    }

    selectProduct() {
        this.elements.product().click();
    }

    openBurgerBar() {
        this.elements.burgerBarOpen().click();
    }

    selectBurgerBarOption(option) {
        this.elements.burgerMenuOption(option).click();
    }

    selectBurgerBarFollowUpOption(option) {
        this.elements.burgerMenuFollowUpOption(option).click({force: true});
    }

    openTodaysDeals() {
        this.elements.todaysDealsOption().click();
    }

    openFirstDealsCategory() {
        this.elements.firstDealCategory().click();
    }

    selectFirstDealProduct() {
        this.elements.firstDealProduct().click({force: true});
    }

    selectDealsCategory() {
        this.elements.specificCategoryChoice().click();
    }

}

module.exports = new landingPage();