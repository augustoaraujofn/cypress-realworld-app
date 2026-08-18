const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com', //configura uma url base, caso queira testar em outros ambientes é so mudar a url
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
