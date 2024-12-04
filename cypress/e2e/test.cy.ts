describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the header', () => {
    cy.get('app-header').should('be.visible');
  });

  it('should filter trips by name', () => {
    cy.get('input[type=text]').type('Rome');
    cy.get('button[type=submit]').click();
    cy.get('app-trips-list-card').each(($el) => {
      cy.wrap($el).contains('Rome');
    });
  });

  it('should clear filters', () => {
    cy.get('input[type=text]').type('Rome');
    cy.get('button[type="submit"]').click();
    cy.get('#clear').click();
    cy.get('input[type=text]').should('have.value', '');
    cy.get('select[formControlName="sortBy"]').should('have.value', null);
    cy.get('input[formControlName="sortOrder"]').should('be.checked');
  });
});
