import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported  } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXAqicop3qI3IYSZBA07W-zfre7O-I_ak",
  authDomain: "portfolio-c5b1c.firebaseapp.com",
  projectId: "portfolio-c5b1c",
  storageBucket: "portfolio-c5b1c.appspot.com",
  messagingSenderId: "8539112944",
  appId: "1:8539112944:web:09f5b29886a66c80f90935",
  measurementId: "G-CYXZ1ZEJER",
};

const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

const firestore = getFirestore(app);

const contactForm = async (formData:any) => {
  await addDoc(collection(firestore, "contact"), formData);
};

export default contactForm;
