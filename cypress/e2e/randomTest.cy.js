describe('Random Test', () => {
	beforeEach(function() {
		cy.visit('http://zero.webappsecurity.com/index.html')
		cy.get('#signin_button').click()
		cy.fixture('user').then(user => {
			const username = user.id
			const password = user.pwd
			cy.get('#user_login').type(username)
			cy.get('#user_password').type(password)
			cy.contains('Sign in').click()
		})
	})

		it('test', () => {
			let random = randomValue()
			cy.get('.search-query').type(random).type('Cypress.io{enter}')
			//re-using random generated value as a string
			let text = random
			cy.get('.search-query').type(text).type('Cypress.io{enter}')
		
		})

		it('test', () => {
		//navigate to specific tab, using specific selectors
			cy.get('.brand').click()
		    cy.get('#onlineBankingMenu').click()
			cy.get('#transfer_funds_link').click()
			cy.get('#pay_bills_tab').click()
			cy.get('.ui-tabs-nav > :nth-child(3) > a').click()
			
		})
})
	

function randomValue() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }