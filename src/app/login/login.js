// const loginButton = document.getElementById("loginBtn");
// const firstName = Finn;
// const lastName = Mertens;
// const email = "finn_mertens@gmail.com";
// const username = "finn_is_math";
// const password = "mathematical";

// firebase.auth().createUserWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     console.log('Signed in ');
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     console.log('error');
//   });

// firebase.auth().signInWithEmailAndPassword(email, password)
//   .then((userCredential) => {
//     console.log('Signed in');
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//   });

loginButton.onclick = () => signInWithEmailAndPassword(email, password);

firebase.auth().signOut().then(() => {
    console.log('Sign-out successful.');
  }).catch((error) => {
    console.log('An error happened.');
  });