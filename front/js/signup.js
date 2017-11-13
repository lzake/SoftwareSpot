var AUTH0_CLIENT_ID = '0I8lisVCh14Ko7Jlw6L4pkwwZtPkVRku';
var AUTH0_DOMAIN = 'softspot-team.auth0.com';
var AUTH0_CALLBACK_URL = location.href;
var userProfile;

$('document').ready(() => {

  $('#welcome-text').hide()
  'use strict';
  //code here
  var webAuth = new auth0.WebAuth({
    domain: AUTH0_DOMAIN,
    clientID: AUTH0_CLIENT_ID,
    redirectUri: AUTH0_CALLBACK_URL,
    audience: 'https://' + AUTH0_DOMAIN + '/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile email',
    leeway: 60
  });

  $('.auth0-login').click(() => {
    webAuth.authorize();
  })

  function setSession(authResult) {
    // Set the time that the access token will expire at
    var expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }
  function getProfile() {
    if (!userProfile) {
      var accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        console.log('Access token must exist to fetch profile');
      }
      webAuth.client.userInfo(accessToken, function(err, profile) {
        console.log("profile", profile);
        if (profile) {
          userProfile = profile;
          displayProfile();
        }
      });
    } else {
      displayProfile();
    }
  }
  //todo Ajax
  function displayProfile() {
    $('#login-button').hide();
    $('#welcome-text').append(userProfile.name)
    $('#welcome-text').show()
    console.log("Username:", userProfile.name, "User Email:", userProfile.email, "User Picture", userProfile.picture);
  };
  function handleAuthentication() {
    webAuth.parseHash(function(err, authResult) {
      console.log("authResult", authResult);
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        setSession(authResult);
        getProfile();
      } else if (err) {
        console.log(err);
        alert('Error: ' + err.error + '. Check the console for further details.');
      }
    });
  }
  handleAuthentication();
});
