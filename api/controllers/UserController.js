/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  create1: async function(req, res) {
    try {
      let result = await User.create(req.allParams()).meta({fetch: true});
      res.send('user created: ' + JSON.stringify(result));
    }
    catch(err) {
      res.negotiate(err);
    }

  },

  create2: async function(req, res) {
    try {
      let result = await User.findOrCreate({email: req.param('email')}, req.allParams());
      res.send('user created: ' + JSON.stringify(result));
    }
    catch(err) {
      res.negotiate(err);
    }

  },

  show: async function(req, res) {
    try {
      let result = await User.find().decrypt();
      res.json(result);
    }
    catch(err) {
      res.negotiate(err);
    }
  },

  showSignup1: function(req, res) {
    res.view('user/signup1');
  },

  showSignup2: function(req, res) {
    res.view('user/signup2');
  },


};
