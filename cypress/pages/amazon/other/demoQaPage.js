class demoQaPage {

    elements = {
        searchBar: () => cy.get('data-id="search-query"'),
        searchResultsValidation: () => cy.get('#search-results-top')
    }

    search() {
        this.elements.searchBar().type('Chair{enter}');
    }

}

module.exports = new demoQaPage();