describe('Campaigns', () => {

  it('New Campaign', () => {
    cy.callsling_login(); // Only login now

    cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
    cy.get(':nth-child(4) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click()

  });

});
