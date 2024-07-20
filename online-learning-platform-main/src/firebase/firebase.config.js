import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey,
//   authDomain:import.meta.env.VITE_authDomain,
//   projectId:import.meta.env.VITE_projectId,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId,
//   appId:import.meta.env.VITE_appId
// };

const firebaseConfig = {
  apiKey: "AIzaSyCwel86K2bxvKtZ2XHlmwXuVE4YcDqkZ0s",
  authDomain: "online-learning-platform-764b0.firebaseapp.com",
  projectId: "online-learning-platform-764b0",
  storageBucket: "online-learning-platform-764b0.appspot.com",
  messagingSenderId: "162677410917",
  appId: "1:162677410917:web:1b6329f85b595418a94a8c",
  measurementId: "G-5H4GTXSET8"
};

const app = initializeApp(firebaseConfig);

export default app;