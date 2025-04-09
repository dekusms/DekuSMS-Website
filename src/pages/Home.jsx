import React from "react";
import LandingPage from "../components/LandingPage";
import Gratitude from "../components/Gratitude";
import About from "../components/About";
import Download from "../components/Download";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section className="home">
            <Navbar />
            <LandingPage />
            <Gratitude />
            <About />
            <Download />
            <Footer />
        </section>
    );
};

export default Home;
