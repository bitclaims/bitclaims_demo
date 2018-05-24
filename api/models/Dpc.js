

 /*
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    planName: {
      type: 'string',
      required: true,
      description: 'Name of Direct Patient Care Plan',
      maxLength: 120,
      example: 'BitClaims Plan'
    },
    
    Description:{
      type: 'string',
      description: 'Description of Direct PAtient Care Plan',
      maxLength: 120,
      example: 'Entials pro-bono surgeries'
    },

    numberPatients:{
      type: 'number',
      description: 'Number of patients',
      example: 300
    },
    numberStaff:{
      type: 'number',
      description: 'Number of Staff',
      example: 300
    },
    priceFamMem:{
      type: 'number',
      description: 'Price per family member',
      example: 300
    },
    upfrontPayment:{
      type: 'number',
      description: 'upfront payment',
      example: 300
    },
    discountYearlyUpfront:{
      type: 'number',
      description: 'Discount for yearly upfront payment',
      example: 300
    },
    daysHours:{
      type: 'string',
      description: 'Days and Hours of Plan',
      maxLength: 120,
      example: 'Monday: 10am - 6pm'
    },
    billSched:{
      type: 'string',
      description: 'Billing schedule',
      maxLength: 120,
      example: 'Monday at 6am'
    },
    
    
    //Days and hours of operation
    //billing schedule

    //
    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
    accountHolder: { model: 'User', description: 'The account this dpc plan belongs to' },

  },

};

