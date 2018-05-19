module.exports = {


  friendlyName: 'View friends',


  description: 'Display "Friends" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/friends/friends'
    }

  },


  fn: async function (inputs, exits) {
console.log(this.req.me)
    // Respond with view.
    return exits.success({
      currentSection: 'friends'
    });

  }


};
