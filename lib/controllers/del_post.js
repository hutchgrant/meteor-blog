DelPostController = BaseController.extend({
     template: 'delPost',

     onBeforeAction: function() {
          if (!Meteor.user()) {
               if (Meteor.loggingIn()) {
                    this.render(this.loadingTemplate);
               } else {
                    this.render('accessDenied');
               }
          } else {
               this.next();
          }
     },
	  waitOn: function(){
		return Meteor.subscribe('singlePost', this.params._id);
	  },

	  data: function() {
		return Posts.findOne(this.params._id);
	  }
});
