const mongoose = require('mongoose');

const userAccessSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    trim: true,
  },
  "featureName": {
    type: String,
    maxlength: 128,
    trim: true,
    required: true
  },
  "enable": {
    type: Boolean,
    required: true
  }
},
{
  timestamps: true,
  collection: 'useraccess'
});

const userAccess = mongoose.model('useraccess', userAccessSchema);

module.exports = userAccess;