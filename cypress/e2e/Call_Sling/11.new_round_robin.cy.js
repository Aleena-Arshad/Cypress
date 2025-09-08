describe('New Round Robin', () => {
    it('New Round Robin', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        cy.get('.css-u2vdid > .material-icons-outlined').click()

        // Audio Management drop down open
        cy.get('.css-zws9p5 > :nth-child(8) > .MuiBox-root').click()

        // New Round Robin - Sidebar
        cy.get(':nth-child(5) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').click()

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








