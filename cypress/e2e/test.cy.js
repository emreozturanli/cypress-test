it('visit google - find svalbard on maps', ()=>{
  cy.visit('https://www.google.com/')
  cy.get('.gLFyf')
    .type('svalbard{enter}', {delay:200})
    .wait(5000)
  cy.contains('Haritalar')
    .click()
  
})