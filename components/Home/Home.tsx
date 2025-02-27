import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import NewsLetter from "./NewsLetter/NewsLetter";
import NewsSection from "./NewsSection/NewsSection";
import Review from "./Reviews/Review";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
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
