
describe('All Templates Search', () => {
  it('Create Template', () => {
    cy.callsling_login(); // Only login now
    cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
    cy.get('.css-zws9p5 > :nth-child(5) > .MuiBox-root').click() // Template drop down open
 cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(7).click()

 // below solution is copied from cypress it is also working.   
// cy.get(':nth-child(1) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').eq(1).click()


cy.get("input[placeholder = 'Search...']").type("Text Message Template")

  });

});




