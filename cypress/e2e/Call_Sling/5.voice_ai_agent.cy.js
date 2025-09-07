
describe('Create Voice AI Agent', () => {
    it('Create Voice AI Agente', () => {
        cy.callsling_login(); // Only login now
        cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
        // AI drop down open
        cy.get('.css-zws9p5 > :nth-child(6) > .MuiBox-root').click()
        // New AI Agent page

        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(9).click()

        // below sxolution is copied from cypress it is also working.   
        // cy.get('[style="min-height: 0px; height: 79px; transition-duration: 300ms;"] > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > :nth-child(2) > a > .MuiListItem-root > .MuiBox-root').click()

        // Filling Details
        //   cy.get("div[id ='campaign-select']").click();
        cy.get('#campaign-select').click({ force: true })


    });

});






