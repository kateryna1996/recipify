import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

import LoadingMessage from "../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../components/error/errorMessage/ErrorMessage";
import {isTokenValid} from "../helpers/isTokenValid";


export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const url = 'https://frontend-educational-backend.herokuapp.com/api/';

    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token && isTokenValid(token)) {
            getUserData(token);
        } else {
            toggleIsAuth({
                ...isAuth,
                status: "done",
            });
        }

    }, [])

    const getUserData= async (token) => {
        try {
            const response = await axios.get(`${url}user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            toggleIsAuth({
                isAuth: true,
                user: {
                    email: response.data.email,
                    username: response.data.username,
                    id: response.data.id,
                    profilePicture: response.data.profilePicture,
                },
                status: "done",
            })
        } catch (e) {
            toggleIsAuth({
                ...isAuth,
                status: "error",
            });
            localStorage.clear();
            console.error(e);
        }
    }

    function login(data) {
        localStorage.setItem("token", data.accessToken);
        console.log('Gebruiker is ingelogd!');
        toggleIsAuth({
            ...isAuth,
            isAuth: true,
            user: {
                email: data.email,
                username: data.username,
                id: data.id,
                profilePicture: data.profilePicture,
            },
            status: "done",
        });

        navigate("profile");
    }

    function logout() {
        console.log('Gebruiker is uitgelogd!');
        localStorage.removeItem("token");
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        navigate("/");
    }

    const data = {
        toggleIsAuth: toggleIsAuth,
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
        authUrl: url,

    }

    return (
        <AuthContext.Provider value={data}>
            {isAuth.status === "done" && children}
            {isAuth.status === "pending" && <LoadingMessage/>}
            {isAuth.status === "error" && <ErrorMessage/>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;