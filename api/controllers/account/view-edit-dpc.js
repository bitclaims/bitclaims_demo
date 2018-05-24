module.exports = {


  friendlyName: 'View Dpc edit ',


  description: 'Display "Change password" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/edit-dpc'
    },
    redirect: {
      description: 'Added a dpc plan',
      extendedDescription: 'Redirecting to account page."',
      responseType: 'redirect',
    }

  },


  fn: async function (inputs, exits) {
  //console.log(this.req.me.id)
  var dpcList = await Dpc.find({accountHolder:this.req.me.id});
  
  
  return exits.success({dpcList:dpcList})

  }


};
