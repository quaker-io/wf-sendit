Invitations = new Mongo.Collection("invitations");

InvitationsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  message: {
    type: String,
    label: "Message",
    optional: true
  },
  emails: {
    type: [String],
    label: "E-mail address(es)",
    regEx: SimpleSchema.RegEx.Email
  },
  fileIds: {
    type: [String],
    autoform: {
      afFieldInput: {
        type: "cfs-files",
        collection: "files",
        label: "Choose one or more files"
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
