class Navigation {
  get logoTitle() {
    return cy.get('[aria-label="logo-title"]');
  }

  get navButtons() {
    return cy.get('[aria-label="navigation-buttons"]');
  }

  get themeSwitch() {
    return cy.get('[aria-label="theme-switch"]');
  }

  public navPage(page: string) {
    return cy.get(`[aria-label="${page}-nav"]`);
  }
}

export default Navigation;
