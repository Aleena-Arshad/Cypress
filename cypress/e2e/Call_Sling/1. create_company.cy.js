import CreateCompanyPage from '../../../PageObjects_CallSling/create_company';

describe('Company Creation', () => {
  it('Company Creation', () => {
    cy.callsling_login(); // Only login now
    cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
    cy.get(':nth-child(2) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click()
    // Fill the form via POM
    const createCompany = new CreateCompanyPage();
    createCompany.fillForm();
    createCompany.submitForm();

    // Create Campaign
    cy.get('button[type="submit"]').click();
  });


});


// Major issue & its solution:
// I was calling the custom login command in seperate it block which is why 
// i was getting an error.



