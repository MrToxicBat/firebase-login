
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCp4C-DrKuLUxS9yo9VyBYa5CZxm1Q3NBI",
  authDomain: "ia-medica-6f09e.firebaseapp.com",
  projectId: "ia-medica-6f09e",
  storageBucket: "ia-medica-6f09e.firebasestorage.app",
  messagingSenderId: "747957864751",
  appId: "1:747957864751:web:a09686be84ed0b3b5db9da",
  measurementId: "G-LMMPNVF9LB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.querySelectorAll(".login-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const texto = button.innerText.trim().toLowerCase();

    if (texto.includes("google")) {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => alert("✅ Bienvenido " + result.user.displayName))
        .catch((err) => alert("❌ Error: " + err.message));
    }

    if (texto.includes("correo electrónico")) {
      document.querySelector(".login-card").style.display = "none";
      const form = document.getElementById("formCorreo");
      form.classList.remove("oculto");
      form.style.display = "block";
    }
  });
});

document.getElementById("loginCorreoBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const pass = document.getElementById("passwordInput").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((user) => alert("✅ Iniciaste sesión con: " + user.user.email))
    .catch((err) => alert("❌ Error: " + err.message));
});

document.getElementById("volverBtn").addEventListener("click", () => {
  document.getElementById("formCorreo").style.display = "none";
  document.querySelector(".login-card").style.display = "block";
  document.getElementById("login-wrapper").scrollIntoView({ behavior: "smooth" });
});
