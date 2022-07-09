import React, {useEffect, useContext, useState} from 'react';
import axios from "axios";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../context/AuthContextProvider";

import "./ChangeInformation.css";
import CenteredLabel from "../centeredLabel/CenteredLabel";
import {RiLockPasswordLine} from "react-icons/ri";
import ToggleVisibilityButton from "../button/ToggleVisibilityButton";
import ErrorInput from "../error/errorInputMessage/ErrorInput";
import {Submit} from "../functionalComponents/Submit";
import LoadingMessage from "../loadingMessage/LoadingMessage";
import SuccessChange from "../alert/SuccessChange";
import {useNavigate} from "react-router-dom";
import {AiOutlineMail} from "react-icons/ai";


function ChangeInformation({open}) {

    const [passwordOpen, togglePasswordOpen] = useState(true);
    const [activeTab, setActiveTab] = useState("password");
    const [successMessage, setSuccessMessage] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(null);

    const {register, formState: {errors}, handleSubmit} = useForm();
    const {authUrl, logout} = useContext(AuthContext);
    const token = localStorage.getItem("token");

    let navigate = useNavigate();

    function changeApproved() {
        logout();
        navigate("/signin");
    }

    function onFormSubmitPassword(data) {
        setSuccessMessage(false);
        setError('');
        toggleLoading(true);
        togglePasswordOpen(false);
        if (data.password === data.repeatedPassword) {
            async function changeUserPassword() {
                try {
                    await axios.put(`${authUrl}user`, {
                            password: data.password,
                            repeatedPassword: data.repeatedPassword,
                        }, {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`,
                            }
                        }
                    );
                    setSuccessMessage(true);
                    setTimeout(changeApproved, 5000);
                } catch (e) {
                    console.error(e);
                    setError(e.response.data.message);
                }
            }

            toggleLoading(false);
            changeUserPassword();
        } else {
            setError("The password values should match!")
        }
    }

    function onFormSubmitEmail(data){
        setSuccessMessage(false);
        setError('');
        toggleLoading(true);
        togglePasswordOpen(false);

        async function changeUserEmail() {
            try {
                await axios.put(`${authUrl}user`, {
                        email: data.email,
                    }, {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    }
                );
                setSuccessMessage(true);
                setTimeout(changeApproved, 5000);
            } catch (e) {
                console.error(e);
                setError(e.response.data.message);
            }
        }
        toggleLoading(false);
        changeUserEmail();
    }


    useEffect(() => {
        clearTimeout();
    }, [])

    return (
        <>
            {loading && <LoadingMessage/>}
            {successMessage && <SuccessChange/>}
            <div className={open ? "closed" : "form-change-info"}>
                <div className="topbar-change-info">
                    <button
                        type="button"
                        className={ activeTab === "password"? "active-tab" : "tab"}
                        onClick={() => setActiveTab("password")}
                    >
                        Change password?
                    </button>
                    <button
                        type="button"
                        className={ activeTab === "email"? "active-tab" : "tab"}
                        onClick={() => setActiveTab("email")}
                    >
                        Change email?
                    </button>
                </div>
                { activeTab === "password" &&
                        <form onSubmit={handleSubmit(onFormSubmitPassword)}>
                            <br/>
                            <h1 className="title-form">Changing Password</h1>
                            {error &&
                                <p className="error-message">{error}</p>
                            }
                            <label htmlFor="password">
                                <CenteredLabel title="Password:">
                                    <RiLockPasswordLine/>
                                </CenteredLabel>
                                <div className="password-align">
                                    <input
                                        placeholder="Choose your password"
                                        type={passwordOpen ? "password" : "text"}
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
                            <label htmlFor="repeatedPassword">
                                <CenteredLabel title="Confirm the new password:"/>
                                <div className="password-align">
                                    <input
                                        placeholder="Repeat the password"
                                        type="password"
                                        id="repeatedPassword"
                                        {...register("repeatedPassword", {
                                                required: "Password is required",
                                            }
                                        )}
                                    />
                                </div>
                                {errors.password && <ErrorInput>{errors.password.message}</ErrorInput>}
                            </label>
                            <Submit>
                                Submit
                            </Submit>
                        </form>
                }
                { activeTab === "email" &&
                    <form onSubmit={handleSubmit(onFormSubmitEmail)}>
                        <br/>
                        <h1 className="title-form">Changing Email</h1>
                        {error &&
                            <p className="error-message">{error}</p>
                        }
                        <label htmlFor="email">
                            <CenteredLabel title="Email:"/>

                            <input
                                placeholder="Type in your new email"
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
                        <Submit>
                            Submit
                        </Submit>
                    </form>
                }
            </div>
        </>
    );
}

export default ChangeInformation;