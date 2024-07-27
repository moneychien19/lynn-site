describe('Post', () => {
  it('render specific post', () => {
    cy.visit('/tdd/get-started-tdd')
    cy.contains('開始在 JavaScript 中使用 TDD 設計模式！')
  })
})
