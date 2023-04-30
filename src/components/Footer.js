import footerImg from "../assets/images/footerImg.png";

const Footer = () => {
  return (
    <footer>
      <div className="footerHolder1">
        <section className="footerSection1">
          <div className="footerImg">
            <img alt="logo" src={footerImg} />
          </div>

          <div className="footerNav">
            <p>Navigation</p>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservations</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </div>

          <div className="footerNav">
            <p>Contact</p>
            <ul>
              <li>Chicago 4108, NS 068</li>
              <li>+125138258</li>
              <li>admin@littlelemon.com</li>
            </ul>
          </div>

          <div className="footerNav">
            <p>Social Media Links</p>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instegram</li>
              <li>Snapchat</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
