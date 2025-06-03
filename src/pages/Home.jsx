import React from "react";
import Hero from "../components/Hero";
// import Download from  "../pages/Download";
import Download from  "../components/Download";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section className="home">
            <Navbar />
            <Hero />
            <Download />
            <Footer />
        </section>
    );
};

export default Home;
