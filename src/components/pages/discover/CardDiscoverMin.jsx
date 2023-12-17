import "./discover.css";
import { Link } from "react-router-dom";

export const CardDiscoverMin = ({ title,img, icon, id }) => {
  return (
    <div className="card-discover-min">
        <img className="card-discover-min-icon" src={icon} />
        <img className="card-discover-min-bg" src={img} />
        <div className="card-discover-min-content">
          <p>{title}</p>
        </div>
    </div>
  );
};
