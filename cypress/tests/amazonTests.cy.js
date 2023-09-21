/// <reference types="cypress" />

import landingPage from '../pages/amazon/landingPage'
import productPage from '../pages/amazon/productPage'
import basketPage from '../pages/amazon/basketPage'
import loginPage from '../pages/amazon/loginPage'

describe('TechTest Tests for Amazon', () => {

  beforeEach(function () {
    cy.fixture('env.json').then(function(data) {
      this.webData = data;
      cy.visit(this.webData.amazonUrl)
    });
  });

  it('01. Add and remove item from search', () => {
    landingPage.enterSearchText('Callaway supersoft golf balls');
    landingPage.submitSearch();
    let productName = landingPage.elements.productName().text();
    landingPage.selectProduct();
    productPage.elements.productName().should('have.text', productName);
    productPage.addToCart();
    productPage.clickGoToBasket();
    basketPage.deleteBasketItem();
    basketPage.elements.emptyCartText().should('have.text', 'Your Amazon Cart is empty.');
  })

  it('02. Search from burger bar', () => {
    let productCategory = "Smart Phones";
    landingPage.openBurgerBar();
    landingPage.selectBurgerBarOption("Electronics");
    landingPage.selectBurgerBarFollowUpOption(productCategory);
    landingPage.elements.filteredListHeader().should('have.text', productCategory)
  })

  it('03. Select from todays deals', () => {
    landingPage.openTodaysDeals();
    landingPage.openFirstDealsCategory();
    landingPage.selectFirstDealProduct();
    productPage.addToCart();
    loginPage.enterEmail();
    loginPage.continueLogin();
    loginPage.enterPassword();
    loginPage.login();
    //Leaving it here as to not publicise any login credentials
  })

})