import footer1 from "../assets/images/footer1.jpg";
import footer2 from "../assets/images/footer2.jpg";

const Abstract = () => {
  return (
    <footer>
      <div className="footerHolder">
        <section className="footerSection">
          <article className="footerText">
            <p>Little Lemon</p>
            <p>Chicago</p>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.{" "}
            </p>
          </article>

          <article className="imagesHolder">
            <img alt="dish" src={footer1} />
            <img alt="dish" src={footer2} />
          </article>
        </section>
      </div>
    </footer>
  );
};

export default Abstract;
