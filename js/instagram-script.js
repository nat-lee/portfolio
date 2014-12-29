 //instagram feed
var userFeed = new Instafeed({
//clientId:'980d157dc1a3434e873bdd81669b7dfc',
//template:'<img src="{{img}}"/>',
//target:'instafeed'
get:'user',
//sortBy:'most-liked',
links:false,
resolution:'standard_resolution',
userId:1298294827,
template:'<div class="photo"><img src="{{image}}"/><p>{{caption}}</p></div>',
accessToken:'1298294827.467ede5.ed49b64f9328488ab0015674bb686579'
});
userFeed.run();