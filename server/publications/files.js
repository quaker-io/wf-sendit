Meteor.publish("allFiles", function () {
  return Files.find();
});

Meteor.publish("singleFile", function (fileId) {
  // Return a single file, by ID
  return Files.find(fileId);
});
