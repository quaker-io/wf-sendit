Meteor.publish("allFiles", function () {
  return Files.find();
});

Meteor.publish("singleFile", function (fileId) {
  // Return a single file, by ID
  return Files.find(fileId);
});

Meteor.publish("invitationFiles", function (fileIdArray) {
  // Return files found in file ID array
  return Files.find({_id: {$in: fileIdArray}});
});
