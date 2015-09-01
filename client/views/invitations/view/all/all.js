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

Template.viewAllInvitations.events({
  'click .reactive-table tbody tr': function (event) {
    // Get the Invitation object
    var invitation = this;

    // Display the view invitation page
    Router.go('viewSingleInvitation', { _id: invitation._id } );
  }
});
