Invitations = new Mongo.Collection("invitations");

InvitationsSchema = new SimpleSchema({
  emails: {
    type: [String],
    label: "E-mail address",
    regEx: SimpleSchema.RegEx.Email
  },
  file: {
    type: String,
    autoform: {
      afFieldInput: {
        type: "fileUpload",
        collection: "Files",
        label: "Choose a file"
      }
    }
  }
});

Invitations.attachSchema(InvitationsSchema);

Invitations.allow({
  "insert": function (userId, doc) {
    return true;
  },
  "update": function (userId, doc) {
    return true;
  }
});
