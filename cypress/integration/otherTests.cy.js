/// <reference types="cypress" />

import commitQualityPage from '../pages/other/commitQualityPage'
import commitQualityAddProductPage from '../pages/other/commitQualityAddProductPage'
import demoQaPage from '../pages/other/demoQaPage'

describe('TechTest Tests for Other', () => {

    beforeEach(function () {
        cy.fixture('env.json').then(function(data) {
            this.webData = data;
        });
    });

    //Single test with multi domains
    it('01. Multi Domain Test', () => {
        cy.visit(this.webData.commitQualityUrl);
        commitQualityPage.openAddProduct();
        commitQualityAddProductPage.addName();
        commitQualityAddProductPage.addPrice();
        commitQualityAddProductPage.addDate();
        commitQualityAddProductPage.submitProduct();
        commitQualityPage.elements.newestProductName().should('have.text', 'Golf Balls');
        //The second URL given was not working
        //For the sake of multi domain I just used Etsy instead
        cy.visit(this.webData.demoQaUrl);
        demoQaPage.search();
        demoQaPage.elements.searchResultsValidation().should('exist');
    })

})