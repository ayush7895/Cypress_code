describe('Login the application', () => {
    it('Login the test application', ()=> {
     cy.visit( 'https://parabank.parasoft.com/parabank/index.htm')
     cy.get( '#loginPanel > form > div:nth-child(2) > input').type('hsgghhs789')
     cy.get('#loginPanel > form > div:nth-child(4) > input').type('test123@')
     cy.get(':nth-child(5) > .button').click()
     cy.get('#accountTable > tbody > tr.ng-scope > td:nth-child(1) > a').click()
     cy.get('#month').select(1)
     cy.get('#transactionType').select('Credit')
     cy.get(':nth-child(3) > :nth-child(2) > .button').click()
    }


    )}
    
    )