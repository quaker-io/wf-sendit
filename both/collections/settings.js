Settings = new Mongo.Collection("settings");

var SettingsSchema = new SimpleSchema({
  brandingImageId: {
    type: String,
    label: "Upload logo",
    autoform: {
      type: "cfs-file",
      collection: "files"
    }
  }
});

Settings.attachSchema(SettingsSchema);

Settings.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  }
});
