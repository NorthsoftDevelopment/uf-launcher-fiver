import { useState } from "react";
import '../css/layout.css'
import logo from "../../../assets/launcherweb.png";
import test from "../../../assets/icon/icon.png";
import usericon from "../../../assets/icon/usericon.png";
import "../css/search-bar.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import searchIcon from '../../../assets/icon/Extra/search-white.png'
import menuIcon from '../../../assets/icon/Extra/menu-icon.png'
import settingsIcon from '../../../assets/icon/Extra/settings-icon.png'
import Sidebar from "../../Profile/ProfileBar";

const testData = [
  {
    title: "Pagina de Login",
    image: test,
    desc: "Mi cuenta",
    link: "/login",
  },

];

export const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
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

  return (
    <header>
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

              <Link className="no-decoration" to='/'>
                <h1 className={location.pathname === '/' ? 'active' : 'title-interactivebar'}>INICIO</h1>
              </Link>
              <Link className="no-decoration" to='/library'>
                <h1 className={location.pathname === '/library' ? 'active' : 'title-interactivebar'}>BIBLIOETECA</h1>
              </Link>
              <Link className="no-decoration" to={location.pathname.startsWith('/instance/') ? '/discover' : '/discover'}>
                <h1 className={location.pathname.startsWith('/instance/') ? 'active' : 'title-interactivebar'}>EXPLORA</h1>
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
                <Link to='/search'>
                <img src={searchIcon} className={location.pathname.startsWith('/search') ? 'search-icon-active' : 'search-icon'} ></img>
                </Link>
                <Link to='/settings'>
                  <img src={settingsIcon} className={location.pathname.startsWith('/settings') ? 'search-icon-active' : 'search-icon'}></img>
                </Link>
                <button onClick={toggleSidebar} className="nav-user-profile">
                  <h3 className="title-little no-decoration">{user.name}</h3>
                  <img className="usericon" src={user.picture} />
                </button>
              </div>
            ) : (
              <Link to="/login">
                <img className="usericon" src={usericon} />
              </Link>
            )}
          </div>
          <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        </nav>
      </div>
    </header>
  );
};
