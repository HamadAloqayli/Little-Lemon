import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import General from "../components/General";
import Navbar from "../components/Navbar";

const Success = () => {
  return (
    <>
      <Navbar />
      <div className="generalSection">
        <div
          style={{
            border: "3px solid green",
            borderRadius: "100%",
            padding: 0,
            display: "inline-block",
            height: 75,
            width: 75,
            display: "grid",
            placeItems: "center",
            margin: "auto",
          }}
        >
          <p style={{ color: "green", fontSize: 60, margin: 0 }}>&#10003;</p>
        </div>
        <p>Your data has been sent successfully!</p>
        <p>
          Go to{" "}
          <Link to="/" style={{ color: "blue", fontWeight: "600" }}>
            Home
          </Link>{" "}
          or{" "}
          <Link to="/reservations" style={{ color: "blue", fontWeight: "600" }}>
            Reservations
          </Link>{" "}
          pages
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Success;
