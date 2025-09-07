
describe('Create Voice AI Agent', () => {
    it('Create Voice AI Agente', () => {
        cy.callsling_login(); // Only login now
        cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
        // AI drop down open
        cy.get('.css-zws9p5 > :nth-child(6) > .MuiBox-root').click()
        // New AI Agent page

        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(10).click()

        cy.get(':nth-child(1) > a > .MuiListItem-root > .MuiBox-root').eq(1).click()

        cy.get('.css-8snkcj > .MuiBox-root > :nth-child(2)').click()

        // explore solution below
        // cy.get('div.MuiBox-root css-benwh2').find("button").eq(1).click()


    });

});






