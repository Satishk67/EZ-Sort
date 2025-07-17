import "./Details.css";
function Details(props) {
  const bullet = (
    <svg
      width="28px"
      height="28px"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      fill="var(--text-color)"
      stroke="var(--text-color)"
      stroke-width="0.72"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <title>code</title>{" "}
        <g id="Layer_2" data-name="Layer 2">
          {" "}
          <g id="invisible_box" data-name="invisible box"></g>{" "}
          <g id="icons_Q2" data-name="icons Q2">
            {" "}
            <path d="M20,40h-.5a2,2,0,0,1-1.4-2.5l8-27.9a2,2,0,0,1,3.8,1l-8,28A1.9,1.9,0,0,1,20,40Z"></path>{" "}
            <path d="M14,35a2,2,0,0,0,1.3-3.5L7,24l8.3-7.5a2,2,0,0,0-2.6-3l-10,9a2,2,0,0,0,0,3l10,9A1.9,1.9,0,0,0,14,35Z"></path>{" "}
            <path d="M34,35a2,2,0,0,1-1.3-3.5L41,24l-8.3-7.5a2,2,0,1,1,2.6-3l10,9a2,2,0,0,1,0,3l-10,9A1.9,1.9,0,0,1,34,35Z"></path>{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );
  return (
    <section className="info-box" id="AboutUs">
      <div className="info grid">
        <div className="heading" data-aos="fade-up">About Us</div>
        <ul className="details grid">
          <li data-aos="fade-up">
            {bullet}EZ Sort is a web application that helps users to understand
            the working of sorting algorithms(for now).
          </li>
          <li data-aos="fade-up">{bullet}It is a one stop solution for all sorting algorithms.</li>
          <li data-aos="fade-up">
            {bullet}Also you get to know about the time complexity and space
            complexity of the sorting algorithms along with the visual
            animation.{" "}
          </li>
          <li data-aos="fade-up">
            {bullet}We also provide you the code in different languages with
            explanation.
          </li>
          <li data-aos="fade-up">
            {bullet}And to check you understanding we are providing you the set
            important questions and documentation regarding the algorithms to
            make your understanding better.
          </li>
          <li data-aos="fade-up">
            {bullet}And after every algorithm you get to know a special fact
            related to the algorithm to make your interest.
          </li>
          <li data-aos="fade-up">
            {bullet}Here you will get to know about two types of Sorting
            Algorithms Based on their time complexity. These are Logarithmic &
            Quadratic Algorithm.
          </li>
          <li data-aos="fade-up">
            {bullet}In Quadratic Algorithm, you will get to know about Bubble
            Sort, Insertion Sort and Selection Sort. Time complexity of these
            algorithms is <b>O(N^2)</b>.
          </li>
          <li data-aos="fade-up">
            {bullet}In Logarithmic Algorithm, you will get to know about Merge
            Sort, Heap Sort, Quick Sort. Time complexity of these algorithms is{" "}
            <b>O(N*log(N))</b>.
          </li>
        </ul>
        <button className="side-menu-btn" onClick={()=>{props.toggleSidebar(),props.setSortName(null)}} data-aos="fade-up">
          Get Started
        </button>
      </div>
    </section>
  );
}
export default Details;
