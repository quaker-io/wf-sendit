Meteor.publish("allInvitations", function () {
  return Invitations.find();
});

Meteor.publish("singleInvitation", function (invitationId) {
  // Return a single Invitation, by ID
  return Invitations.find(invitationId);
});
