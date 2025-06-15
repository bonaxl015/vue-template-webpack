class HomePage {
  get container() {
    return cy.get('[aria-label="home-page"]');
  }

  get heading() {
    return cy.get('[aria-label="heading"]');
  }

  get subHeading() {
    return cy.get('[aria-label="sub-heading"]');
  }

  get imageLogo() {
    return cy.get('[aria-label="vue-logo"]');
  }

  public libraryItem(name: string) {
    return cy.get(`.library-list-${name}`);
  }
}

export default HomePage;
