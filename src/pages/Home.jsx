import React from "react";
import LandingPage from "../components/LandingPage";
import Gratitude from "../components/Gratitude";
import About from "../components/About";
import Download from "../components/Download";

const Home = () => {
    return (
        <section className="home">
            <LandingPage />
            <Gratitude />
            <About />
            <Download />
        </section>
    );
};

export default Home;
