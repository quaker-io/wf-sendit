Settings = new Mongo.Collection("settings");

Settings.attachSchema({
  brandingImageId: {
    type: String,
    autoform: {
      type: "cfs-file",
      collection: "files"
    }
  }
});

Settings.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  }
});
