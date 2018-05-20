module.exports = {


  friendlyName: 'Save Family Details',


  description: 'Updates the family members arrau',


  inputs: {

    familyList: {
      description: 'The ID of the user to approve as a friend.',
      type: [{
        fullName: 'string',
        age: 'number',
        accountHolder: "string",
        id:"string"
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
console.log(this.req.me.id)
console.log(inputs)
for (let member of inputs.familyList) {

  var existingMember = await FamilyMember.findOne({ id: member.id });

  if(existingMember){
    await FamilyMember.update({id: member.id }).set({fullName:member.fullName});

    await FamilyMember.update({id: member.id }).set({age:member.age});

  }
  else{
    console.log('>creating new user')
    var newMember = await FamilyMember.create({fullName:member.fullName,age:member.age,accountHolder:this.req.me.id}).fetch();
    console.log(newMember)

  }

}


    return exits.success();

  }


};
