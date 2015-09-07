AutoForm.addHooks("createInvitationForm", {
  onSuccess: function (formType, invitationId) {
    // Show the invitation page for the created invitation
    Router.go("viewSingleInvitation", {_id: invitationId});
  }
});
