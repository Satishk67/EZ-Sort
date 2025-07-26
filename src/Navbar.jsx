import "./Navbar.css";
import SigninBtn from "./SigninBtn";
import { useState } from "react";
function Navbar(props) {
//   Theme state
  const [theme, setTheme] = useState("dark");
//   Theme toggle function
  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.style.setProperty(
        "--bg-color",
        "rgba(255, 255, 255, 0.913)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(0, 0, 0, 0.86)"
      );
      document.documentElement.style.setProperty(
        "--navbar-color",
        "rgb(186, 174, 174)"
      );
      setTheme("light");
    } else {
      document.documentElement.style.setProperty(
        "--bg-color",
        "rgba(0, 0, 0, 0.86)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgba(255, 255, 255, 0.913)"
      );
      document.documentElement.style.setProperty(
        "--navbar-color",
        "rgb(21, 20, 20)"
      );
      setTheme("dark");
    }
  };
// Light Logo Svg code
  const lightlogo = (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g clipPath="url(#a)">
          {" "}
          <path d="M12 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1ZM4.929 3.515a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 0 0 1.414-1.414L4.93 3.515ZM1 11a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H1ZM18 12a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1ZM17.657 16.243a1 1 0 0 0-1.414 1.414l2.828 2.828a1 1 0 1 0 1.414-1.414l-2.828-2.828ZM7.757 17.657a1 1 0 1 0-1.414-1.414L3.515 19.07a1 1 0 1 0 1.414 1.414l2.828-2.828ZM20.485 4.929a1 1 0 0 0-1.414-1.414l-2.828 2.828a1 1 0 1 0 1.414 1.414l2.828-2.828ZM13 19a1 1 0 1 0-2 0v4a1 1 0 1 0 2 0v-4ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"></path>{" "}
        </g>{" "}
        <defs>
          {" "}
          <clipPath id="a">
            {" "}
            <path fill="#ffffff" d="M0 0h24v24H0z"></path>{" "}
          </clipPath>{" "}
        </defs>{" "}
      </g>
    </svg>
  );
  // Dark Logo Svg code
  const darklogo = (
    <svg
      viewBox="0 0 37 37"
      dataName="Layer 2"
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z"></path>
      </g>
    </svg>
  );

  return (
    <>
      <nav className="navbar flexbox" id="Navbar">
        {/* FlexBox - 1 */}
        <div className="list-row flexbox">
          <button className="sidebar-btn" onClick={()=>{props.toggleSidebar(),props.setSortName(null)}}>
            <svg
              fill="var(--text-color)"
              viewBox="0 0 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="5"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
                ></path>
              </g>
            </svg>
          </button>
          <a href="/" className="app-name">
            EZ SORT
          </a>
        </div>

        {/* FlexBox - 2 */}
        <ul className="list-row flexbox nav-tab">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#AboutUs">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>

        {/* FlexBox - 3 */}
        <ul className="list-row flexbox login-theme">
          <button className="theme-btn" onClick={toggleTheme} id="theme">
            {theme === "light" ? lightlogo : darklogo}
          </button>
          <SigninBtn/>
        </ul>
      </nav>

      {/* Side Menu */}
      <ul className="side-menu-list" id="side-menu-list" ref={props.sidebarRef}>
        <ul>
          <li className="subhead home-btn">
            <svg
              width="44"
              height="40"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 55 55"
              xml:space="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <g>
                    {" "}
                    <path d="M58.862,33.886L45.045,20.069v-9.112c0-1.136-0.921-2.056-2.056-2.056c-1.137,0-2.057,0.92-2.057,2.056v5.001L31.185,6.21 c-0.801-0.803-2.104-0.803-2.905,0L0.603,33.886c-0.803,0.804-0.803,2.104,0,2.907c0.802,0.803,2.104,0.803,2.907,0L29.732,10.57 l26.223,26.223c0.401,0.398,0.93,0.604,1.455,0.604c0.522,0,1.051-0.201,1.452-0.604C59.665,35.988,59.665,34.689,58.862,33.886z"></path>{" "}
                    <path d="M52.979,36.245L31.185,14.449c-0.385-0.385-0.908-0.602-1.454-0.602c-0.545,0-1.068,0.217-1.453,0.602L6.484,36.245 c-0.291,0.288-0.487,0.659-0.565,1.062c-0.061,0.314-0.091,0.633-0.091,0.942v10.638c0,2.739,2.229,4.971,4.969,4.971h10.638 c1.378,0,2.707-0.582,3.645-1.599c0.854-0.923,1.324-2.12,1.324-3.373v-7.812c0-1.896,1.453-3.48,3.33-3.658 c1.878,0.178,3.331,1.762,3.331,3.658v7.812c0,1.252,0.472,2.45,1.324,3.373c0.938,1.017,2.269,1.599,3.646,1.599h10.638 c2.74,0,4.971-2.229,4.971-4.972V38.252c0-0.312-0.031-0.63-0.092-0.941C53.471,36.904,53.271,36.533,52.979,36.245z"></path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <a href="/" style={{ fontSize: "xx-large" }}>
              EzSort
            </a>
          </li>
          <li className="subhead">Quadratic Sorts</li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Bubble Sort")}}>Bubble Sort</a>
</li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Selection Sort")}}>Selection Sort</a>
          </li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Insertion Sort")}}>Insertion Sort</a>
          </li>
        </ul>
        <ul>
          <li className="subhead">Logarithmic Sorts</li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Quick Sort")}}>Quick Sort</a>
          </li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Merge Sort")}}>Merge Sort</a>
          </li>
          <li className="sort-name">
            <a href="#Home" onClick={()=>{props.toggleSidebar(),props.whichSort("Heap Sort")}}>Heap Sort</a>
          </li>
        </ul>
      </ul>
    </>
  );
}
export default Navbar;