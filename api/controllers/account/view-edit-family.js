module.exports = {


  friendlyName: 'View Family edit ',


  description: 'Display "Change password" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-family'
    }

  },


  fn: async function (inputs, exits) {

    return exits.success();

  }


};
