parasails.registerPage('edit-dpc', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝

  data: {

    me:{/* ... */ },

    dpc: [],

    dpcListFormData: {
      dpcList: []
      },
    // The "virtual" portion of the URL which is managed by this page script.


    // Form data


    // For tracking client-side validation errors in our form.
    // > Has property set to `true` for each invalid property in `addFriendsFormData`.
    formErrors: { /* … */ },

    // Syncing / loading state
    syncing: false,

    // Server error state
    cloudError: '',

    // Success state when form has been submitted
    cloudSuccess: false,

    selectedFriend: undefined,
    confirmRemoveFriendModalOpen: false,
  },





  //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
  //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
  //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
  beforeMount: function() {
    // Attach any initial data from the server.
    _.extend(this, SAILS_LOCALS);
    //data from vue dev tools
      this.dpcListFormData.dpcList = this.dpcList
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

//important! Add more more button
// Data information about user or family??
    clickAddMoreButton: function() {
      this.dpcList.push({
        id: '',
        planName: '',
        Description:'',
        numberPatients:null,
        numberStaff: null,
        priceFamMem: null,
        upfrontPayment: null,
        discountYearlyUpfront: null,
        daysHours:'',
        billSched:'',
        accountHolder:this.me.id
      });
    },

    //important! argins sends family members to server
    handleParsingAddDpcForm: function() {

      console.log('can you handle this?');
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = _.cloneDeep(this.dpcListFormData);
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      // Otherwise, trim out any empty rows before submitting.
      //fullName or planName?
      _.remove(argins.dpcList, {planName: ''});
      console.log(argins)
      return argins;
    },

    //important!: reloads page after ajax call
    submittedAddDpcForm: function() {
      location.reload();
       this.$forceUpdate();
    },

  },
});
