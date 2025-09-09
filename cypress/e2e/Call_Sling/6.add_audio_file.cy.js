
describe('Audio File', () => {
    it('Audio File', () => {
        cy.callsling_login(); // Only login now
        cy.get('.css-u2vdid > .material-icons-outlined').click() //sidebar open
        // Audio drop down open
        cy.get('.css-zws9p5 > :nth-child(6) > .MuiBox-root').click()
        
        //
        cy.get("span[class = 'MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ikhzef']").eq(10).click()

        cy.get(':nth-child(2) > a > .MuiListItem-root > .MuiBox-root > .MuiListItemText-root > .MuiTypography-root').eq(1).click()

        cy.get('input[name="name"').type("Test Audio File")

        // File Upload Steps
        // 1. Execute command in terminal: npm install --save-dev cypress-file-upload --force
        // 2. Add in commands.js: import 'cypress-file-upload';
        // 3. The file you want to 

        cy.get('input#file-input').attachFile('test_audio_4sec.wav');
        cy.get('button[type="submit"]').click()

    });

});






