import React, { useState } from 'react';
import api from '../ApiConfig';

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setLoading] = useState(false);

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }
        setLoading(true)

        try{
            const loginResponse = await api.post('/user/login', { email, password });
            localStorage.setItem('authToken', loginResponse.data.token);
            console.log("login worked")
        }catch (error){
            console.log("error")
        }finally{
            setLoading(false)
        }

       
    }

    return (
        <div>
            <h1>Login</h1>
            <form  onSubmit={handleSubmit}>

                <p>Email</p>
                <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <br />

                <p>Password</p>
                 <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </form>

        </div>
    );
}

export default Login;
