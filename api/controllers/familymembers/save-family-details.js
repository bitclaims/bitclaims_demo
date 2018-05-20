module.exports = {


  friendlyName: 'Save Family Details',


  description: 'Updates the family members arrau',


  inputs: {

    familyList: {
      description: 'The ID of the user to approve as a friend.',
      type: [{
        fullName: 'string',
        age: 'number'
      }]

    }

  },


  exits: {

    notFound: {
      description: 'There is no pending friend request from a user with that ID.',
      responseType: 'notFound'
    },

  },


  fn: async function (inputs, exits) {

console.log(inputs)

    return exits.success();

  }


};
