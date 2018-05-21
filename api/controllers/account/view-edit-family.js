module.exports = {


  friendlyName: 'View Family edit ',


  description: 'Display "Change password" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-family'
    },
    redirect: {
      description: 'Added a family member',
      extendedDescription: 'Redirecting to account page."',
      responseType: 'redirect',
    }

  },


  fn: async function (inputs, exits) {
  //console.log(this.req.me.id)
  var familyList = await FamilyMember.find({accountHolder:this.req.me.id});
  
  
  return exits.success({familyList:familyList})

  }


};
