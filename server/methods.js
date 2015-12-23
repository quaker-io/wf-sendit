Meteor.methods({
  'sendEmail': function (to, from, subject, html) {
    check([to, from, subject, html], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    // Construct a message object
    var messageObject = {
      to: to,
      from: from,
      subject: subject,
      html: html
    };

    Meteor.Mailgun.send(messageObject);
  },
  'sendInvitationEmail': function (invitationId) {
    check([invitationId], [String]);
    this.unblock();

    // Get base URL from settings
    var settings = Settings.findOne({}, {fields: {baseUrl: 1}});

    // Get the application base url, without trailing slash
    var baseUrl = new URI(settings.baseUrl);

    // Get host from base URL
    var host = baseUrl.host();

    // Construct an invitation URL
    var invitationUrl = host + "/invitation/" + invitationId;

    // Construct a from address
    var fromAddress = 'contact@' + host;

    // Get invitation
    var invitation = Invitations.findOne(invitationId);

    // Create a basic message text
    invitation.message = "You have an invitation at " + invitationUrl;

    // Get invitation title
    var subject = invitation.title;

    // Render the html
    var html = SSR.render("invitationEmail", invitation);

    // Get recipient email addresses
    var recipients = invitation.emails;

    for (index in recipients) {
      // Get current recipient
      var recipient = recipients[index];

      // Send email to recipient
      Meteor.call('sendEmail', recipient, fromAddress, subject, html);
    };
  }
});
