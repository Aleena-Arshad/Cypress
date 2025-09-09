// describe('New Round Robin', () => {
//     it('New Round Robin', () => {

//         cy.callsling_login(); // Only login now
//         // Sidebar open
//         cy.get("button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-u2vdid'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeMedium css-24hu7a']").click()

//         // Calls drop down open
//         cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(8) > div:nth-child(1)").click()

//         // Round Robin Numbers- Sidebar
//         cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(4) > a:nth-child(1) > li:nth-child(1)").click()

//         // Horizontal Scroll & Click More icon
//         cy.get("button[type='button'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds']").scrollIntoView({ duration: 2000 });
//         cy.get("button[type='button'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds']").should('be.visible').click();

//         // Click Edit
//         cy.get("div[role='presentation'] li:nth-child(1)").click()


//         // Call Recording
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
//         cy.get("input[name='call_recording_enabled']").click()


//         // Call Greeting
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)").click()
//         // enable checkbox
//         cy.get("input[name='call_greeting_enabled']").check().should("be.checked")
//         // Voice Text Radio button
//         cy.get("input[name='greeting_type']").check().should("be.checked")
//         // Input message
//         cy.get("#voice_text_message").type("Hi. This is a test round robin call greeting.")
//         // Select Voice - female
//         cy.get("input[value='f'][name='voice_gender']").click()


//         // Whisper Message
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)").click()
//         // enable checkbox
//         cy.get("div[class='MuiBox-root css-benwh2'] input[type='checkbox']").check().should("be.checked")
//         // Voice Text Radio button 
//         cy.get("input[value='text']").click()
//         // Input message
//         cy.get("#whisper_message_greeting_text").type("Hi. This is a test round robin whisper message")
//         // Select Voice - female
//         cy.get("input[value='f'][name='whisper_voice_gender']").click()


//         // Caller ID
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)").click()
//         // Tracking Number - Radio button
//         cy.get("input[value='tracking_number']").click()


//         // Email Alerts
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1)").click()
//         // Select Every Call - Radio button
//         cy.get("input[value='every_call'][name='email_alert_type']").click()
//         // Input Email
//         cy.get("input[name= 'email_alert_email_recipients']").type("aleena.arshad@brainxtech.com")
//         // Open Email Alerts drop down
//         cy.get("#email-alert-template-select").click()
//         // Email Alert drop down - Select
//         cy.get("li:nth-child(1) p:nth-child(1)").click()


//         // Text Message Alerts
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1)").click()
//         // Select Every Call - Radio button
//         cy.get("input[value='every_call'][name='sms_alert_type']").click()
//         // Country dro down
//         cy.get("#country-select").click()
//         // Click Pakistan 
//         cy.get('li[data-value = "PK"]').click()
//        // Input number
//         cy.get('input[type = "tel"]').type("3114567898")
//         // Text Message Template click
//         cy.get(".MuiBox-root.css-116l0ti").click()
//         // Text Message Template - Select
//         cy.get("li[role='option']").click()


//         // Call Options
//         cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1)").click()
//         // Call Routing - Simultaneous
//         cy.get("input[value='simultaneous']").click()
//         // Cap enable
//         cy.get("input[name='call_limit_enabled']").check().should("be.checked")
//         // CAP Amount
//         cy.get("#campaign_caps_1").type("1")

// Save Changes button
// cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-1eznq2t").click()


//     });

// });
// above code is for one go run



describe('New Round Robin', () => {

    beforeEach(() => {
        cy.callsling_login(); // Only login now

        // Sidebar open
        cy.get("button[class='MuiButtonBase-root MuiIconButton-root MuiIconButton-colorInherit MuiIconButton-sizeSmall css-u2vdid'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeMedium css-24hu7a']").click()

        // Calls drop down open
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(8) > div:nth-child(1)").click()

        // Round Robin Numbers- Sidebar
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(3) > div:nth-child(8) > div:nth-child(1) > div:nth-child(1) > ul:nth-child(4) > a:nth-child(1) > li:nth-child(1)").click()

        // Horizontal Scroll & Click More icon
        cy.get("button[type='button'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds']").scrollIntoView({ duration: 2000 });
        cy.get("button[type='button'] span[class='material-icons-outlined notranslate MuiIcon-root MuiIcon-fontSizeInherit css-6m0tds']").should('be.visible').click();

        // Click Edit
        cy.get("div[role='presentation'] li:nth-child(1)").click()
    });

    afterEach(() => {
        // Save Changes
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary.MuiButton-sizeMedium.MuiButton-containedSizeMedium.MuiButton-colorPrimary.css-1eznq2t").click()
    });

    it('Call Recording', () => {
        // Call Recording
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1)").click()
        cy.get("input[name='call_recording_enabled']").click()
    });

    it('Call Greeting', () => {
        // Call Greeting
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1)").click()
        // enable checkbox
        cy.get("input[name='call_greeting_enabled']").check().should("be.checked")
        // Voice Text Radio button
        cy.get("input[name='greeting_type']").check().should("be.checked")
        // Input message
        cy.get("#voice_text_message").type("Hi. This is a test round robin call greeting.")
        // Select Voice - female
        cy.get("input[value='f'][name='voice_gender']").click()
    });

    it('Whisper Message', () => {
        // Whisper Message
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1)").click()
        // enable checkbox
        cy.get("div[class='MuiBox-root css-benwh2'] input[type='checkbox']").check().should("be.checked")
        // Voice Text Radio button 
        cy.get("input[value='text']").click()
        // Input message
        cy.get("#whisper_message_greeting_text").type("Hi. This is a test round robin whisper message")
        // Select Voice - female
        cy.get("input[value='f'][name='whisper_voice_gender']").click()
    });

    it('Caller ID', () => {
        // Caller ID
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1)").click()
        // Tracking Number - Radio button
        cy.get("input[value='tracking_number']").click()
    });

    it('Email Alerts', () => {
        // Email Alerts
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(6) > div:nth-child(1)").click()
        // Select Every Call - Radio button
        cy.get("input[value='every_call'][name='email_alert_type']").click()
        // Input Email
        cy.get("input[name= 'email_alert_email_recipients']").type("aleena.arshad@brainxtech.com")
        // Open Email Alerts drop down
        cy.get("#email-alert-template-select").click()
        // Email Alert drop down - Select
        cy.get("li:nth-child(1) p:nth-child(1)").click()
    });

    it('Text Message Alerts', () => {
        // Text Message Alerts
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(7) > div:nth-child(1)").click()
        // Select Every Call - Radio button
        cy.get("input[value='every_call'][name='sms_alert_type']").click()
        // Country dro down
        cy.get("#country-select").click()
        // Click Pakistan 
        cy.get('li[data-value = "PK"]').click()
        // Input number
        cy.get('input[type = "tel"]').type("3114567898")
        // Text Message Template click
        cy.get(".MuiBox-root.css-116l0ti").click()
        // Text Message Template - Select
        cy.get("li[role='option']").click()
    });

    it('Call Options', () => {
        // Call Options
        cy.get("body > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(8) > div:nth-child(1)").click()
        // Call Routing - Simultaneous
        cy.get("input[value='simultaneous']").click()
        // Cap enable
        cy.get("input[name='call_limit_enabled']").check().should("be.checked")
        // CAP Amount
        cy.get("#campaign_caps_1").type("1")
    });



});



