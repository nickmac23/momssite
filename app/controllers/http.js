var url = 'http://localhost:3000/'
var Posts = Backbone.Model.extend({
  url: '',
  posts: [],
  initialize: function(url) {
    this.url = url
  },
});

var post ={
   listPosts: new Posts(url + 'posts'),
   addPost: new Posts(url + 'addPost'),
   updatePost: new Posts(url + 'updatePost')
 }


module.exports = post;
