// Create test case here
describe('example 2', function() {

  it('Demo 2 - iphoneXSmax', function() {
    // Set viewport size
    cy.viewport(414, 896)
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
  it('Demo 2 - iphoneX', function() {
    // Set viewport size
    cy.viewport(375, 812)
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
  it('Demo 2 - iphone6+', function() {
    // Set viewport size
    cy.viewport('iphone-6+')
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
  it('Demo 2 - iphone6', function() {
    // Set viewport size
    cy.viewport('iphone-6')
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
  it('Demo 2 - iphone5', function() {
    // Set viewport size
    cy.viewport('iphone-5')
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
  it('Demo 2 - iphone4', function() {
    // Set viewport size
    cy.viewport('iphone-4')
    cy.visit('http://saatanaan.fi/')
    // cy.screenshot()
    cy.log('Success!')
  })
})