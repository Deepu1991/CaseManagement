const fs = require("fs");

function getConfigurationByFile(file) {
  const pathToConfigFile = `cypress/config/${file}.json`;

  return fs.readFileSync(pathToConfigFile, "utf-8")
    ? JSON.parse(fs.readFileSync(pathToConfigFile, "utf-8"))
    : {};
}

module.exports = {
  ...(on, config) => {
    const file = config.env.configFile || "env"; // Default to 'env.json'

    return {
      ...config,
      env: {
        ...getConfigurationByFile(file), // Merge with existing Cypress env
      },
    };
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
