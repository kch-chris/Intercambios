            <!-- These are the notifications that are displayed to the user through pop-ups if the above JS files does not exist in the same directory-->
            if ((typeof cordova == 'undefined') && (typeof Cordova == 'undefined')) alert('Cordova variable does not exist. Check that you have included cordova.js correctly');
            if (typeof CDV == 'undefined') alert('CDV variable does not exist. Check that you have included cdv-plugin-fb-connect.js correctly');
            if (typeof FB == 'undefined') alert('FB variable does not exist. Check that you have included the Facebook JS SDK file.'); 
            
            FB.Event.subscribe('auth.login', function(response) {
                               alert('auth.login event');
                               });
            
            FB.Event.subscribe('auth.logout', function(response) {
                               alert('auth.logout event');
                               });
            
            FB.Event.subscribe('auth.sessionChange', function(response) {
                               alert('auth.sessionChange event');
                               });
            
            FB.Event.subscribe('auth.statusChange', function(response) {
                               alert('auth.statusChange event');
                               });
            
            /*function getSession() {
                alert("session: " + JSON.stringify(FB.getSession()));
            }
            */
            function getLoginStatus() {
                FB.getLoginStatus(function(response) {
                                  if (response.status == 'connected') {
                                  alert('logged in');
                                  } else {
                                  alert('not logged in');
                                  }
                                  });
            }
            var friendIDs = [];
			var fdata;
            
            function logout() {
                FB.logout(function(response) {
                          alert('logged out');
                          });
            }
            
            function login() {
                FB.login(
                         function(response) {
                         if (response.session) {
                         alert('logged in');
                         } else {
                         alert('not logged in');
                         }
                         },
                         { scope: "email" }
                         );
            }
	
            
           document.addEventListener('deviceready', function() {
            // window.fbAsyncInit = function() {
            console.log('here')
              FB.init({
                  appId: '206152916238393',
                  nativeInterface: CDV.FB,
                  status     : true, // check login status
                  //cookie     : true, // enable cookies to allow the server to access the session
                 // xfbml: true,
                  useCachedDialogs: false
              });
              FB.Event.subscribe('auth.statusChange', handleStatusChange);
              FB.getLoginStatus(handleStatusChange);
          });
         