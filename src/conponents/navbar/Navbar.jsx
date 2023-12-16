import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { FaHome } from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import { MdOutlineRoundaboutLeft } from "react-icons/md";
import { FaBlog } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { useEffect, useRef, useState } from "react";
const Navbar = () => {
  const [hambarger, setHambarger] = useState(true);

  // DropDown hidden when click outside
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setHambarger(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    if (!hambarger) {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      console.log(hambarger);
    };
  }, [hambarger]);
  return (
    <div className="container" style={{zIndex: "99999"}}>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        {/* <div className="hambarger">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </div> */}
        {
          <nav ref={popupRef}>
            <div className="hambarger" onClick={() => setHambarger(!hambarger)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <ul
              // style={{ display: `${hambarger ? "flex" : "none"}` }}
              className={`${hambarger ? "display-block" : "display-none"}`}
            >
              <li>
                <a href="#" className="active">
                  <span>
                    <FaHome />
                  </span>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FcServices />
                  </span>
                  <span>Our services </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <MdOutlineRoundaboutLeft />
                  </span>
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <FaBlog />
                  </span>
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#" className="contact-us">
                  <span>
                    <GrContactInfo />
                  </span>
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
          </nav>
        }
      </div>
    </div>
  );
};

export default Navbar;
