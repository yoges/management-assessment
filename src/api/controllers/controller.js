const httpStatus = require('http-status');
const UserAccess = require('../models/userAccess.model');

exports.get = async (req, res, next) => {
  try {
    let {
          featureName,
          email
        } = req.query
    const canAccess = await UserAccess.findOne({
      "featureName": featureName,
      "email": email,
    }).exec();
    res.status(httpStatus.OK)
    res.json({
      "canAccess": canAccess?.enable ? canAccess.enable : false
    })
  } catch (error) {
    return next(error);
  }
};

exports.create = async (req, res, next) => {
  let { featureName,
        email,
        enable
      } = req.body
  
  try {
    const duplicate = await UserAccess.findOne({
      "featureName": featureName,
      "email": email,
    }).exec();
    if (duplicate) {
      duplicate.enable = enable;
      duplicate.save(function (err, result) {
        if (err){
          res.status(httpStatus.NOT_MODIFIED)
          res.json();
        }
        else{
          res.status(httpStatus.OK)
          res.json();
        }
      })   
    } else {
      var new_access = new UserAccess({
        "featureName": featureName,
        "email": email,
        "enable": enable
      })
      
      new_access.save(function (err, result) {
          if (err){
            res.status(httpStatus.NOT_MODIFIED)
            res.json();
          }
          else{
            res.status(httpStatus.OK)
            res.json();
          }
        })      
      }      
    } catch (error) {
      return next(error);
    }
};