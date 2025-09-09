describe('New Round Robin', () => {
    it('New Round Robin', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        // cy.get('.css-u2vdid > .material-icons-outlined').click() // correct from cypress
        cy.get("button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-u2vdid'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeMedium css-24hu7a']").click()


        // Calls drop down open
        // cy.get('.css-zws9p5 > :nth-child(8) > .MuiBox-root').click() // correct from cypress
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(8) > div:nth-child(1)").click()

        // New Round Robin - Sidebar
        // cy.get(':nth-child(5) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click() // correct from cypress
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(5) > a:nth-child(1) > li:nth-child(1) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1)").click()
      
        // Round Robin Name
        cy.get("input[name = 'name']").type('Test Round Robin')

        // Country drop down open
        cy.get('#country-select').click()

        // Click Pakistan 
        cy.get('li[data-value = "PK"]').click()

        // Input number
        cy.get('input[type = "tel"]').type("3114567898")

        // Area Code  
        cy.get('input[name = "area_code"]').type("311")

        // Button Search For Numbers - click
        cy.get('button[class = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1qo7x54"]').click()



    });

});








