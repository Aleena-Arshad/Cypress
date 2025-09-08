
describe('Create Voice AI Agent', () => {
    it('Create Voice AI Agente', () => {

        cy.callsling_login(); // Only login now
        // Sidebar open
        cy.get('.css-u2vdid > .material-icons-outlined').click()

        // Audio Management drop down open
        cy.get('.css-zws9p5 > :nth-child(7) > .MuiBox-root').click()




    });

});

// sometimes try add a part of parent tag class then a pert of child
// cy.get('.css-vchqxc > .MuiButtonBase-root').click()






