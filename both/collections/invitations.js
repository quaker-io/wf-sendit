Invitations = new Mongo.Collection("invitations");

InvitationsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  emails: {
    type: [String],
    label: "E-mail address",
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
