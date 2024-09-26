// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDX25nwzQc-STovWztgtw2aCycvWXJxA3Y",
    authDomain: "dash-13064.firebaseapp.com",
    databaseURL: "https://dash-13064-default-rtdb.firebaseio.com",
    projectId: "dash-13064",
    storageBucket: "dash-13064.appspot.com",
    messagingSenderId: "409540597555",
    appId: "1:409540597555:web:5cc48d3ab4046fbd309046",
    measurementId: "G-78JL7PXFPJ"
};

// Initialize Firebase with compat version (non-modular)
firebase.initializeApp(firebaseConfig); // Use 'firebase.initializeApp' from compat
const auth = firebase.auth(); 

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        document.getElementById('error-message').textContent = "Invalid email or password.";
        return;
    }

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'dashboard.html';  // Redirect to dashboard on success
        })
        .catch((error) => {
            document.getElementById('error-message').textContent = error.message;
        });
});
