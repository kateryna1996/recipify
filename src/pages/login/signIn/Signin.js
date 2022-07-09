import React, {useContext, useState} from 'react';
import {useForm} from 'react-hook-form';
import axios from "axios";

import {AuthContext} from "../../../context/AuthContextProvider";

import "../Login.css";
import {HiUserAdd} from "react-icons/hi";
import {AiFillHome} from "react-icons/ai";
import {RiLockPasswordLine} from "react-icons/ri";
import {Section} from "../../../components/functionalComponents/Section";

import CenteredLabel from "../../../components/centeredLabel/CenteredLabel";
import WrapperMain from "../../../components/wrapper/WrapperMain";
import {CgProfile} from "react-icons/cg";
import ErrorInput from "../../../components/error/errorInputMessage/ErrorInput";
import LoadingMessage from "../../../components/loadingMessage/LoadingMessage";
import ToggleVisibilityButton from "../../../components/button/ToggleVisibilityButton";
import RegisterButton from "../../../components/functionalComponents/RegisterButton";
import {SignInAvatar} from "../../../components/functionalComponents/SignInAvatar";
import {Submit} from "../../../components/functionalComponents/Submit";


function Signin() {

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [passwordOpen, togglePasswordOpen] = useState(true);

    const {register, formState: {errors}, handleSubmit} = useForm();
    const {login, authUrl} = useContext(AuthContext);


    function onFormSubmit(data) {
        setError(false);
        toggleLoading(true);

        async function loginRequest() {
            try {
                const response = await axios.post(`${authUrl}auth/signin`, {
                    username: data.name,
                    password: data.password,
                });
                login(response.data);
            } catch (e) {
                console.error(e);
                setError(true);
            }
        }

        toggleLoading(false);
        loginRequest();
    }


    return (
        <WrapperMain>
            <div className="wrapper">
                <Section>
                    <SignInAvatar/>
                </Section>
                {loading && <LoadingMessage/>}

                    <form onSubmit={handleSubmit(onFormSubmit)}>
                        <h1 className="title-form">Sign in</h1>
                        {error &&
                            <p className="error-message">
                                "You have not succeeded to log in, please check your data and try
                                again!
                            </p>
                        }
                        <label htmlFor="username">
                            <CenteredLabel title="Name:">
                                <CgProfile/>
                            </CenteredLabel>
                            <input
                                placeholder="Enter your name"
                                type="username"
                                id="username"
                                {...register("name", {
                                        required: "The name is required",
                                    }
                                )}
                            />
                        </label>
                        {errors.name &&
                            <ErrorInput>
                                {errors.name.message}
                            </ErrorInput>
                        }

                        <label htmlFor="password">
                            <CenteredLabel title="Password:">
                                <RiLockPasswordLine/>
                            </CenteredLabel>

                            <div className="password-align">
                                <input
                                    placeholder="Type in your password"
                                    id="password"
                                    type={passwordOpen ? "password" : "text"}
                                    {...register("password", {
                                        required: "Password is required",
                                    })}
                                />
                                <ToggleVisibilityButton
                                    togglePasswordOpen={togglePasswordOpen}
                                    passwordOpen={passwordOpen}
                                />
                            </div>
                        </label>
                        {errors.password &&
                            <ErrorInput>
                                {errors.password.message}
                            </ErrorInput>
                        }
                        <Submit>
                            Inloggen
                        </Submit>
                    </form>

                <Section>
                    <div className="form-text">
                        <p>Still struggle cooking?</p>
                        <h5>It's high time to make an account and start the carefree life.</h5>

                        <RegisterButton path="../register">
                            <CenteredLabel title="Register here">
                                <HiUserAdd/>
                            </CenteredLabel>
                        </RegisterButton>

                        <RegisterButton path="/">
                            <CenteredLabel title="Go back to Home">
                                <AiFillHome/>
                            </CenteredLabel>
                        </RegisterButton>

                    </div>

                </Section>
            </div>
        </WrapperMain>
    );
}

export default Signin;