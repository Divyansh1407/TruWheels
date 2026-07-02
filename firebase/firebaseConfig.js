import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import { getAuth }
from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJ74fWHjZ7fZJQ8rLXCziLtU8L-fj6UMM",
  authDomain: "truwheels-1407.firebaseapp.com",
  projectId: "truwheels-1407",
  storageBucket: "truwheels-1407.firebasestorage.app",
  messagingSenderId: "608771354866",
  appId: "1:608771354866:web:86b3c1ea13e60eeebee06b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };