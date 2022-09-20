import AgeCounter from './AgeCounter'

//test to see if component is mounting or not
describe('<Stepper>', () => {

  // Set up some constants for the selectors
  const counterSelector = '[data-cy=counter]'
  const incrementSelector = '[aria-label=increment]'
  const decrementSelector = '[aria-label=decrement]'
  
  it('clicking + fires a change event with the incremented value', () => {
    // Arrange
    const onChangeSpy = cy.spy().as('onChangeSpy')
    cy.mount(<AgeCounter onChange={onChangeSpy} />)
    // Act
    cy.get(incrementSelector).click()
    // Assert
    cy.get('@onChangeSpy').should('have.been.calledWith', 1)
  })
})

// We're aliasing the spy with cy.as('onChangeSpy') so that the Cypress Reporter prints out the name of the spy any time it is invoked. This lets you visually inspect the arguments of the emitted event in your browser. We are also able to acesss the spy by name later.