describe('Conditional testing', () => {
    beforeEach(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Check that if you find Home tab inside Navbar on the page, then click on it and validate (Go to If)', () => {
        cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.get('body').then((body) => {
            if (body.find('.nav').length > 0) {
                cy.get('#homeMenu').click()
            }
            else {
                cy.get('.brand').click()
            }
        })
        cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
    })

    it('Check that if you dont find wronglocator in the page, then click on Online Banking Tab and validate (Go to Else)', () => {
        cy.title().should('eq', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.get('body').then((body) => {
            if (body.find('wrongLocator').length > 0) {
                cy.get('.brand').click()
            }
            else {
                cy.get('#onlineBankingMenu').click()
            }
        })
        cy.title().should('eq', 'Zero - Free Access to Online Banking')
    })
})