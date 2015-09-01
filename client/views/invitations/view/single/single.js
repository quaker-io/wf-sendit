Template.viewSingleInvitation.created = function () {
  // Get reference to template instance
  var instance = this;

  // Get File IDs from template instance
  instance.fileIds = instance.data.fileIds;

  // Subscribe to files for this invitation
  instance.subscribe('invitationFiles', instance.fileIds);
}
