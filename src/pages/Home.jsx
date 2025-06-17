import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from '../components/FeaturesSection';
import Download from  "../components/Download";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <section className="home">
            <Navbar />
            <Hero />
            <FeaturesSection />
            <Download />
            <Footer />
        </section>
    );
};

export default Home;
