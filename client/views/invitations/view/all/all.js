Template.viewAllInvitations.created = function () {
  var instance = this;

  instance.subscribe("allInvitations");
  instance.subscribe("allFiles");
};

Template.viewAllInvitations.helpers({
  "invitations": function () {
    return Invitations.find().fetch();
  },
  "tableSettings": function () {
    // Create a settings object
    var settings = {
      fields: [
        {key: "_id", label: "View", tmpl: Template.viewButton },
        {key: "title", label: "Title"},
        {key: "message", label: "Message"},
        {key: "emails", label: "Emails"},
      ]
    };

    return settings;
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
