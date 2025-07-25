import "./discover.css";
import { Link } from "react-router-dom";

export const CardDiscover = ({ img, title, status, icon, desc, id, onClick }) => {
  return (
    <div className="card-discover">
      <button className="button-free" onClick={onClick}>
        <img src={img} />
        <div className="card-discover-content">
          <div className="card-discover-info">
            <div className="card-status-server" data-status={status}></div>
            <p>23.000 players online</p>
            <div className="card-discover-warp">
              <div className="card-discover-play-button">
                <p>Jugar</p>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" />
                </svg>
              </div>
              <div className="card-discover-more">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>
            </div>
          </div>
          <div className="card-discover-play">
            <img src={icon} className="card-discover-icon" />
            <div className="card-discover-server-info">
              <span>{title}</span>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};
