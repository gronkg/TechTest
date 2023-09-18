/// <reference types="cypress" />

describe('TechTest Tests for Amazon', () => {
    
  beforeEach(function () {
    cy.fixture('env.json').then(function(data) {
      this.webData = data;
      cy.visit(this.webData.url)
      cy.get('body').then((body) => {
        if (body.find('#nav-hamburger-menu').length > 0) {
            //do nothing, page has loaded as expected
        }
        else {
          //This has been added to handle Amazon occassionally opening in a completely different view
          cy.visit(this.webData.url)
        }
      });
    });
  });

  /*
  Some Notes to preface this:
  Some selectors are poor for the sake of simlicity
  Have noticed that the amazon website will occassionally open in a completely different view for some reason
  Without creating the base of a framework to add custom methods this will just be a list of gets 
  */

  it('01. Add item from search', () => {
    cy.get('#twotabsearchtextbox').type('callaway supersoft golf balls');
    cy.get(':nth-child(1) > .s-suggestion-container > .s-suggestion').click();
    cy.get('[data-asin="B07M6GKHVR"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-title-instructions-style > .a-size-mini > .a-link-normal > .a-size-base-plus').click();
    cy.get('#add-to-cart-button').click();
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
    cy.get('.sc-action-delete > .a-declarative > .a-color-link').click();
    cy.get('.a-row > .a-spacing-mini').should('contain.text', 'Your Amazon Cart is empty.')
  })

  it('02. Search from burger bar', () => {
    cy.get('#nav-hamburger-menu', setTimeout[10000]).click();
    cy.get('.hmenu-item', setTimeout[10000]).contains('Electronics').click();
    //Added due to load times blocking the second click, with more time would find a better solution
    cy.wait(2000);
    cy.get('.hmenu-item', setTimeout[10000]).contains('Headphones').click();
    cy.get('.a-list-item > .a-size-base').should('have.text', 'Headphones & Earbuds');
  })

  //Due to prime day coming up, it seems that we are occassionally losing the todays deals option in favour of prime deals
  it('03. Select from todays deals', () => {
    cy.get('[href="/gp/goldbox?ref_=nav_cs_gb"]').click();
    cy.get('.a-size-extra-large').should('contain.text', 'Today\'s Deals');
    //Added the below line to filter out invite only deals
    cy.get('[data-testid="carousel-26088247BE22403A51045F2D83E00C03"] > .GridPresets-module__gridPresetsLargeItem_2xPgV2VoJCncjGPj18in1h').click();
    cy.get(':nth-child(1) > .DealGridItem-module__dealItemContent_1vFddcq1F8pUxM8dd9FW32 > [data-testid="deal-card"] > .DealCard-module__contentWithPadding_1mEcEYf1DvbvZJ9zcQCxtw > .a-link-normal > .DealContent-module__truncate_sWbxETx42ZPStTc9jwySW', setTimeout[10000]).click();
    cy.get(':nth-child(1) > .a-list-item > .octopus-dlp-asin-section > .octopus-dlp-asin-info-section > .octopus-dlp-asin-title > .a-size-base', setTimeout[10000]).click();
    cy.get('#add-to-cart-button').click();
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    //We now require a sign in, for the purpose of this as the test requires us to get to payments but without wanting to add my account details I'm guessing this is fine?
    cy.get('.a-padding-extra-large > .a-spacing-small').should('contain.text', 'Sign in');
  })

})