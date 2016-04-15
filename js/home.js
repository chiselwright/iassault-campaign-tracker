$(function () {
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
});
