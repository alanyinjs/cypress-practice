describe('App initialisation', () => {
  it('Displays todos from API on load', () => {
    cy.seedAndVisit();
    cy.get('.todo-list li').should('have.length', 4);
  });
});