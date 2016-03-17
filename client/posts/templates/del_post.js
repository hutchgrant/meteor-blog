AutoForm.hooks({
  updatePostForm: {
    onSuccess: function(operation, post) {
      Router.go('all');
    }
  }
});

