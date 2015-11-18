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
