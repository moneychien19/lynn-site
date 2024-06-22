describe('Hompage', () => {
  it('render homepage', () => {
    cy.visit('/')
    cy.contains("Lynn's Blog")
  })
  it('click on a post and go to post page', () => {
    cy.visit('/')
    cy.get('h1').first().click()
    cy.url().should('include', '/posts/')
  })
})
