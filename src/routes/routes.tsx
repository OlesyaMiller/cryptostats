import React from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom'; // ?
import { LoginPage } from '../pages/login.page';
import { SignupPage } from '../pages/signup.page';
import { HomePage } from '../pages/home.page';
import { ProtectedRoute } from './protected-route.component';
import { Transactions } from '../components/transactions/transactions.component';

const Routes: React.FC = () => {
    return (
        <ReactRouterRoutes>
            <Route path="/" element={
                <ProtectedRoute>
                    <HomePage />
                </ProtectedRoute>
            } />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="transactions" element={<Transactions />} />
        </ReactRouterRoutes>
    )
}

export { Routes };