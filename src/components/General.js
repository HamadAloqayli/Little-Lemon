import { Link } from "react-router-dom";

const General = ({ page }) => {
  return (
    <div className="generalSection">
      <p>
        This is the <b>{page}</b> page
      </p>
      <p>There is no functionality on this page</p>
      <p>
        Please visit{" "}
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
  );
};

export default General;
