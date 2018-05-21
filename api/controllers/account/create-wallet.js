// require the ark js module so we can use ark operations
var ark = require("arkjs");
var bip39 = require('bip39');

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

    // Generate a random mnemonic (uses crypto.randomBytes under the hood), defaults to 128-bits of entropy
    var mnemonic = bip39.generateMnemonic();
    // => 'seed sock milk update focus rotate barely fade car face mechanic mercy'

    console.log(mnemonic);

    //generate keys based on a password string YOU decide
    var keys = ark.crypto.getKeys("passphrase");

    console.log(keys.publicKey);



    //use your public to generate a public address
    var address = ark.crypto.getAddress(keys.publicKey);

    console.log("> new address generated!: " + address);

    exits.success()

  }


};
