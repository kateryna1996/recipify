import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import "./Home.css";

import {CgBowl} from "react-icons/cg";
import FoodCard from "../../components/homeFunCard/foodCard/FoodCard";
import FunCard from "../../components/homeFunCard/funCard/FunCard";
import WrapperMain from "../../components/wrapper/WrapperMain";

import pasta from '../../../../recipify/src/assets/pasta.jpg';
import burger from '../../../../recipify/src/assets/burger.jpg';
import pizza from '../../../../recipify/src/assets/pizza.jpg';
import Footer from "../../components/footer/Footer";
import {AuthContext} from "../../context/AuthContextProvider";


function Home() {
    const {isAuth} = useContext(AuthContext);

    return (
        <>
            <WrapperMain>
                <section className="section-body">
                    <div className="title">
                        <h2>These are the instructions on how to start enjoying cooking: </h2>
                    </div>
                    <FunCard/>
                </section>

                <section className="section-body">
                    <div className="home-page-heading">
                        <h2>These are some of the most popular dishes< CgBowl/></h2>
                        <p>that you would be able to cook with the help of this web application</p>
                    </div>

                    <div className="cards">
                        <FoodCard
                            title="Pizza"
                            description=" Pizza is a dish of Italian origin consisting of a flat base of dough
                                 topped with tomatoes, cheese, etc., which is then baked in an oven."
                            img={pizza}
                        />
                        <FoodCard
                            title="Pasta "
                            description="Pasta is a type of food typically
                                made from dough of wheat flour mixed with
                                water or eggs and cooked by boiling or baking."
                            img={pasta}
                        />
                        <FoodCard
                            title="A burger "
                            description="A hamburger is a food consisting of
                                fillings, typically beef placed inside a
                                sliced bun or bread roll. "
                            img={burger}
                        />

                    </div>

                    { isAuth === false &&
                        <article className="article-body">
                            <p>To make use of the services we provide, you need to
                                <Link to="/signin" className="link-page">
                                    login
                                </Link>.
                            </p>
                            <p><em>If you are new to the website, we recommend you to
                                <Link to="/register" className="link-page">
                                    sign up
                                </Link>
                                with your email.</em>
                            </p>
                        </article>
                    }

                </section>
            </WrapperMain>
            <Footer/>
        </>
    );
}

export default Home;