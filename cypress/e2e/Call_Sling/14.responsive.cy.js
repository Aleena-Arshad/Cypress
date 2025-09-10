describe('New Tracking Number - Responsive', () => {
    const devices = ['iphone-8', ,'iphone-x','samsung-s10', , 'ipad-mini', 'ipad-2']; // add more if needed

    devices.forEach((device) => {
        it(`New Tracking Number on ${device}`, () => {
            cy.viewport(device); // Set viewport for current device
            // cy.viewport(1280, 720) // Can use custom sizes

            cy.callsling_login(); // Only login now

            // Sidebar open
            cy.get('.css-u2vdid > .material-icons-outlined').click();

            // Audio Management drop down open
            cy.get('.css-zws9p5 > :nth-child(8) > .MuiBox-root').click();

            // New Tracking Number - Sidebar
            cy.get('.css-1tif6jg >.css-xdiy5h > .css-ikhzef').eq(2).click();

            // Country drop down open
            cy.get('#country-select').click();

            // Click Pakistan 
            cy.get('li[data-value = "PK"]').click();

            // Input number
            cy.get('input[type = "tel"]').type("3114567898");

            // Area Code  
            cy.get('input[name = "area_code"]').type("311");

            // Click Campaign drop down
            cy.get('div[id = "mui-component-select-campaign_id"]').click();

            // Click Tracking Number Campaign 3
            cy.get('li[data-value="36"]').click();

            // Button Search For Tracking Number - click
            cy.get('button[class = "MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-colorPrimary css-1qo7x54"]').click();
        });
    });
});
