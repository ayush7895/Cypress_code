
describe('Launching the application', () => {
    it('Launch the test application', ()=> {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type('Ayush')
    cy.get("input[id='customer.lastName']").type('Sharma')
    cy.get("input[id='customer.address.street']").type('Mint colony')
    cy.get("input[id='customer.address.city']").type('noida')
    cy.get("input[id='customer.address.state']").type('UP')
    cy.get("input[id='customer.address.zipCode']").type('210458')
    cy.get("input[id='customer.phoneNumber']").type('0255488988')
    cy.get("input[id='customer.ssn']").type('788')
    cy.get("input[id='customer.username']").type('ayush020697@gmail.com')
    cy.get("input[id='customer.password']").type('test123@')
    cy.get("input[id='repeatedPassword']").type('test123@')
    cy.get("[colspan='2'] > .button").click()   
    cy.get("span [id='customer.username.errors']").contains('This username already exists.')


  })
})