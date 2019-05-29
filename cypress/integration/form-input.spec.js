describe('Form Input', () => {
  beforeEach(() => {
    cy.seedAndVisit([]);
  });

  it('Focuses the input on load', () => {
    cy.focused()
      .should('have.class', 'new-todo');
  });

  it('Accepts input', () => {
    cy.get('.new-todo')
      .type('New Todo')
      .should('have.value', 'New Todo');
  });
});