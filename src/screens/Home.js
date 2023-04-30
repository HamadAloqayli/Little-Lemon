import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Menu from "../components/Menu";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Abstract from "../components/Abstract";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Menu />
      <Testimonials />
      <Abstract />
      <Footer />
    </>
  );
};

export default Home;
