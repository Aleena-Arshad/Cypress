
describe('Create Script', () => {
    it('Create Script - AI', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        cy.get('.css-u2vdid > .material-icons-outlined').click()

        // Audio Management drop down open
        cy.get('.css-zws9p5 > :nth-child(7) > .MuiBox-root').click()

        // Record Audio click
        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(11).click()

        // Input Audio Name
        cy.get("input[name = 'name']").type('Test Audio - AI 22')

        // Radio button - AI Generated
        cy.get("input[value = 'ai']").check().should("be.checked")
        
        // Script Name
       cy.get("input[name='scriptName']").type("Test Script")

       // Script Content
       cy.get("textarea[placeholder='Enter your voice script here...']").type("Hi this is a call greeting")

       // Save Script button
       cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeSmall.MuiButton-containedSizeSmall.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeSmall.MuiButton-containedSizeSmall.MuiButton-colorPrimary.css-19ev8ti").click()
  
    });

});








