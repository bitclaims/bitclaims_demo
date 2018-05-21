/**
 * Dpc.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    Name: {
      type: 'string',
      required: true,
      description: 'Name of Direct Patient Care Plan',
      maxLength: 120,
      example: 'BitClaims Plan'
    },
    
    Description:{
      type: 'string',
      required: true,
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
