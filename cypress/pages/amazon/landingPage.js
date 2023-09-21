class landingPage {

    elements = {
        searchBar: () => cy.get("#twotabsearchtextbox"),
        searchSubmit: () => cy.get("#nav-search-submit-text"),
        product: () => cy.get('div[data-index="3"]'),
        productName: () => product.find('span[class="a-size-base-plus a-color-base a-text-normal"'),
        burgerBarOpen: () => cy.get('#abn-hamburger-menu'),
        burgerMenuOption: (option) => cy.get('#abn-hmenu-content').find('div').contains(option),
        burgerMenuFollowUpOption: (option) => cy.get('.abn-hmenu abn-hmenu-visible abn-hmenu-translateX').find('.abn-hmenu-item').contains(option),
        filteredListHeader: () => cy.get('.fst-h1-st pageBanner').find('b'),
        todaysDealsOption: () => cy.get('.nav-a  ').contains("Today\'s Deals"),
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
        this.elements.burgerMenuFollowUpOption(option).click();
    }

    openTodaysDeals() {
        this.elements.todaysDealsOption().click();
    }

    openFirstDealsCategory() {
        this.elements.openFirstDealsCategory().click();
    }

    selectFirstDealProduct() {
        this.elements.firstDealProduct().click();
    }

}

module.exports = new landingPage();