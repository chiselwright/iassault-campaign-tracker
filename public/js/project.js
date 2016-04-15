var ref = new Firebase(FIREBASE_URL);

toastr.options.positionClass = "toast-bottom-right";

function handle_auth() {
  if (window.location.protocol == "file:") {
    return;
  }
  var auth = ref.getAuth();
  if (auth === null) {
    if (window.location.pathname !== APP_PATHNAME) {
      window.location.pathname = APP_PATHNAME;
    }
  } else {
    if (auth.uid && window.location.pathname === APP_PATHNAME) {
      window.location.pathname = APP_PATHNAME + "campaigns";
    }
  }
}

$(function() {
  handle_auth();
  $(document).on('click', '.facebook-logout', function () {
    ref.unauth();
    handle_auth();
  });
});
