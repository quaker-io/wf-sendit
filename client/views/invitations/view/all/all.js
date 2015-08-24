Template.viewAllInvitations.created = function () {
  var instance = this;

  instance.subscribe("allInvitations");
};

Template.viewAllInvitations.helpers({
  "invitations": function () {
    return Invitations.find().fetch();
  }
});
