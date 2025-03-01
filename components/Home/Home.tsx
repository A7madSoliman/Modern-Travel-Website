"use client";

import { useEffect } from "react";
import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import NewsLetter from "./NewsLetter/NewsLetter";
import NewsSection from "./NewsSection/NewsSection";
import Review from "./Reviews/Review";
import WhyChoose from "./WhyChoose/WhyChoose";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };
    initAOS();
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
      <Review />
      <NewsSection />
      <NewsLetter />
    </div>
  );
};

export default Home;
