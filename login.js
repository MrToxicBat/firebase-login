
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_DOMINIO.firebaseapp.com",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
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

// Botón para continuar con correo
document.getElementById("loginCorreoBtn").addEventListener("click", () => {
  const email = document.getElementById("emailInput").value;
  const pass = document.getElementById("passwordInput").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then((user) => alert("✅ Iniciaste sesión con: " + user.user.email))
    .catch((err) => alert("❌ Error: " + err.message));
});
