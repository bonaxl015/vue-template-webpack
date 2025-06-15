import webpage from '../../pageObjects';
import { footerData } from '../../fixtures/footer';
import { navigationData } from '../../fixtures/navigation';
import { aboutPageData } from '../../fixtures/aboutPage';

describe('When I go to About page', () => {
  beforeEach(() => {
    cy.loadWebsite();
    cy.goToPage('about');
  });

  it('should display the about page', () => {
    webpage.aboutPage.heading
      .should('be.visible')
      .should('have.text', aboutPageData.heading);
    webpage.aboutPage.subHeading
      .should('be.visible')
      .should('have.text', aboutPageData.subHeading);
    webpage.aboutPage.content.should('be.visible');
    webpage.aboutPage.author
      .should('be.visible')
      .should('have.text', aboutPageData.authorTitle);
    webpage.aboutPage.authorName
      .should('be.visible')
      .should('have.text', aboutPageData.authorValue);
    webpage.aboutPage.authorCompany
      .should('be.visible')
      .should('have.text', aboutPageData.authorCompany);
    webpage.aboutPage.goToHome
      .should('be.visible')
      .should('have.text', aboutPageData.homeButton);
  });

  it('should display the navigation bar', () => {
    webpage.navigation.logoTitle
      .should('be.visible')
      .should('have.text', navigationData.logoText);
    webpage.navigation.navButtons.should('be.visible');
    webpage.navigation.themeSwitch.should('exist');
  });

  it('should display the footer component', () => {
    webpage.footer.text
      .should('be.visible')
      .should('have.text', footerData.text);
  });
});
