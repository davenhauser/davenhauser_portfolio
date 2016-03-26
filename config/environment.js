var _ = require('lodash');

var localEnvVars = {
  TITLE:      'davenhauser_portfolio',
  SAFE_TITLE: 'davenhauser_portfolio'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);
