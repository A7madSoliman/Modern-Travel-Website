import Destination from "./Destination/Destination";
import Hero from "./Hero/Hero";
import Hotel from "./Hotel/Hotel";
import WhyChoose from "./WhyChoose/WhyChoose";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Destination />
      <Hotel />
      <WhyChoose />
    </div>
  );
};

export default Home;
