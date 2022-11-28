const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/controller');
const router = express.Router();
const {
    checkAccess,
    createAccess,
} = require('../validations/validation');

router.route('/feature')
      .get(validate(checkAccess),controller.get)
      .post(validate(createAccess),controller.create);

module.exports = router;
