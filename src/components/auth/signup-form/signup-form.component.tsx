import { Button, TextField, Link as MuiLink } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useCreateUserMutation } from '../../../apis/users.api';
import { useLoginMutation } from '../../../apis/auth.api';
import { useAppDispatch } from '../../../app/hooks';
import { User } from '../../../models/User';
import { setAuthState } from '../../../slices/auth.slice';

const SignupForm: React.FC = () => { // FC - function comp, it provides typechecking and autocomplete 
    const [email, setEmail] = useState("");
    const [emailErrored, setEmailErrored] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordErrored, setPasswordErrored] = useState(false);

    const [createUser] = useCreateUserMutation(); // destructured, this function is exposed at the endpoint in users.api.ts
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch(); 

    const handleSignup = async () => {
        if(!email) {
            setEmailErrored(true)
        } else {
            setEmailErrored(false)
        }
        if(!password) {
            setPasswordErrored(true)
        } else {
            setPasswordErrored(false)
        }
        try {
            await createUser({ email, password });
            const response = (await login({ email, password })) as { data: User };
            dispatch(setAuthState({ user: response.data }));
            navigate("/");
        } catch(error) {
            console.log(error);
        }
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