describe('Payment Test', () => {
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

	it('should send new payment (fake)', () => {
		let Day = today
		cy.get('#pay_bills_tab').click()
		cy.contains('Pay Saved Payee').click()
		cy.get('#sp_payee').select('wellsfargo')
		cy.get('#sp_account').select('Credit Card')
		cy.get('#sp_amount').type('2000')
		cy.get('#sp_date').type(Day)
		cy.get('.ui-datepicker-current-day > a').click()
		cy.get('#sp_description').type('just a description')
		cy.get('#pay_saved_payees').click()
		
		//alert should be visible
		cy.get('#alert_content')
			.should('be.visible')
			.and('contain', 'The payment was successfully submitted')
	})
})

	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	let yyyy = today.getFullYear();
	
	today = mm + '-' + dd + '-' + yyyy;
	document.write(today);