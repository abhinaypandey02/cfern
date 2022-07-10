import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider,signInWithRedirect } from "firebase/auth";

const provider = new GoogleAuthProvider();
import { collection, getDocs, getFirestore,doc,setDoc } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3CgHB80Eh-N-w_7sZN3ZD6Hl6levjixE",
    authDomain: "cfern-a6254.firebaseapp.com",
    projectId: "cfern-a6254",
    storageBucket: "cfern-a6254.appspot.com",
    messagingSenderId: "101961903260",
    appId: "1:101961903260:web:55d3d25c96511eddaed159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db=getFirestore(app);
export async function signIn(email,password){
    return signInWithEmailAndPassword(auth, email, password);
}
export async function signUp(email,password){
    return createUserWithEmailAndPassword(auth, email, password);
}
export async function getSavedForms(){
    const collectionRef = collection(db,"users", auth.currentUser.email, "savedForms");
    const collectionSnap = await getDocs(collectionRef);
    const forms=[]
     collectionSnap.forEach(d=>forms.push(d.data()));
    console.log(forms)
    return forms;
}
export async function setSavedForm(form){
    if(!form.firstName)return ;
    const docRef = doc(db,"users", auth.currentUser.email, "savedForms",form.id);
    await setDoc(docRef,form);

}
export async function signOut(){
    await auth.signOut();
}
export async function signInWithGoogle(){
    await signInWithRedirect(auth, provider);
}