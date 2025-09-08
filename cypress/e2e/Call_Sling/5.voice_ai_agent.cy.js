
describe('Create Voice AI Agent', () => {
    it('Create Voice AI Agent', () => {
        cy.callsling_login(); // Only login now
        cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
        // AI drop down open
        cy.get('.css-zws9p5 > :nth-child(6) > .MuiBox-root').click()
        // New AI Agent page

        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(9).click()

        // Filling Details

        // Agent Name
        cy.get("textarea[name='assistantConfig.identity']").type("Call Sling Agent")

        // Agent Style
        cy.get("textarea[name='assistantConfig.style']").type("Soft, Quick, Problem Solving")

        // Attach CSV
        cy.get('input#csv-upload').attachFile('sample_voice_ai_qa.csv');


        // Campaign drop down open
        cy.xpath("//div[@id='campaign-select']").click({ force: true })
        // Campaign - Aleena Company 1
        cy.get('li[data-value = "33"]').click()
        // Tracking Number click
        cy.get('#tracking-number-select').click()
        cy.get('li[data-value="6"]').click()


        // Create Voice AI Assistant button click
        cy.get('button[class = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1eznq2t"]').click()
    });

});






