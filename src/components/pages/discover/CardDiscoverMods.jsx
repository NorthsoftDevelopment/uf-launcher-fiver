import "./discover.css";
import { Link } from "react-router-dom";

export const CardDiscoverMods = ({ img, title, status, desc, icon, id }) => {
  return (
    <div className="card-discover-mods">
      <div className="card-discover-mods-image">
        <img src={img} alt="" />
      </div>
      <div className="card-discover-mods-content">
        <span>{title}</span>
        <p>{desc}</p>
        <div className="card-discover-mods-play">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
          </svg>
        </div>
      </div>
    </div>
  );
};
