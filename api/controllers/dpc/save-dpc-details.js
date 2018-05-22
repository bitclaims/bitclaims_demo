module.exports = {


  friendlyName: 'Save Dpc Details',


  description: 'Updates the dpc list information',


  inputs: {

    dpcList: {
      description: 'The ID of the user to approve as a DPC.',
      type: [{
        planName: 'string',
        Description: 'string',
        numberPatients: 'number',
        numberStaff: 'number',
        priceFamMem: 'number',
        upfrontPayment: 'number',
        discountYearlyUpfront: 'number',
        accountHolder: "string",
        daysHours: 'string',
        billSched: 'string',
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
      description: 'Added a Dpc member',
      extendedDescription: 'Redirecting to account page."',
      responseType: 'redirect',
    }
    

  },

// 
fn: async function (inputs, exits) {
//console.log(this.req.me.id)
//console.log(inputs)
// For every member of the family list
for (let member of inputs.dpcList) {

  // Stores an existing member ID into the variable
  var existingDpc = await Dpc.findOne({ id: member.id });

  // If it exists, update the member's full name and age
  if(existingDpc){
    await Dpc.update({id: member.id }).set({planName:member.planName});

    await Dpc.update({id: member.id }).set({Description:member.Description});

    await Dpc.update({id: member.id }).set({numberPatients:member.numberPatients});

    await Dpc.update({id: member.id }).set({numberStaff:member.numberStaff});

    await Dpc.update({id: member.id }).set({priceFamMem:member.priceFamMem});

    await Dpc.update({id: member.id }).set({upfrontPayment:member.upfrontPayment});

    await Dpc.update({id: member.id }).set({discountYearlyUpfront:member.discountYearlyUpfront});

    await Dpc.update({id: member.id }).set({daysHours:member.daysHours});

    await Dpc.update({id: member.id }).set({billSched:member.billSched});

  }
  // IF not, then creates a new entry into the database
  else{
    console.log('>creating new DPC plan')
    var newMember = await Dpc.create({planName:member.planName,Description:member.Description, numberPatients: member.numberPatients, numberStaff: member.numberStaff, priceFamMem: member.priceFamMem, upfrontPayment: member.upfrontPayment, discountYearlyUpfront: member.discountYearlyUpfront, daysHours: member.daysHours, billSched: member.billSched, accountHolder:this.req.me.id}).fetch();
    console.log(newMember)
    // TODO: Add in the redirection to account settings page
  
  }

}
    redirect: '/account';
    return exits.success();
  
  }


};

