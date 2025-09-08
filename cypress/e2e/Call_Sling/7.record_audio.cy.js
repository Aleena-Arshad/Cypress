
describe('Create Voice AI Agent', () => {
    it('Create Voice AI Agente', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        cy.get('.css-u2vdid > .material-icons-outlined').click()

        // Audio Management drop down open
        cy.get('.css-zws9p5 > :nth-child(7) > .MuiBox-root').click()

        // Record Audio click
        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(11).click()

        // Input Audio Name
        cy.get("input[name = 'name']").type('Test Audio - Self')

        // Click Record button
        cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1eznq2t']").click()

        cy.wait(4000) // Record for 3 seconds

        // Click Stop button
        // sometimes try add a part of parent tag class then a pert of child
        cy.get('.css-vchqxc > .MuiButtonBase-root').click()

        // Click Save Audio button
        cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1eznq2t']").click()

    });

});

// sometimes try add a part of parent tag class then a pert of child
// cy.get('.css-vchqxc > .MuiButtonBase-root').click()






