window.fbAsyncInit = function() {
FB.init({
    appId      : '1560980628034628',
    cookie     : true,
    xfbml      : true,
    version    : 'v19.0'
});
    
FB.AppEvents.logPageView();   
    
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function checkLoginState() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        FB.api('/me?fields=name,picture', function(response) {
          sessionStorage.setItem('name', response.name);
          sessionStorage.setItem('picture', response.picture.data.url);
          window.location.href = 'whichmachine.html';
        });
      }
    });
}