import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";

interface IProtectedRoute {
    children: JSX.Element;
}

function ProtectedRoute(props: IProtectedRoute) {
    const [loginData] = useContext(LoginContext);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // console.log('ProtectedRoute >', loginData);
        // Ir al login si no estás logeado
        if (!loginData) {
            navigate(`/login?redirect=${location.pathname}`);
        }
    }, [loginData, navigate, location.pathname])

    return (
        <>
            {loginData && (
                props.children
            )}
        </>
    );
}

export default ProtectedRoute;