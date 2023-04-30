import { testimonials } from "../data/testimonials";
import rateImg from "../assets/icons/rate.png";

const Testimonials = () => {
  return (
    <section className="testCover">
      <div className="testText">
        <p>Testimonials</p>
      </div>

      <section className="testSection">
        {testimonials.map((item, index) => (
          <article key={index} className="testItem">
            <div className="testRating">
              <img alt="rate" src={rateImg} />
              <p>{item.rating}</p>
            </div>
            <div className="testBody">
              <img alt={item.name} src={item.image} />
              <p>{item.name}</p>
            </div>
            <p className="testText">{item.text}</p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Testimonials;
