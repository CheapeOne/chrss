const GOOGLE_CLIENT_ID =
  '523917676999-2voaup953efaip8kcam93j6d35h2jne3.apps.googleusercontent.com';

interface Args {
  onInit: () => any;
  onError?: () => any;
}

export function initGoogleAuth({ onInit, onError }: Args) {
  window.gapi.load('auth2', () => {
    const GoogleAuth = gapi.auth2.init({
      client_id: GOOGLE_CLIENT_ID,
      scope: 'profile',
    });

    GoogleAuth.then(onInit, onError);

    // Listen for sign-in state changes.
    // auth2.isSignedIn.listen(signinChanged);

    // Listen for changes to current user.
    // auth2.currentUser.listen(userChanged);

    // // Sign in the user if they are currently signed in.
    // if (GoogleAuth.isSignedIn.get() == true) {
    //   GoogleAuth.signIn();
    // }

    // Start with the current live values.
    // refreshValues();
  });
}

export async function logIn() {
  const GoogleAuth = gapi.auth2.getAuthInstance();
  const googleUser = await GoogleAuth.signIn();

  // auth with backend

  // return backend user object
  return googleUser;
}

export async function logOut() {
  const GoogleAuth = gapi.auth2.getAuthInstance();
  await GoogleAuth.signOut();
}

export function isLoggedIn() {
  const GoogleAuth = gapi.auth2.getAuthInstance();
  return GoogleAuth.isSignedIn.get() == true;
}
