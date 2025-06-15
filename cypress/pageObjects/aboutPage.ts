class AboutPage {
  get heading() {
    return cy.get('[aria-label="heading"]');
  }

  get subHeading() {
    return cy.get('[aria-label="sub-heading"]');
  }

  get content() {
    return cy.get('[aria-label="content"]');
  }

  get author() {
    return cy.get('[aria-label="author"]');
  }

  get authorName() {
    return cy.get('[aria-label="author-name"]');
  }

  get authorCompany() {
    return cy.get('[aria-label="author-company"]');
  }

  get goToHome() {
    return cy.get('[aria-label="home-button"]');
  }
}

export default AboutPage;
