class CreateCompanyPage {

  fillForm() {
    cy.get('input[name="company_name"]').type('Automated Company 1');
    // cy.get('.MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-5.css-2eod68 > div[role="combobox"]#country-select').click().type('Pakistan{enter}');
    cy.get('input[placeholder*="phone number"]').type('3224356789');
    cy.get('input[placeholder="Enter email addresses separated by commas"]').type('user367@gmail.com');
    cy.get('input[name="first_name"]').type('Test1');
    cy.get('input[name="last_name"]').type('Test2');
    cy.get('input[name="website"]').clear().type('https://selenium-python.readthedocs.io/');
    cy.get('textarea[name="address"]').type('123 Test Street');
    cy.get('input[name="city"]').type('Lahore');
    cy.get('input[type="checkbox"]').check({ force: true }); // Daily report
  }

  submitForm() {
    cy.get('button[type="submit"]').click();
  }

}
export default CreateCompanyPage;

// Issue and how did i resolve it:
// Try to use the attributes like above name, textarea etc if not working with classes or ids
