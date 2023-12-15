import "./discover.css";
import { Link } from "react-router-dom";

export const CardDiscoverMin = ({ title, status, icon, id }) => {
  return (
    <div className="card-discover-min">
        <img className="card-discover-min-icon" src={icon} />
        <img className="card-discover-min-bg" src="https://www.dropbox.com/scl/fi/qc7fyk8cj6x4pmhf897bt/notice-home-slider1.png?rlkey=rau5ktexs3y5m1wca7enhmn4n&dl=1" />
        <div className="card-discover-min-content">
          <p>{title}</p>
        </div>
    </div>
  );
};
