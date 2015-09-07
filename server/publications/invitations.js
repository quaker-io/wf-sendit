Meteor.publish("allInvitations", function () {
  return Invitations.find();
});

Meteor.publish("singleInvitation", function (invitationId) {
  // Return a single Invitation, by ID
  return Invitations.find(invitationId);
});

Meteor.publishComposite('invitationComposite', function (invitationId) {
  return {
    find: function () {
      console.log(invitationId);
      // Get specific invitation by ID
      var invitations = Invitations.find(invitationId);
      console.log(invitations.count());
      // Find a specific invitation
      return invitations;
    },
    children: [
      {
        find: function (invitation) {
          // Get all file IDs for invitation
          var fileIds = invitation.fileIds;

          // Find all files related to invitation
          return Files.find({ _id: { $in: fileIds }})
        }
      }
    ]
  }
});
