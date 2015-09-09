Meteor.methods({
  'sendEmail': function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // Construct a message object
    var messageObject = {
      to: to,
      from: from,
      subject: subject,
      text: text
    };

    Meteor.Mailgun.send(messageObject);
  },
  'sendInvitationEmail': function (invitationId) {
    check([invitationId], [String]);
    this.unblock();

    // Get the application absolute URL
    var absoluteUrl = Meteor.absoluteUrl();

    // Get the application base url, without trailing slash
    var baseUrl;

    if (absoluteUrl.substr(-1) === '/') {
        baseUrl = absoluteUrl.substr(0, absoluteUrl.length - 1);
    } else {
      baseUrl = absoluteUrl;
    }

    // Construct an invitation URL
    var invitationUrl = baseUrl + "/invitation/" + invitationId;

    // Construct a from address
    var from = 'contact@' + baseUrl;

    // Create a basic message text
    var message = "You have an invitation at " + invitationUrl;

    // Get invitation
    var invitation = Invitations.findOne(invitationId);

    // Get invitation title
    var title = invitation.title;

    // Get recipient email addresses
    var recipients = invitation.emails;

    for (index in recipients) {
      // Send email to recipient
      Meteor.call('sendEmail', recipients[index], from, title, message);
    };
  }
});
