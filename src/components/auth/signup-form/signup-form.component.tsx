import { Button, TextField, Link as MuiLink } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCreateUserMutation } from '../../../apis/users.api';

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [emailErrored, setEmailErrored] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErrored, setPasswordErrored] = useState(false);

    const [createUser] = useCreateUserMutation(); // destructured, this function is exposed at the endpointf in users.api.ts

    const handleSignup = async () => {
        if(!email) {
            setEmailErrored(true)
        } else {
            setEmailErrored(true)
        }
        if(!password) {
            setPasswordErrored(true)
        } else {
            setPasswordErrored(true)
        }
        await createUser({email, password});
    }

    return (
        <div className="flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">Cryptostats</h1>
            <div className="flex flex-col gap-2">

                <TextField 
                    label="Email" 
                    className="w-80" 
                    type="email" 
                    required 
                    helperText={emailErrored && "Please enter a valid Email."} 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)} 
                    error={emailErrored}
                />
                <TextField 
                    label="Password" 
                    className="w-80" 
                    type="password" 
                    required 
                    helperText={passwordErrored && "Password can not be empty."} 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    error={passwordErrored}
                />

                <Link to="/login" className="justify-self-start self-start mt-2">
                    <MuiLink>Login</MuiLink>
                </Link>
                
            </div>
            <Button variant="contained" className="w-80" onClick={handleSignup}>
                <span className="p-1">Sign Up</span>
            </Button>
        </div>
    )
}

export { SignupForm };