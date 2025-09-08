
describe('Audio Script', () => {
    it('Audio Script', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        cy.get('.css-u2vdid > .material-icons-outlined').click()

        // Audio Management drop down open
        cy.get('.css-zws9p5 > :nth-child(7) > .MuiBox-root').click()

        // Audio Script click
        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(12).click()

        // 3 dots click
        cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-colorPrimary css-15jnehg']").eq(1).click()

        // Delete Script
        cy.get("li[class = 'MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters css-ixk1z0']").click()

        // Edit Script
        cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeSmall MuiButton-textSizeSmall MuiButton-colorPrimary css-1fw57r9']").eq(1).click()

        // Update Name field
        cy.get("input[name = 'name']").type('Test Audio - Updated')

        // Update button click
        cy.get("button[class = 'MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1eznq2t']").click()

        // title match
        cy.get('h4.MuiTypography-h4').should('have.text', 'Audio Scripts')

    });

});

// sometimes try add a part of parent tag class then a pert of child
// cy.get('.css-vchqxc > .MuiButtonBase-root').click()






