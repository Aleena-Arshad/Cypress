// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   reporter: 'cypress-mochawesome-reporter', // for gen HTML reports
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       // Video 20 - HTML Reports
//       require('cypress-mochawesome-reporter/plugin')(on); // for HTML reports
//     },

//   },
// });


// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here if needed
//     },
//     baseUrl: 'https://staging.cblevelup.com/login', // You can update this as needed
//   },
// });

// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

// Uncomment below for without mocha reporter
// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here if needed
//     },
//     baseUrl: 'https://callsling-dev.brainxdemo.com/api#/authentication/sign-in/basic', // You can update this as needed
//   },
// });

// level up base url: https://staging.cblevelup.com/login





const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // for Mochawesome HTML reports
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://callsling-dev.brainxdemo.com/api#/authentication/sign-in/basic', 
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
});
