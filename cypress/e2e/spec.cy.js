
// describe('empty spec', () => {
  //   it('passes', () => {
    //     cy.visit('https://example.cypress.io')
    //   })
// })

// describe('My First Test', () => {
//   it('Does not do much!', () => {
//     expect(true).to.equal(true)
//   })
// })

// describe('My First Test', () => {
  //   it('Does not do much!', () => {
//     expect(true).to.equal(false)
//   })
// })

// Visit: https://example.cypress.io
// Find the element with content: type
// Click on it
// Get the URL
// Assert it includes: /commands/actions
// Get the input with the action-email class
// Type fake@email.com into the input
// Assert the input reflects the new value

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })

// describe('My First Test', () => {
//   it('clicks the link "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()
//   })
// })

// describe('My First Test', () => {
//   it('clicking "type" navigates to a new url', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')
//   })
// })

// describe('My First Test', () => {
//   it('Gets, types and asserts', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type').click()

//     // Should be on a new URL which
//     // includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify
//     // that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })


/****** MY PRACTICES ********/

describe('first', ()=>{
  it('visit a page',()=>{
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    cy.get('.action-email')
      .type('asd@asd.com', {delay:100})
      .should('have.value','asd@asd.com')

    cy.get('.action-disabled')
    // Ignore error checking prior to type
    // like whether the input is visible or disabled
      .type('disabled area', {force: true})
      .should('have.value', 'disabled area')

    cy.get('.action-focus').focus()
      .should('have.class', 'focus')
      .prev().should('have.attr','style','color: red;')
  })
})

