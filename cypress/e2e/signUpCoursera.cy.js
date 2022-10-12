// E2E Sign Up test

describe ('Coursera Sign Up', function() {
})

// opening Coursera main page
it('should open Coursera website', function() {

  cy.visit('https://www.coursera.org/')
  cy.url().should('include', 'coursera')

})

// creating account with randomly generated email address

it('should create a new account with randomly generated email address', function() {
 
  let randomEmail = makeEmail()
  let randomName = randomUsername()

  cy.get('[data-e2e="header-signup-button"]').click()
  cy.get('#name').type(randomName)
  cy.get('#email').type(randomEmail)
  cy.get('#password').type("lozinka123test")
  cy.get('[data-e2e="signup-form-submit-button"]').click()  

})


function makeEmail () {

  let strValues = "abdefgh" 
  let strEmail = "";
  let strTmp;
  for (let i = 0; i < 8; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = "";
  strEmail = strEmail + "@";
  for (let j = 0; j < 3; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + ".com"
  return strEmail;
  }

// Generating Public Name
  function randomUsername() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }