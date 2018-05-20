
var ark = require("arkjs");
module.exports = {


  friendlyName: 'Create Wallet',


  description: 'Update the profile for the logged-in user.',


  inputs: {



  },


  exits: {

    emailAlreadyInUse: {
      statusCode: 409,
      description: 'The provided email address is already in use.',
    },

  },


  fn: async function (inputs, exits) {
    var keys = ark.crypto.getKeys("passphrase");

    console.log(keys.publicKey);
    var address = ark.crypto.getAddress(keys.publicKey);

    console.log("> new address generated!: " + address);

    exits.success()

  }


};
