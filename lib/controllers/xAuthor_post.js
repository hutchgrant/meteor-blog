AuthorPostController = BaseController.extend({
  template: 'postsList',

  findOptions: function() {
    return { sort: {createdAt: -1}};
  },

  waitOn: function() {
    return Meteor.subscribe('authorPost', {author:this.params.author}, this.findOptions());
  },
  data: function(){
    return { posts: Posts.find({author:this.params.author}, this.findOptions()) };
  }
});
