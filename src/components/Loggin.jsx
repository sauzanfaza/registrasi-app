//halaman login beneran wkwkwk
import '../styles/loggin.css';
import { signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Loggin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAlreadyLog, setIsAlredyLog] = useState('false');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if(user && isAlreadyLog === false) {
                setIsAlredyLog(true);
                navigate("/Dashboard");
            } 
        });
        return () => unsubscribe();
    }, [isAlreadyLog]);

    const onLogin = (e) => {
        e.preventDefault();

        if(!email || !password) {
            alert("You must enter an Email & Password!");
            return;
        }

        try{
            const userCredential = signInWithEmailAndPassword(auth, email, password)
            console.log("User Created:", userCredential.user);
            navigate("/Dashboard");
        } catch(error) {
            console.error("Firebase error:", error.code, error.message);
        }
    }

    const onLogGoogle = async () => {
        const provider = new GoogleAuthProvider();

        try{
            const userCredential = await signInWithPopup(auth, provider)
            console.log("User Logged In:", userCredential.user);
            navigate("/Dashboard");
        }catch(error) {
            console.error("Firebase error:", error.code, error.message);
        }
    }

    return(
        <div className="formLoggin">
            <div className="formContainer">
            <form>
                <input 
                    type="email" 
                    placeholder=" Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}    
                    required
                />                
                <input 
                    type="password"
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />  
                <button className='submit-btn' type='submit'onClick={onLogin}>Login</button>
                <p>or</p>
                <button className='btn-auth' type="submit" onClick={onLogGoogle}>Login with Google</button>              
            </form>
            </div>
        </div>
    )
}