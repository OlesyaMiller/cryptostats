import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectCurrentUser } from "../slices/auth.slice";

const PretectedRoute: React.FC<any> = ({children}) => {
    const user = useAppSelector((state) => selectCurrentUser(state));

    return user ? children : <Navigate to="/login" />;
};

export { PretectedRoute };