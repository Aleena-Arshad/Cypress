
describe('Record Audio - AI', () => {
    it('Record Audio - AI', () => {

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

        // Male Radio button
        cy.get("input[value = 'male']").check().should("be.checked")

        // Select Voice drop down
        cy.get("#voice-select").click()

        // Select Daniel 
        cy.get('[data-value="Daniel"]').click()

        // Script Library click
        cy.get('.MuiSelect-select > .notranslate').click()

        // Select an audio
        cy.get('[data-value="56"]').click()

        // Generate Audio click - (below selector from SelectorGadget)
        cy.get(".css-1eznq2t").click()

        // Save Audio button
        cy.get(".css-1nqjdo").click()
    });

});

// sometimes try add a part of parent tag class then a pert of child
// cy.get('.css-vchqxc > .MuiButtonBase-root').click()






