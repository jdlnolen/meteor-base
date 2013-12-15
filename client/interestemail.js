Template.interestemail.events({
    'click #btn': function () {
      Meteor.call('sendEmail', $('#email').val());
      Session.set('done', true);
    }
});

Template.interestemail.done = function () { return Session.equals('done', true); }