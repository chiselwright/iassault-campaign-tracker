$(function () {
    if (window.location.protocol == "file:") {
      ref.authAnonymously(function(error, authData) {
        if (error) {
            console.log("Authentication Failed!", error);
        } else {
            console.log("Authenticated successfully with payload:", authData);
            window.location.pathname =
                window.location.pathname.replace(/index.html/, 'campaigns/index.html');
        }
      });
    }
    else {
    $(document).on('click', '.facebook-login', function(e) {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (authData === undefined) {
            console.error(error);
            return;
        }
        if (authData.uid !== null) {
            if (authData.uid && window.location.pathname === "/") {
                window.location.pathname = "/campaigns/";
            }
            else if (authData.uid && window.location.pathname !== null) {
                window.location.pathname = window.location.pathname + "campaigns/";
            }
        }
        }, {
        scope: "email,public_profile"
        });
    });
   }
});
