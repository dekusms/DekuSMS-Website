import React from "react";
import LandingPage from "../components/LandingPage";
import About from "../components/About";
import Download from "../components/Download";

const Home = () => {
    return (
        <section className="home">
            <LandingPage />
            <About />
            <Download />
        </section>
    );
};

export default Home;
