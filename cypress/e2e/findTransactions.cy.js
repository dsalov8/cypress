describe('Find Transaction Test', () => {
	before(function() {
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

	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
		cy.get('button[type="submit"]').click()
	})

	it('should display results', () => {
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr')
			.its('length')
			.should('be.gt', 0)
	})
})