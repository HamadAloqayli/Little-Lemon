import { Link } from "react-router-dom";
import heroImg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <div className="cover">
      <section className="hero">
        <div>
          <h1>Little Lemon</h1>
          <p>Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/reservations">
            <button style={{ cursor: "pointer" }}>Reserve a Table</button>
          </Link>
        </div>

        <div>
          <img alt="Chef image" src={heroImg} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
