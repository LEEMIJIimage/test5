import 'firebase/firestore';
import {signInWithPopup, onAuthStateChanged} from 'firebase/auth';
import { GoogleAuthProvider } from '../fbase';
import { getAuth } from '../fbase';
import '../App.css';


const Googlelogin=()=>{
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth,provider);
  

}

export default Googlelogin;
