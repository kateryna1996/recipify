import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

import WrapperMain from "../../components/wrapper/WrapperMain";
import {Section} from "../../components/functionalComponents/Section";
import {AuthContext} from "../../context/AuthContextProvider";

import "./Profile.css";
import {HiCursorClick, HiHome} from "react-icons/hi";
import LoadingMessage from "../../components/loadingMessage/LoadingMessage";
import ErrorMessage from "../../components/error/errorMessage/ErrorMessage";
import {TbUpload} from "react-icons/tb";
import {convertBase64} from "../../helpers/convertBase64";
import defaultAvatar from "../../assets/avatar.jpg";
import ChangeInformation from "../../components/changeInformation/ChangeInformation";
import {RiSettings5Fill} from "react-icons/ri";


function Profile() {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [photo, setPhoto] = useState(null);
    const [open, setOpen] = useState(true);
    const [openSettings, setOpenSettings] = useState(true);
    const [currentAvatar, setCurrentAvatar] = useState(null);

    const {authUrl, user: {username, email, profilePicture}, toggleIsAuth, isAuth} = useContext(AuthContext);

    const token = localStorage.getItem("token");


    async function uploadPhoto() {

        const source = axios.CancelToken.source();
        setLoading(true);
        setError(false);
        setPhoto(null);

        try {
            await axios.post(`${authUrl}user/image`, {
                    "base64Image": photo,
                }, {
                    cancelToken: source.token,
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            getUserData(token);
        } catch (e) {
            console.error(e);
            setError(true);
        }
        setLoading(false);
        return function cleanup() {
            source.cancel();
        }
    }


    async function uploadImage(e) {
        e.preventDefault();
        const file = e.target.files[0];
        const base64 = await convertBase64(file);
        setPhoto(base64);
    }


    async function getUserData(token) {
        try {
            const response = await axios.get(`${authUrl}user`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            console.log(response);
            localStorage.setItem("avatar", response.data.profilePicture);
            setCurrentAvatar(response.data.profilePicture);
        } catch (e) {
            toggleIsAuth({
                ...isAuth,
                status: "error",
            });
            localStorage.clear();
            console.error(e);
        }
    }

    useEffect(() => {
        setCurrentAvatar(localStorage.getItem("avatar"));
    },
    // }, [localStorage.getItem("avatar")]
        []);


    return (
        <WrapperMain>
            <Section>
                {loading &&
                    <LoadingMessage/>
                }
                {error &&
                    <ErrorMessage/>
                }
                <div className="profile">
                    <h1 className="title-profile">Profile</h1>
                    <h2>Hello, {username} !</h2>
                    <div className="user-image">
                        <div className="avatar-wrapper">
                            <img
                                src={currentAvatar? currentAvatar : defaultAvatar}
                                alt="user"
                                className="avatar"
                            />
                        </div>
                        <div className={open ? "closed" : "default"}>
                            <input
                                type="file"
                                className="avatar-upload"
                                onChange={(e) => {
                                    uploadImage(e);
                                }}
                            />

                            <button
                                className="avatar-button"
                                type="submit"
                                onClick={() => {
                                    uploadPhoto();
                                    setOpen(!open);
                                }}
                            >
                                <TbUpload size="20px"/> Upload profile photo
                            </button>
                        </div>
                        <h5>Want to change your profile picture? Click here
                            <button
                                type="button"
                                className="toggle-open"
                                onClick={() => setOpen(!open)}
                            >
                                <HiCursorClick size="25px"/>
                            </button>
                        </h5>
                    </div>

                    <p>Now you are able to make use of the <Link to="/recipes" className="link-page">recipe search
                        services</Link>.</p>
                    <em>Good luck and enjoy it!</em>

                    {openSettings &&
                        <div className="personal-information">
                            <h2 className="title">Personal information</h2>
                            <p>Your user name :<span className="info-details"> {username}</span></p>
                            <p>The email address :<span className="info-details"> {email}</span></p>
                        </div>}
                    <Section>
                        <h5 className="text-center" >
                            Would you like to change your email or password? Click here
                            <span
                                className="toggle-open"
                                onClick={() => {
                                    setOpenSettings(!openSettings);
                                    console.log("settings");
                                }}>
                                 <RiSettings5Fill size="30px"/>
                            </span>
                        </h5>
                        <ChangeInformation open={openSettings}/>
                    </Section>
                    <Link
                        className="link-to-home"
                        to="/">
                        <HiHome size="40px" className="earth home"/>
                    </Link>

                </div>
            </Section>
        </WrapperMain>
    );
}

export default Profile;