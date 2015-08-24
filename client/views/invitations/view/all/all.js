Template.viewAllInvitations.created = function () {
  var instance = this;

  instance.subscribe("allInvitations");
  instance.subscribe("allFiles");
};

Template.viewAllInvitations.helpers({
  "invitations": function () {
    return Invitations.find().fetch();
  }
});
