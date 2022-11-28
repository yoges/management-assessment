const Joi = require('joi');

module.exports = {

  checkAccess: {
    query: {
      featureName: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  },

  createAccess: {
    body: {
      featureName: Joi.string().required(),
      email: Joi.string().email().required(),
      enable: Joi.boolean().required()
    },
  }
};
