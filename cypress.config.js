const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: 'http://localhost:3000', //configura uma url base, caso queira testar em outros ambientes é so mudar a url
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
