//halaman regist aslinya mah
import '../styles/login.css';
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

        const onSubmit = async (e) => {
            e.preventDefault()
            if(password !== confirmPassword) {
                alert("Password do not match!");
                return;
            }

            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log("User Created:", userCredential.user);
                navigate("/Loggin");
            } catch(error) {
                console.error("Firebase Error:", error.code, error.message);
            }
    }
    return(
        <>
        <div className="formLogin">
            <div className="formContainer">
            <form >
            <input 
                type="email" 
                placeholder="Email address" 
                label="Emal address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            /> <br />
            <input 
                type="password"    
                placeholder=" password" 
                label="Create Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            /> <br />
            <input 
                type="password" 
                placeholder=" confirm password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            /> <br />
            <button className='btn' type='submit' onClick={onSubmit} >Sign Up</button>
            <p>already have an account? <Link to="/Loggin">Log-in</Link></p>
            </form>
        </div>
        </div>
        </>
    )
}