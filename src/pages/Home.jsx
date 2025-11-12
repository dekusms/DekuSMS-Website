import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from '../components/Features';
import Download from  "../components/Download";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <section className="home">
            <Navbar />
            <Hero />
          <Features />
              <Download />
        
        </section>
    );
};

export default Home;



