// Get the name form element
const nameForm = document.getElementById('nameForm');

// Add a submit event listener to the name form
nameForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the name input value
  const nameInput = document.getElementById('nameInput');
  const name = nameInput.value.trim();

  // Sign in anonymously with Firebase
  firebase.auth().signInAnonymously()
    .then(() => {
      // Save the user's name in the database
      const currentUser = firebase.auth().currentUser;
      const userId = currentUser.uid;
      const usersRef = firebase.database().ref('users');
      usersRef.child(userId).set({ name: name });

      // Redirect to the chat page
      window.location.href = 'chat.html';
    })
    .catch((error) => {
      console.error(error);
    });
});
