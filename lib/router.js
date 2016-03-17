Router.configure({
  loadingTemplate: 'spinner',
  notFoundTemplate: 'notFound'
});

Router.route('/', {
  name: 'root',
  controller: 'FrontController'
});

Router.route('/all', {
  name: 'all',
  controller: 'MainPageController'
});

Router.route('/new', {
  name: 'newPost',
  controller: 'BaseController'
});

Router.route('/edit/:_id', {
  name: 'editPost',
  controller: 'EditPostController'
});

Router.route('/delete/:_id', {
  name: 'delPost',
  controller: 'DelPostController'
});

Router.route('/post/:_id', {
  name: 'singlePost',
  controller: 'SinglePostController'
});

Router.route('/author/:author', {
  name: 'authorPost',
  controller: 'AuthorPostController'
});

Router.onBeforeAction(function() {
  if (!Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}, {only: 'newPost'});
