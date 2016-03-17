Meteor.publish('allPosts', function(){
  return Posts.find();
});

Meteor.publish('singlePost', function(id){
  return Posts.find(id);
});

Meteor.publish('authorPost', function(author){
  return Posts.find(author);
});
