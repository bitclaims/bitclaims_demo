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
    redirect: {
      description: 'Added a family member',
      extendedDescription: 'Redirecting to account page."',
      responseType: 'redirect',
    }
    

  },

// 
fn: async function (inputs, exits) {
//console.log(this.req.me.id)
//console.log(inputs)
// For every member of the family list
for (let member of inputs.familyList) {

  // Stores an existing member ID into the variable
  var existingMember = await FamilyMember.findOne({ id: member.id });

  // If it exists, update the member's full name and age
  if(existingMember){
    await FamilyMember.update({id: member.id }).set({fullName:member.fullName});

    await FamilyMember.update({id: member.id }).set({age:member.age});

  }
  // IF not, then creates a new entry into the database
  else{
    console.log('>creating new user')
    var newMember = await FamilyMember.create({fullName:member.fullName,age:member.age,accountHolder:this.req.me.id}).fetch();
    console.log(newMember)
    // TODO: Add in the redirection to account settings page
  
  }

}
    redirect: '/account';
    return exits.success();
  
  }


};
