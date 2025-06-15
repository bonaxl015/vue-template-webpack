import webpage from '../../pageObjects';
import { homePageData } from '../../fixtures/homePage';
import { footerData } from '../../fixtures/footer';
import { navigationData } from '../../fixtures/navigation';

describe('When I open the webpage initially', () => {
  beforeEach(() => {
    cy.loadWebsite();
  });

  it('should display the home page by default', () => {
    webpage.homePage.container.should('be.visible');
    webpage.homePage.imageLogo.should('be.visible');
    webpage.homePage.heading
      .should('be.visible')
      .should('have.text', homePageData.headingText);
    webpage.homePage.subHeading
      .should('be.visible')
      .should('have.text', homePageData.subHeadingText);

    homePageData.libraryList.forEach((item) => {
      webpage.homePage.libraryItem(item).should('be.visible');
    });
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
