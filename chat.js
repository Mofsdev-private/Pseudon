import firebaseConfig from './firebase-config.js';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// Get the current user's ID
const currentUser = firebase.auth().currentUser;
const currentUserId = currentUser.uid;

// Generate a random user ID for the other user
const otherUserId = Math.random().toString(36).substring(2, 8);

// Create a new chat room in the database
const chatRoomId = `${currentUserId}-${otherUserId}`;
const chatRoomRef = firebase.database().ref(`chatRooms/${chatRoomId}`);

// Listen for changes to the chat room
chatRoomRef.on('value', (snapshot) => {
  const messages = snapshot.val().messages;

  // Clear the chat messages
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = '';

  // Display the chat messages
  messages.forEach((message) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = message.text;
    chatMessages.appendChild(messageElement);
  });
});

// Handle the message form submission
const messageForm = document.getElementById('messageForm');
messageForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get the message input value
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value.trim();

  // Add the message to the chat room
  chatRoomRef.child('messages').push({
    sender: currentUserId,
    text: messageText,
    timestamp: Date.now()
  });

  // Clear the message input
  messageInput.value = '';
});

// Remove the chat room when the page is unloaded
window.addEventListener('unload', () => {
  chatRoomRef.remove();
});
