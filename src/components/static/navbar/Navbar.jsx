import { useState } from "react";
import '../css/layout.css'
import logo from "../../../assets/launcherweb.png";
import test from "../../../assets/icon/icon.png";
import usericon from "../../../assets/icon/usericon.png";
import "../css/search-bar.css";
import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const testData = [
  {
    title: "Minecraft Vanilla",
    image: test,
    desc: "Microsoft",
    link: "/",
  },
  {
    title: "Pagina de Login",
    image: test,
    desc: "Mi cuenta",
    link: "/login",
  }
];

export const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

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
      <a>
        <Link to="/">
          <img src={logo} className="logo" alt="logo" />{" "}
        </Link>
      </a>
      <nav>
        <ul>
          <div className="search-container">
            <input
              className="input-search"
              type="text"
              placeholder="🔍 Escribe para buscar"
              value={searchTerm}
              onChange={handleSearch}
              onFocus={() => setShowDropdown(true)}
            />
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
          </div>
          {isAuthenticated ? (
            <div>
              <Link to="/profile" className="nav-user-profile">
              <img className="usericon" src={user.picture} />
            </Link>
            </div>
          ) : (
            <Link to="/login">
              <img className="usericon" src={usericon} />
            </Link>
          )}
        </ul>
      </nav>
    </header>
  );
};
