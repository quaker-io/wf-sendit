Router.route('/', function () {
  this.layout('mainLayout');
  this.render('createInvitation');
});

Router.route('/view', function () {
  this.layout('mainLayout');
  this.render('viewAllInvitations');
});

Router.route('/invitation/:_id', function () {
  this.layout('mainLayout');
  this.render('viewSingleInvitation', {
    data: function () {
      return Invitations.findOne({_id: this.params._id});
    }
  });
},
{
  name: 'viewSingleInvitation'
});
