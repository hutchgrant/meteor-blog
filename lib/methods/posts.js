Meteor.methods({
  submitPost: function(post) {

    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, 'You need to log in first');

    var additionalParams = {
      author: Meteor.user().username,
      createdAt: new Date(),
      userId: user._id
    }

    _.extend(post, additionalParams);
    post._id = Posts.insert(post);
    return post;
  },
  updatePost: function(post, id){

		Posts.update({_id:id}, post);
		post._id = id;
		return post;
	},

	delPost: function(post, id){
		 Posts.remove({_id:id});
	}
});
