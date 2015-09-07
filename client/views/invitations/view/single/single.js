Template.viewSingleInvitation.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get the current invitation ID
  var invitationId = Router.current().params._id;

  // Subscribe to files for this invitation
  instance.subscribe('invitationComposite', invitationId);
};

Template.viewSingleInvitation.helpers({
  'files': function () {
    return Files.find().fetch();
  }
});
