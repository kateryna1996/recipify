import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {useForm} from 'react-hook-form';
import {useNavigate} from "react-router-dom";

import {AuthContext} from "../../../context/AuthContextProvider";

import {CgProfile} from "react-icons/cg";
import {RiLockPasswordLine} from "react-icons/ri";
import {AiFillLeftCircle, AiOutlineMail} from "react-icons/ai";

import CenteredLabel from "../../../components/centeredLabel/CenteredLabel";
import ErrorInput from "../../../components/error/errorInputMessage/ErrorInput";
import WrapperMain from "../../../components/wrapper/WrapperMain";
import LoadingMessage from "../../../components/loadingMessage/LoadingMessage";
import SuccessAlert from "../../../components/alert/SuccessAlert";
import ToggleVisibilityButton from "../../../components/button/ToggleVisibilityButton";
import {RegisterAvatar} from "../../../components/functionalComponents/RegisterAvatar";
import RegisterButton from "../../../components/functionalComponents/RegisterButton";
import {Submit} from "../../../components/functionalComponents/Submit";


function Register() {

    const [successMessage, setSuccessMessage] = useState(false);
    const [registerError, setRegisterError] = useState(null);
    const [loading, toggleLoading] = useState(false);
    const [passwordOpen, togglePasswordOpen] = useState(true);

    const {register, formState: {errors}, handleSubmit} = useForm();
    const {authUrl} = useContext(AuthContext);

    let navigate = useNavigate();

    const goBack= () => navigate("../signin", {replace: true});


    function onFormSubmit(data) {

        setSuccessMessage(false);
        setRegisterError('');
        toggleLoading(true);
        togglePasswordOpen(false);

        async function registerUser() {
            try {
                 await axios.post(`${authUrl}auth/signup`, {
                    username: data.name,
                    email: data.email,
                    password: data.password,
                    role: ["user"],
                });
                setSuccessMessage(true);
                setTimeout(goBack, 5000);
            } catch (e) {
                console.error(e);
                setRegisterError(e.response.data.message);
            }
        }
        toggleLoading(false);
        registerUser();
    }

    useEffect(() => {
        clearTimeout();
    }, [])


    return (
        <WrapperMain>
            <div className="wrapper">
                <RegisterAvatar/>
                {loading && <LoadingMessage/>}
                {successMessage && <SuccessAlert/>}

                <form onSubmit={handleSubmit(onFormSubmit)}>
                    {registerError &&
                        <p className="error-message">{registerError}</p>}
                    <h1 className="title-form">Register</h1>
                    <label htmlFor="email">
                        <CenteredLabel title="Email:">
                            <AiOutlineMail/>
                        </CenteredLabel>

                        <input
                            placeholder="Type in your email"
                            type="email"
                            id="email"
                            {...register("email", {
                                required: "The email address is required",
                                pattern: {
                                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: "This email address does not exist, try another one!"
                                }
                            })}
                        />
                        {errors.email &&
                            <ErrorInput>{errors.email.message}</ErrorInput>
                        }
                    </label>

                    <label htmlFor="password">
                        <CenteredLabel title="Password:">
                            <RiLockPasswordLine/>
                        </CenteredLabel>
                        <div className="password-align">
                            <input
                                placeholder="Choose your password"
                                type={ passwordOpen ? "password" : "text"}
                                id="password"
                                {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 8,
                                            message: "Password must be at least 8 characters long."
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: "Password cannot be longer than 15 characters."
                                        }

                                    }
                                )}
                            />
                            <ToggleVisibilityButton
                                togglePasswordOpen={togglePasswordOpen}
                                passwordOpen={passwordOpen}
                                />
                        </div>
                        {errors.password && <ErrorInput>{errors.password.message}</ErrorInput>}
                    </label>

                    <label htmlFor="username">
                        <CenteredLabel title="Name:">
                            <CgProfile/>
                        </CenteredLabel>
                        <input
                            placeholder="Enter your name"
                            type="username"
                            id="username"
                            {...register("name", {
                                    required: "You need to enter your name",
                                    minLength: {
                                        value: 3,
                                        message: "Your name cannot be shorter that 3 characters"
                                    }
                                }
                            )}
                        />
                        {errors.name &&
                            <ErrorInput>
                                {errors.name.message}
                            </ErrorInput>
                        }
                    </label>

                    <Submit>
                        Submit
                    </Submit>
                </form>
                <div className="form-text">

                    <RegisterButton path="../signin">
                        <CenteredLabel title="Back to sign in">
                            <AiFillLeftCircle/>
                        </CenteredLabel>
                    </RegisterButton>

                </div>

            </div>
        </WrapperMain>
    );
}

export default Register;