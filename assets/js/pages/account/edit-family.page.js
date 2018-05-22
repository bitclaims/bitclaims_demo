parasails.registerPage('edit-family', {
  //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
  //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
  //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝

  data: {

    me:{/* ... */ },

    friends: [],

    familyListFormData: {
      familyList: []
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
      this.familyListFormData.familyList = this.familyList
  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

//important! Add more more button
    clickAddMoreButton: function() {
      this.familyList.push({
        id: '',
        fullName: '',
        age: null,
        accountHolder:this.me.id
      });
    },

    //important! argins sends family members to server
    handleParsingAddFriendsForm: function() {

      console.log('can you handle this?');
      // Clear out any pre-existing error messages.
      this.formErrors = {};

      var argins = _.cloneDeep(this.familyListFormData);
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      // Otherwise, trim out any empty rows before submitting.
      _.remove(argins.familyList, {fullName: ''});
      console.log(argins)
      return argins;
    },

    //important!: reloads page after ajax call
    submittedAddFriendsForm: function() {
      location.reload();
       this.$forceUpdate();
    },

  },
});
