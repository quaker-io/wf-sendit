Files = new FS.Collection("files", {
  stores: [
    new FS.Store.GridFS("files", {})
  ]
});

Files.allow({
  "insert": function (userId, doc) {
    return true;
  }
});
