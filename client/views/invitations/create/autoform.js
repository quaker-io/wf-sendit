AutoForm.addHooks("createInvitationForm", {
  onSuccess: function (formType, invitationId) {
    // Send the invitation emails
    Meteor.call('sendInvitationEmail', invitationId);

    // Show the invitation page for the created invitation
    Router.go("viewSingleInvitation", {_id: invitationId});
  }
});
