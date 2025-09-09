describe('New Round Robin', () => {
    it('New Round Robin', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        // cy.get('.css-u2vdid > .material-icons-outlined').click() // correct from cypress
        cy.get("button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-u2vdid'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeMedium css-24hu7a']").click()


        // Audio Management drop down open
        // cy.get('.css-zws9p5 > :nth-child(8) > .MuiBox-root').click() // correct from cypress
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(8) > div:nth-child(1)").click()

        // Round Robin Numbers- Sidebar
        cy.get("div[class='MuiBox-root css-pkxdv5'] span[class='MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").click()

    });

});








