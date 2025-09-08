
describe('Templates Creation', () => {
  it('Create Template', () => {
    cy.callsling_login(); // Only login now
    cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
    cy.get('.css-zws9p5 > :nth-child(5) > .MuiBox-root').click() // Template drop down open
    cy.get('[style="min-height: 0px; height: 79px; transition-duration: 300ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click() // new template click

    cy.get('input[name="template_name"]').type('Test Template');
    cy.get('input[name="subject"]').type('Test Subject');
    cy.get("div[class= 'DraftEditor-root']").type("Test Message") // message
    cy.get('label[id="type-select-label"]').click({ force: true }).type("Call Notification Email"); // drop down visible
    cy.get("li[data-value = '7']").click()// click the call option
    cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1eznq2t']").click()



    // using force: true for above drop resolved the issue




  });

});




