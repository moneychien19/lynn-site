describe('Hompage', () => {
  it('render homepage', () => {
    cy.visit('/')
    cy.contains("Lynn's Blog")
  })
  it('go to specific collection page', () => {
    cy.visit('/')
    cy.get('a#list-item[href="/tdd"]').click()
    cy.url().should('include', '/tdd')
  })
})
