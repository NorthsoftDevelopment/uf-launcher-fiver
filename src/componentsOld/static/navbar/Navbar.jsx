import { useState } from "react";
import "../css/layout.css";
import logo from "../../../assets/launcherweb.png";
import test from "../../../assets/icon/icon.png";
import usericon from "../../../assets/icon/usericon.png";
import "../css/search-bar.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import searchIcon from "../../../assets/icon/Extra/search-white.png";
import menuIcon from "../../../assets/icon/Extra/menu-icon.png";
import settingsIcon from "../../../assets/icon/Extra/settings-icon.png";
import Sidebar from "../../Profile/ProfileBar";
import { SeparateShort } from "../../ExtraComponents/Separate/Separate";
import { RecentPlayName } from "../../global/Cards/RecentPlay";

const testData = [
  {
    title: "Pagina de Login",
    image: test,
    desc: "Mi cuenta",
    link: "/login",
  },
];

export const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    if (term.trim() !== "") {
      const results = testData.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleItemClick = (item) => {
    const selectedItem = testData.find((data) => data.title === item);
    if (selectedItem) {
      window.location.href = selectedItem.link;
    }
    setSearchTerm(item);
    setShowDropdown(false);
  };

  AOS.init();

  useEffect(() => {
    window.addEventListener("scroll", function () {
      var header = document.querySelector("header");
      header.classList.toggle("abajo", window.scrollY > 0);
    });

    return () => {
      window.removeEventListener("scroll", function () {
        var header = document.querySelector("header");
        header.classList.toggle("abajo", window.scrollY > 0);
      });
    };
  }, []);


  function action(btn) {
    const { ipcRenderer } = require("electron");
    var attr = btn.currentTarget.attributes.op.value
    attr == "min" ? ipcRenderer.send("minimize-app") : attr == "max" ? ipcRenderer.send("fullscreen-app") : attr == "close" ? ipcRenderer.send("cerrar-app") : ""

  }


  return (
    <header>
      <div className="menu-top-options drag">
        <div className="menu-top-options-p"><p>Inhonia</p></div>
        <div>
          <button onClick={(e) => action(e)} className="nav-close-app nodrag" op="min">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" />
            </svg>
          </button>
          <button onClick={(e) => action(e)} className="nav-close-app nodrag" op="max">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                stroke="white"
                fill="white"
                strokeWidth={0}
                d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z"
              />
            </svg>
          </button>
          <button onClick={(e) => action(e)} className="nav-close-app nodrag" op="close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div className="navbar">
        <nav>
          <a>
            <Link to={window.location.origin}>
              <img src={logo} className="logo" alt="logo" />{" "}
            </Link>
          </a>
          <nav>
            <div className="interactive-bar">
              <div className="interactive-bar-left">
                <img src={menuIcon}></img>
              </div>

              <Link className="no-decoration" to="/">
                <h1
                  className={
                    location.pathname === "/"
                      ? "active"
                      : "title-interactivebar"
                  }
                >
                  INICIO
                </h1>
              </Link>
              <Link className="no-decoration" to="/library">
                <h1
                  className={
                    location.pathname === "/library"
                      ? "active"
                      : "title-interactivebar"
                  }
                >
                  BIBLIOTECA
                </h1>
              </Link>

              <Link
                className="no-decoration"
                to={
                  location.pathname.startsWith("/instance/")
                    ? "/discover"
                    : "/discover"
                }
              >
                <h1
                  className={
                    location.pathname.startsWith("/instance/") ||
                      location.pathname == "/discover"
                      ? "active"
                      : "title-interactivebar"
                  }
                >
                  EXPLORA
                </h1>
              </Link>
            </div>
          </nav>
        </nav>

        <nav>
          <div className="profile-navbar">
            {/*
          <div className="search-container">
            <div className="input-search">
            <img className="search-img" src={searchIcon}></img>
            <input
              className="input-search-2"
              type="text"
              placeholder="Escribe para buscar"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
              
            />

            </div>
        
            
            {showDropdown && searchTerm.trim() !== "" && (
              <ul className="dropdown">
                {searchResults.map((item, index) => (
                  <li key={index} onClick={() => handleItemClick(item.title)}>
                    <a className="search-item-2" href={item.link}>
                      <img src={item.image} className="search-image" />
                      <div className="item-content">
                        <span>{item.title}</span>
                        <p className="item-desc">{item.desc}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div> */}

            {isAuthenticated ? (
              <div className="right-navbar">
                <RecentPlayName />
                <Link to="/search">
                  <img
                    src={searchIcon}
                    className={
                      location.pathname.startsWith("/search")
                        ? "search-icon-active"
                        : "search-icon"
                    }
                  ></img>
                </Link>
                <Link to="/settings">
                  <img
                    src={settingsIcon}
                    className={
                      location.pathname.startsWith("/settings")
                        ? "search-icon-active"
                        : "search-icon"
                    }
                  ></img>
                </Link>
                <button onClick={toggleSidebar} className="nav-user-profile">
                  <h3 className="title-little no-decoration">{user.nickname}</h3>
                  <img className="usericon" src={user.picture} />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <img className="usericon" src={usericon} />
              </Link>
            )}
          </div>
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={toggleSidebar}
            content={
              <div>
                {isAuthenticated && (
                  <div>
                    <div className="sidebar-zone1">
                      <div className="sidebar-picture">
                        <img src={user.picture}></img>
                      </div>
                    </div>
                    <img className='sidebar-background' src="https://cdn.discordapp.com/attachments/910002249651077150/1178107004745682944/Merry-Christmas6_6838525_lrg.jpg?ex=6574f0a6&is=65627ba6&hm=c437a99f08f83a7840cfe7f2e99ccf57adea3942de5f67a35558be962b4524ca&"></img>
                    <SeparateShort />

                    <div>
                      <div className="sidebar-profile">

                        <div>

                          <h1>{user.nickname}</h1>
                          <p>{user.email}</p>
                          <button
                            className="button-little"
                            onClick={() =>
                              logout({
                                logoutParams: {
                                  returnTo: window.location.origin,
                                },
                              })
                            }
                          >
                            Cerrar Sesion
                          </button>
                        </div>


                      </div>
                    </div>
                  </div>
                )}
              </div>
            }
          />
        </nav>
      </div>
    </header>
  );
};
