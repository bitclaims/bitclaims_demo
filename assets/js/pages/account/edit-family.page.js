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
      console.log(this);

      this.familyListFormData.familyList = this.familyList

  },

  //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
  //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
  //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
  methods: {

    clickInviteButton: function() {
      // Open the modal.
      this.goto('/friends/new');
    },

    _clearAddFriendsModal: function() {


      this.formErrors = {};
      this.cloudError = '';
    },

    closeAddFriendsModal: function() {
      this._clearAddFriendsModal();
    },

    clickAddMoreButton: function() {
      this.familyList.push({
        id: '',
        fullName: '',
        age: null,
        accountHolder:this.me.id
      });
    },

    handleParsingAddFriendsForm: function() {
      console.log('can you handle this?');
      // Clear out any pre-existing error messages.
      this.formErrors = {};
      console.log(this.familyListFormData)
      var argins = _.cloneDeep(this.familyListFormData);
      console.log(argins)
      // Check whether there are any rows with a name but not an email.

      // var hasAtLeastOneInvalidFriend = !_.isUndefined(_.find(argins.friends, (friend)=> {
      //   if((friend.fullName !== '' || friend.emailAddress !== '') && !isValidEmailAddress(friend.emailAddress)) {
      //     return true;
      //   }
      //   return false;
      // }));
      //
      // if(hasAtLeastOneInvalidFriend) {
      //   this.formErrors.friends = true;
      //   return;
      // }

      // If there were any issues, they've already now been communicated to the user,
      // so simply return undefined.  (This signifies that the submission should be
      // cancelled.)
      if (Object.keys(this.formErrors).length > 0) {
        return;
      }

      // Otherwise, trim out any empty rows before submitting.
      _.remove(argins.familyList, {fullName: ''});
      console.log(argins)
      return argins;
    },

    submittedAddFriendsForm: function() {
      // var invitedFriends = _.filter(this.familyListFormData.familyList, (friend)=>{
      //   return friend.fullName !== '' && friend.emailAddress !== '';
      // });
      // console.log('invited friends:',invitedFriends);
      // Add the new friends to the requests list
      console.log('after')
location.reload();
       this.$forceUpdate();

    },

    clickRemoveFriend: function(friendId) {
      this.selectedFriend = _.find(this.me.friends, {id: friendId});
      console.log('selectedFriend',this.selectedFriend);

      // Open the modal.
      this.confirmRemoveFriendModalOpen = true;
    },

    closeRemoveFriendModal: function() {
      this.selectedFriend = undefined;
      this.confirmRemoveFriendModalOpen = false;
      this.cloudError = '';
    },

    handleParsingRemoveFriendForm: function() {
      return {
        id: this.selectedFriend.id
      };
    },

    submittedRemoveFriendForm: function() {

      // Remove this user from our friends list.
      _.remove(this.me.friends, {id: this.selectedFriend.id});

      // Close the modal.
      this.selectedFriend = undefined;
      this.confirmRemoveFriendModalOpen = false;
      this.cloudError = '';
    },

    clickApproveFriend: async function(userId) {
      // Prevent double-posting
      if(this.syncing) {
        return;
      }
      this.syncing = true;
      await Cloud.approveFriend.with({ id: userId });
      // Add this user to our approved friends list.
      var approvedFriend =_.find(this.me.inboundFriendRequests, {id: userId});
      this.me.friends.unshift({
        id: approvedFriend.id,
        fullName: approvedFriend.fullName,
        emailAddress: approvedFriend.emailAddress
      });
      // Remove this user from our friends list.
      _.remove(this.me.inboundFriendRequests, {id: userId});
      // Clear loading state
      this.syncing = false;
    },
  },
});
