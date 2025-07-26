import "./Hero.css";
import star from './assets/star_24dp_F19E39_FILL0_wght400_GRAD0_opsz24.svg';
import animation from "./assets/ForegroundAnimation.mp4";
function Hero() {
  return (
    <section className="hero-box flexbox" id="Home">
      <div className="title-box grid">
        <div className="title">
          <svg
            fill="#f25d2c"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="90px"
            height="90px"
            viewBox="-35 -120 450 450"
            xml:space="preserve"
            stroke="var(--text-color)"
            transform="rotate(0)matrix(-1, 0, 0, 1, 0, 0)"
            stroke-width="3.4614089999999997"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="var(--text-color)"
              stroke-width="7.999626000000001"
            >
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect y="248.954" width="40.92" height="94.819"></rect>{" "}
                  <rect
                    x="57.288"
                    y="136.994"
                    width="40.916"
                    height="206.779"
                  ></rect>{" "}
                  <rect
                    x="114.564"
                    y="230.372"
                    width="40.908"
                    height="113.401"
                  ></rect>{" "}
                  <rect
                    x="171.847"
                    y="40.828"
                    width="40.911"
                    height="302.945"
                  ></rect>{" "}
                  <rect
                    x="229.133"
                    y="136.994"
                    width="40.908"
                    height="206.779"
                  ></rect>{" "}
                  <rect
                    x="286.411"
                    y="102.588"
                    width="40.92"
                    height="241.185"
                  ></rect>{" "}
                  <rect
                    x="343.693"
                    y="298.341"
                    width="40.907"
                    height="45.432"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
            </g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <g>
                  {" "}
                  <rect y="248.954" width="40.92" height="94.819"></rect>{" "}
                  <rect
                    x="57.288"
                    y="136.994"
                    width="40.916"
                    height="206.779"
                  ></rect>{" "}
                  <rect
                    x="114.564"
                    y="230.372"
                    width="40.908"
                    height="113.401"
                  ></rect>{" "}
                  <rect
                    x="171.847"
                    y="40.828"
                    width="40.911"
                    height="302.945"
                  ></rect>{" "}
                  <rect
                    x="229.133"
                    y="136.994"
                    width="40.908"
                    height="206.779"
                  ></rect>{" "}
                  <rect
                    x="286.411"
                    y="102.588"
                    width="40.92"
                    height="241.185"
                  ></rect>{" "}
                  <rect
                    x="343.693"
                    y="298.341"
                    width="40.907"
                    height="45.432"
                  ></rect>{" "}
                </g>{" "}
              </g>{" "}
            </g>
          </svg>
          EZ SORT
        </div>
        <ul className="two-liner">
          <li><img src={star} alt="bullet"/>Let's sort out you issues with sorting algorithms.</li>
          <li><img src={star} alt="bullet"/>Experience the ease of sorting with EZ Sort.</li>
          <li><img src={star} alt="bullet"/>Make your learning intuitive & engaging with us.</li>
        </ul>
      </div>
      <div className="video-box">
        <video src={animation} autoPlay loop muted alt="Animation" loading="lazy"></video>
      </div>
    </section>
  );
}
export default Hero;