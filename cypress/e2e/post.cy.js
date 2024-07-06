describe('Post', () => {
  it('render specific post', () => {
    cy.visit('/tdd/get-started-tdd')
    cy.contains('開始使用 TDD 設計模式！')
  })
})
