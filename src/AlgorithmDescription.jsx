import "./AlgorithmDescription.css";
import "./Details.css";
// algorithm name should be passed
function AlgorithmDescription(props) {
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

  const bulb = (
    <svg viewBox="7 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path
          d="M22.63 4.81C21.7696 3.92124 20.7393 3.2145 19.6003 2.73177C18.4614 2.24905 17.237 2.0002 16 2C13.6131 2 11.3239 2.94821 9.63604 4.63604C7.94821 6.32387 7 8.61305 7 11C7.08565 12.681 7.56521 14.3184 8.4 15.78C8.66 16.32 8.9 16.84 9.1 17.37L11.1 22.37C11.1721 22.5514 11.2958 22.7077 11.4557 22.8197C11.6157 22.9316 11.8049 22.9943 12 23H20C20.2003 23.0002 20.396 22.9402 20.5618 22.8279C20.7276 22.7156 20.8559 22.5561 20.93 22.37L22.93 17.37C23.15 16.8 23.39 16.27 23.63 15.75C24.4114 14.2789 24.878 12.6613 25 11C25.0449 9.86149 24.8579 8.72574 24.4505 7.66167C24.0431 6.5976 23.4237 5.62742 22.63 4.81Z"
          fill="#ffe70f"
        ></path>{" "}
        <path
          d="M20 24H12C11.7348 24 11.4804 24.1054 11.2929 24.2929C11.1054 24.4804 11 24.7348 11 25V28C10.9996 28.1874 11.0519 28.3712 11.1509 28.5303C11.25 28.6894 11.3917 28.8175 11.56 28.9L13.56 29.9C13.6971 29.9664 13.8476 30.0006 14 30H18C18.1557 30.0022 18.3098 29.9679 18.45 29.9L20.45 28.9C20.6164 28.8161 20.7561 28.6874 20.8533 28.5284C20.9505 28.3694 21.0013 28.1864 21 28V25C21 24.7348 20.8946 24.4804 20.7071 24.2929C20.5196 24.1054 20.2652 24 20 24Z"
          fill="#ee3f3f"
        ></path>{" "}
        <path
          d="M20 14H12C11.8301 14.0003 11.6628 13.9574 11.5141 13.8751C11.3654 13.7929 11.2401 13.6741 11.15 13.53C11.0622 13.378 11.016 13.2055 11.016 13.03C11.016 12.8545 11.0622 12.682 11.15 12.53L13.15 8.53C13.2326 8.37471 13.3546 8.24395 13.5038 8.1509C13.6531 8.05785 13.8242 8.0058 14 8H18C18.2652 8 18.5196 8.10536 18.7071 8.29289C18.8946 8.48043 19 8.73478 19 9C19 9.26522 18.8946 9.51957 18.7071 9.70711C18.5196 9.89464 18.2652 10 18 10H14.65L13.65 12H20C20.2652 12 20.5196 12.1054 20.7071 12.2929C20.8946 12.4804 21 12.7348 21 13C21 13.2652 20.8946 13.5196 20.7071 13.7071C20.5196 13.8946 20.2652 14 20 14Z"
          fill="#ec1313"
        ></path>{" "}
        <path
          d="M16 18C15.7348 18 15.4804 17.8946 15.2929 17.7071C15.1054 17.5196 15 17.2652 15 17V13C15 12.7348 15.1054 12.4804 15.2929 12.2929C15.4804 12.1054 15.7348 12 16 12C16.2652 12 16.5196 12.1054 16.7071 12.2929C16.8946 12.4804 17 12.7348 17 13V17C17 17.2652 16.8946 17.5196 16.7071 17.7071C16.5196 17.8946 16.2652 18 16 18Z"
          fill="#ec1313"
        ></path>{" "}
        <path
          d="M16 2C13.6131 2 11.3239 2.94821 9.63604 4.63604C7.94821 6.32387 7 8.61305 7 11C7.08237 12.6744 7.55128 14.3071 8.37 15.77C8.63072 16.2909 8.86436 16.825 9.07 17.37L11.07 22.37C11.1441 22.5561 11.2724 22.7156 11.4382 22.8279C11.604 22.9402 11.7997 23.0002 12 23H16V2Z"
          fill="#ffe70f"
        ></path>{" "}
        <path
          d="M12 24C11.7348 24 11.4804 24.1054 11.2929 24.2929C11.1054 24.4804 11 24.7348 11 25V28C11.0006 28.1847 11.0522 28.3656 11.1493 28.5227C11.2464 28.6798 11.3851 28.8069 11.55 28.89L13.55 29.89C13.6893 29.9614 13.8435 29.9991 14 30H16V24H12Z"
          fill="#f52d0a"
        ></path>{" "}
        <path
          d="M18 10C18.2652 10 18.5196 9.89464 18.7071 9.70711C18.8946 9.51957 19 9.26522 19 9C19 8.73478 18.8946 8.48043 18.7071 8.29289C18.5196 8.10536 18.2652 8 18 8H16V10H18Z"
          fill="#ee3f3f"
        ></path>{" "}
        <path
          d="M20 12H16V14H20C20.2652 14 20.5196 13.8946 20.7071 13.7071C20.8946 13.5196 21 13.2652 21 13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12Z"
          fill="#ee3f3f"
        ></path>{" "}
        <path
          d="M13.6 12L14.6 10H16V8.00002H14C13.8136 7.99873 13.6306 8.04954 13.4716 8.14672C13.3126 8.2439 13.1839 8.38359 13.1 8.55002L11.1 12.55C11.0197 12.7064 10.9821 12.8812 10.9908 13.0567C10.9996 13.2323 11.0545 13.4024 11.15 13.55C11.2424 13.6904 11.3688 13.8053 11.5173 13.8839C11.6659 13.9626 11.8319 14.0025 12 14H16V12H13.6Z"
          fill="#f52d0a"
        ></path>{" "}
        <path
          d="M15 13V17C15 17.2652 15.1054 17.5196 15.2929 17.7071C15.4804 17.8946 15.7348 18 16 18V12C15.7348 12 15.4804 12.1054 15.2929 12.2929C15.1054 12.4804 15 12.7348 15 13Z"
          fill="#f52d0a"
        ></path>{" "}
        <path
          d="M16 12V18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12Z"
          fill="#ee3f3f"
        ></path>{" "}
      </g>
    </svg>
  );

  const clock = (
    <svg
      width="67px"
      height="67px"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M548.195 513.698m-251.76 0a251.76 251.76 0 1 0 503.52 0 251.76 251.76 0 1 0-503.52 0Z"
          fill="#ED8F27"
        ></path>
        <path
          d="M548.195 513.698m-204.584 0a204.584 204.584 0 1 0 409.168 0 204.584 204.584 0 1 0-409.168 0Z"
          fill="#FCE3C3"
        ></path>
        <path
          d="M549.245 737.504c-123.071 0-223.194-100.123-223.194-223.194 0-123.071 100.123-223.2 223.194-223.2 123.071 0 223.2 100.13 223.2 223.2 0.001 123.071-100.129 223.194-223.2 223.194z m0-424.602c-111.054 0-201.402 90.354-201.402 201.408s90.347 201.402 201.402 201.402 201.408-90.347 201.408-201.402-90.354-201.408-201.408-201.408z"
          fill="#300604"
        ></path>
        <path
          d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583z"
          fill="#300604"
        ></path>
        <path
          d="M549.245 784.679c-149.085 0-270.368-121.284-270.368-270.368s121.284-270.375 270.368-270.375S819.62 365.227 819.62 514.311 698.329 784.679 549.245 784.679z m0-518.952c-137.068 0-248.576 111.516-248.576 248.583 0 137.068 111.508 248.576 248.576 248.576 137.067 0 248.583-111.508 248.583-248.576 0-137.067-111.516-248.583-248.583-248.583zM290.873 321.06l-17.437-13.067c34.994-46.713 81.516-84.02 134.528-107.89l8.953 19.877c-49.672 22.359-93.249 57.31-126.044 101.08zM808.717 322.535c-60.66-81.941-157.661-130.86-259.472-130.86v-21.792c108.685 0 212.234 52.218 276.993 139.685l-17.521 12.967z"
          fill="#300604"
        ></path>
        <path
          d="M538.349 329.168h21.792v27.163h-21.792zM466.097 348.541l13.584 23.523-18.87 10.897-13.583-23.523zM394.376 412.315L417.9 425.9l-10.897 18.87-23.524-13.586zM364.109 503.414h27.163v21.792h-27.163zM406.996 583.883l10.897 18.87-23.524 13.584-10.897-18.87zM460.813 645.69l18.87 10.897-13.586 23.524-18.869-10.896zM538.349 672.283h21.792v27.163h-21.792zM637.655 645.688l13.584 23.524-18.869 10.897-13.585-23.524zM691.533 583.876l23.523 13.585-10.896 18.869-23.524-13.584zM707.225 503.414h27.163v21.792h-27.163zM704.148 412.324l10.896 18.87-23.523 13.584-10.896-18.87zM632.383 348.552l18.869 10.897-13.584 23.523-18.87-10.897z"
          fill="#300604"
        ></path>
        <path
          d="M517.72 588.03l-18.685-11.209 39.314-65.526V398.51h21.792v118.815z"
          fill="#300604"
        ></path>
        <path
          d="M331.228 654.924c-11.722 8.299-26.001 13.221-41.456 13.221-39.703 0-71.888-32.185-71.888-71.888s32.185-71.888 71.888-71.888c0.086 0 0.169 0.012 0.255 0.012-0.129-3.347-0.255-6.696-0.255-10.075 0-35.131 7.018-68.612 19.669-99.169-1.194-1.204-2.828-1.956-4.632-1.956h-30.074a6.542 6.542 0 0 0-6.477 5.617l-3.947 27.625c-0.393 2.753-2.495 4.911-5.216 5.487a146.275 146.275 0 0 0-38.469 13.999c-2.456 1.307-5.453 1.004-7.524-0.853l-20.776-18.622a6.542 6.542 0 0 0-8.572-0.14l-23.039 19.331a6.544 6.544 0 0 0-1.351 8.467l14.745 23.717c1.468 2.362 1.247 5.365-0.466 7.556a147.124 147.124 0 0 0-20.512 35.441c-1.043 2.575-3.53 4.266-6.307 4.175l-27.863-0.909a6.543 6.543 0 0 0-6.657 5.403l-5.222 29.617a6.542 6.542 0 0 0 4.407 7.354l26.543 8.691c2.643 0.866 4.407 3.309 4.503 6.089 0.455 13.258 2.662 26.89 6.836 40.684 0.788 2.606-0.049 5.43-2.191 7.111l-21.659 17.002a6.542 6.542 0 0 0-1.626 8.418l15.036 26.045a6.544 6.544 0 0 0 8.105 2.8l23.907-9.595c2.542-1.021 5.479-0.375 7.287 1.683a132.81 132.81 0 0 0 33.071 27.201c2.41 1.401 3.61 4.224 3.036 6.952l-5.402 25.7a6.542 6.542 0 0 0 4.165 7.494l28.261 10.286a6.543 6.543 0 0 0 8.008-3.063l13.15-24.596c1.303-2.437 3.992-3.748 6.729-3.379 14.066 1.9 27.813 1.82 41.002-0.013 2.751-0.383 5.458 0.928 6.767 3.378l13.157 24.61a6.544 6.544 0 0 0 8.009 3.063l28.26-10.286a6.542 6.542 0 0 0 4.165-7.494l-5.738-27.304c-0.572-2.717 0.66-5.46 3.012-6.934 4.536-2.842 8.851-5.994 13.037-9.299a260.63 260.63 0 0 1-49.691-56.766z"
          fill="#B12800"
        ></path>
        <path
          d="M335.947 784.302a17.426 17.426 0 0 1-15.38-9.215l-11.747-21.976c-11.896 1.489-25.24 1.532-38.108 0.028l-11.74 21.941c-3.987 7.477-13.336 11.087-21.338 8.165l-28.254-10.286c-8.115-2.944-12.89-11.535-11.102-19.984l4.76-22.644a143.2 143.2 0 0 1-30.865-25.389l-21.076 8.456c-7.888 3.164-17.38-0.156-21.601-7.456l-15.032-26.048c-4.321-7.47-2.455-17.118 4.334-22.445l19.324-15.174c-3.554-12.499-5.689-25.161-6.349-37.725l-23.672-7.746c-8.2-2.688-13.245-11.124-11.74-19.615l5.213-29.61a17.406 17.406 0 0 1 17.167-14.408l25.424 0.823a158.128 158.128 0 0 1 19.097-33.001l-13.152-21.147c-4.555-7.321-3.008-17.026 3.604-22.572l23.04-19.331c6.399-5.377 16.579-5.228 22.835 0.369l18.537 16.614a157.282 157.282 0 0 1 35.831-13.038l3.511-24.63c1.227-8.541 8.647-14.975 17.266-14.975h30.078c4.667 0 9.066 1.844 12.372 5.192l5.086 5.143-2.767 6.682c-12.499 30.199-18.834 62.163-18.834 95.008 0 3.235 0.128 6.448 0.248 9.655l0.433 11.315-11.946-0.015c-33.462 0.198-60.624 27.482-60.624 60.993 0 33.632 27.361 60.993 60.992 60.993 12.634 0 24.793-3.88 35.165-11.223l9.278-6.562 6.164 9.541a249.64 249.64 0 0 0 47.614 54.396l10.101 8.619-10.428 8.222c-4.086 3.221-7.882 5.988-11.52 8.385l5.121 24.361c1.781 8.427-2.986 17.018-11.094 19.969l-28.269 10.286a17.19 17.19 0 0 1-5.957 1.059z m-24.75-53.303c6.477 0 12.385 3.519 15.429 9.187l11.379 21.295 21.161-7.704-4.958-23.608c-1.49-7.13 1.681-14.522 7.895-18.416 0.496-0.312 1.007-0.631 1.511-0.965a271.513 271.513 0 0 1-35.597-41.145c-11.776 6.179-24.808 9.4-38.243 9.4-45.648 0-82.785-37.136-82.785-82.785 0-41.953 31.369-76.72 71.888-82.069 0.015-30.965 5.207-61.205 15.458-90.113h-15.826l-3.405 23.884c-1.05 7.229-6.576 13.096-13.762 14.614a135.666 135.666 0 0 0-35.604 12.953c-6.307 3.369-14.578 2.433-19.912-2.362l-17.962-16.096-17.252 14.478 12.755 20.509c3.845 6.193 3.384 14.237-1.149 20.026a136.396 136.396 0 0 0-18.983 32.816c-2.703 6.668-9.059 10.981-16.195 10.981l-24.658-0.795-3.909 22.182 22.949 7.513c6.938 2.27 11.761 8.733 12.003 16.089 0.433 12.563 2.575 25.318 6.378 37.895 2.114 6.974-0.206 14.365-5.896 18.827l-18.685 14.678 11.258 19.5 20.408-8.186c6.704-2.703 14.791-0.802 19.537 4.618a121.916 121.916 0 0 0 30.354 24.957c6.469 3.745 9.775 11.23 8.222 18.614l-4.618 22.005 21.154 7.696 11.378-21.26c3.412-6.371 10.47-10.01 17.791-9.038 12.741 1.717 25.602 1.703 38.052-0.007a17.99 17.99 0 0 1 2.439-0.168z"
          fill="#300604"
        ></path>
        <path
          d="M289.773 679.044c-45.648 0-82.785-37.136-82.785-82.785 0-45.649 37.136-82.785 82.785-82.785l10.747 0.015 0.397 10.477c1.695 44.493 15.344 87.73 39.463 125.044l5.668 8.775-8.527 6.037c-14.066 9.958-30.581 15.222-47.748 15.222z m-9.967-142.963c-28.907 4.767-51.026 29.936-51.026 60.177 0 33.632 27.361 60.993 60.992 60.993a60.389 60.389 0 0 0 26.375-6.03c-20.649-35.093-33.078-74.492-36.341-115.14z"
          fill="#300604"
        ></path>
        <path
          d="M429.547 797.744l14.721 16.069-20.626 18.884 8.54 26.565-20.744 6.676-12.822-39.878z"
          fill="#231F20"
        ></path>
        <path
          d="M828.102 350.896l18.972-10.716c28.714 50.816 44.182 108.407 44.738 166.543l-21.799 0.211c-0.515-54.47-15.01-108.419-41.911-156.038z"
          fill="#300604"
        ></path>
        <path
          d="M548.575 863.313c-48.041 0-94.539-9.684-138.204-28.784l8.61-19.685c40.933 17.905 84.534 26.983 129.593 26.983 80.613 0 157.852-29.814 217.489-83.952 59.229-53.767 96.333-126.999 104.48-206.208l21.373 2.197c-8.689 84.485-48.256 162.588-111.412 219.919-63.598 57.736-145.965 89.53-231.929 89.53z"
          fill="#300604"
        ></path>
      </g>
    </svg>
  );

  const suitcase = (
    <svg
      width="55px"
      viewBox="0 0 1024 1024"
      class="icon"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          d="M823.694222 212.297956H202.592711c-32.551822 0-58.936889 26.282667-58.936889 58.709333v388.380444c0 32.426667 26.385067 58.697956 58.936889 58.697956h621.090133c32.540444 0 58.936889-26.282667 58.936889-58.697956V271.007289c0-32.426667-26.396444-58.709333-58.925511-58.709333z"
          fill="#47A7DD"
        ></path>
        <path
          d="M195.026489 659.387733V271.007289c0-32.426667 26.385067-58.709333 58.936889-58.709333h-51.370667c-32.551822 0-58.936889 26.282667-58.936889 58.709333v388.380444c0 32.426667 26.385067 58.697956 58.936889 58.697956h51.370667c-32.551822 0-58.936889-26.271289-58.936889-58.697956z"
          fill="#3F9EC9"
        ></path>
        <path
          d="M95.414044 718.085689h835.458845v72.817778H95.414044z"
          fill="#E6E6E6"
        ></path>
        <path
          d="M152.553244 856.837689a66.184533 65.922844 0 1 0 132.369067 0 66.184533 65.922844 0 1 0-132.369067 0Z"
          fill="#999999"
        ></path>
        <path
          d="M741.341867 856.837689a66.195911 65.922844 0 1 0 132.391822 0 66.195911 65.922844 0 1 0-132.391822 0Z"
          fill="#999999"
        ></path>
        <path
          d="M672.199111 109.511111v102.786845h-50.028089V153.258667H404.115911v59.039289h-50.028089V109.511111a31.106844 31.106844 0 0 1 31.163734-31.038578h255.783822a31.106844 31.106844 0 0 1 31.163733 31.038578z"
          fill="#999999"
        ></path>
        <path
          d="M220.410311 349.855289l157.3888-52.610845 36.807111 110.125512-157.3888 52.599466z"
          fill="#EADAC5"
        ></path>
        <path
          d="M930.861511 703.328711h-48.116622a72.851911 72.851911 0 0 0 14.677333-43.940978V422.889244a14.791111 14.791111 0 0 0-14.813866-14.756977 14.791111 14.791111 0 0 0-14.825245 14.756977v236.509867c0 24.234667-19.797333 43.940978-44.123022 43.940978H202.592711c-24.325689 0-44.111644-19.706311-44.111644-43.940978V271.007289c0-24.234667 19.785956-43.940978 44.111644-43.940978h621.090133c24.325689 0 44.111644 19.706311 44.111645 43.940978v100.704711a14.791111 14.791111 0 0 0 14.825244 14.768356 14.791111 14.791111 0 0 0 14.825245-14.768356v-100.704711c0-40.504889-33.086578-73.466311-73.750756-73.466311H687.012978V109.511111C687.012978 84.263822 666.373689 63.715556 641.024 63.715556H385.251556c-25.361067 0-45.9776 20.548267-45.9776 45.795555v88.029867H202.592711c-40.664178 0-73.750756 32.950044-73.750755 73.466311v388.380444c0 16.463644 5.461333 31.675733 14.688711 43.940978H95.414044a14.791111 14.791111 0 0 0-14.813866 14.756978v72.817778a14.791111 14.791111 0 0 0 14.813866 14.756977h60.734578a80.167822 80.167822 0 0 0-18.420622 51.177245c0 44.487111 36.340622 80.6912 81.009778 80.6912s81.009778-36.204089 81.009778-80.6912a80.145067 80.145067 0 0 0-18.420623-51.177245h59.915378c8.192 0 14.825244-6.599111 14.825245-14.756977s-6.633244-14.756978-14.825245-14.756978H110.227911V732.842667h805.808356v43.3152h-515.527111c-8.192 0-14.825244 6.599111-14.825245 14.756977s6.633244 14.756978 14.825245 14.756978h344.428088a80.133689 80.133689 0 0 0-18.409244 51.177245c0 44.487111 36.329244 80.6912 80.9984 80.6912s81.009778-36.204089 81.009778-80.6912a80.145067 80.145067 0 0 0-18.420622-51.177245h60.745955a14.791111 14.791111 0 0 0 14.813867-14.756978v-72.817777a14.791111 14.791111 0 0 0-14.813867-14.768356zM607.345778 197.540978H418.929778V168.027022h188.416v29.513956zM368.901689 109.511111c0-8.977067 7.338667-16.2816 16.349867-16.2816h255.783822c9.0112 0 16.349867 7.304533 16.349866 16.2816v88.029867h-20.400355V153.258667a14.791111 14.791111 0 0 0-14.813867-14.756978H404.115911a14.791111 14.791111 0 0 0-14.813867 14.756978v44.282311h-20.388977V109.511111zM270.108444 856.849067c0 28.205511-23.04 51.165867-51.370666 51.165866S167.367111 885.054578 167.367111 856.849067c0-28.216889 23.04-51.177244 51.370667-51.177245s51.370667 22.948978 51.370666 51.177245z m588.8 0c0 28.205511-23.04 51.165867-51.382044 51.165866-28.319289 0-51.370667-22.960356-51.370667-51.165866 0-28.216889 23.04-51.177244 51.370667-51.177245 28.342044 0 51.382044 22.948978 51.382044 51.177245z"
          fill=""
        ></path>
        <path
          d="M319.829333 439.045689c2.594133 7.736889 10.990933 11.901156 18.750578 9.3184l80.827733-26.908445a14.7456 14.7456 0 0 0 9.352534-18.682311l-36.955022-110.125511a14.836622 14.836622 0 0 0-18.761956-9.329778l-157.411556 52.406045a14.7456 14.7456 0 0 0-9.352533 18.682311l36.9664 110.125511a14.791111 14.791111 0 0 0 18.761956 9.3184l25.622755-8.533333c7.759644-2.582756 11.946667-10.945422 9.352534-18.682311s-10.979556-11.901156-18.750578-9.3184l-11.5712 3.845689-27.556978-82.1248 129.297067-43.053512 27.556977 82.136178-66.7648 22.232178a14.791111 14.791111 0 0 0-9.363911 18.693689z"
          fill=""
        ></path>
      </g>
    </svg>
  );

  const algo = props.sortName;

  const BonusFact = {
    "Bubble Sort":
      "Bubble Sort is like a hot tub of bubbles 🔵 — it slowly floats the biggest number to the top in each round!",
    "Selection Sort":
      "Selection Sort acts like a picky shopper, scanning the whole store every time just to pick the next best deal.",
    "Insertion Sort":
      "Insertion Sort 📥 behaves like someone sorting playing cards mid-game — simple, direct, and surprisingly effective for small decks!",
    "Merge Sort":
      "Merge Sort is the OG divide-and-conquer master, inspired by recursion long before it was cool!",
    "Quick Sort": "Despite its name, Quick Sort can actually be slower than Merge Sort in the worst case.",
    "Heap Sort":
      "Heap Sort builds a binary tree party where the biggest guest always leaves first!",
  };

  const Description = {
    "Bubble Sort":
      "Bubble Sort is a simple sorting algorithm that works by repeatedly swapping adjacent elements if they are in the wrong order. It continues to pass through the list until no more swaps are needed, indicating that the list is sorted. Although easy to understand and implement, it is inefficient for large datasets due to its quadratic time complexity. It is mainly used for educational purposes to demonstrate basic sorting logic.",

    "Selection Sort":
      "Selection Sort is a simple comparison-based algorithm that works by repeatedly finding the minimum element from the unsorted portion and placing it at the beginning. It sorts the array in-place and does not require extra memory, but it is not stable by default. The time complexity is always O(n²) regardless of the input, making it inefficient for large datasets, but useful for educational purposes.",

    "Insertion Sort":
      "Insertion Sort builds the sorted array one element at a time by picking each element and placing it in its correct position among the already sorted elements. It is efficient for small datasets or nearly sorted arrays, with a best-case time complexity of O(n). It is a stable, in-place algorithm, making it suitable where memory efficiency and stability are important.",

    "Merge Sort":
      "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, recursively sorts them, and merges the sorted halves. It is a stable sorting algorithm with consistent O(n log n) time complexity, even in the worst case. However, it requires additional space for merging, so it is not an in-place sort. Merge Sort is preferred when stability is needed and memory usage is not a limitation.",

    "Quick Sort":
      "Quick Sort is a fast, divide-and-conquer sorting algorithm that picks a pivot and partitions the array into two halves—elements smaller and larger than the pivot—and recursively sorts them. It is very efficient in practice with an average time complexity of O(n log n), but can degrade to O(n²) in the worst case if the pivot is poorly chosen. It is not a stable sort but is in-place and widely used in real-world applications.",

    "Heap Sort":
      "Heap Sort uses a binary heap data structure to sort elements. It builds a max-heap from the input data and repeatedly extracts the largest element to place it in the correct position. It is an in-place sorting algorithm with a guaranteed time complexity of O(n log n). However, it is not stable and is mostly used when memory usage must be minimized and stability is not a concern.",
  };

  const SpaceComplexity = {
    "Bubble Sort": "O(1)",
    "Selection Sort": "O(1)",
    "Insertion Sort": "O(1)",
    "Merge Sort": "O(n)",
    "Quick Sort": "O(log n)",
    "Heap Sort": "O(1)",
  };

  const timeComplexity = {
    "Bubble Sort": ["O(n)","O(n*n)","O(n*n)"],
    "Selection Sort": ["O(n*n)","O(n*n)","O(n*n)"],
    "Insertion Sort": ["O(n)","O(n*n)","O(n*n)"],
    "Merge Sort": ["O(n*log(n))","O(n*log(n))","O(n*log(n))"],
    "Quick Sort": ["O(n*log(n))","O(n*log(n))","O(n*n)"],
    "Heap Sort": ["O(n*log(n))","O(n*log(n))","O(n*log(n))"],
  };

  return (
    <section className="info-box" id="AboutUs">
      <div className="grid">
        <div className="heading" data-aos="fade-up">
          Description
        </div>
        <div className="flexbox desc-bonus">
          <div className="description-text" data-aos="fade-up">
            {Description[props.sortName]}
          </div>
          <div className="bonus-fact" data-aos="fade-up">
            <div>
              <p
                style={{
                  marginBottom: "5px",
                  fontSize: "x-large",
                  fontFamily: "var(--buttons)",
                  color: "orange",
                }}
              >
                <b>Did U Know:</b>
              </p>
              <p data-aos="fade-up">{BonusFact[algo]}</p>
            </div>
            {bulb}
          </div>
        </div>
        <div
          className="heading"
          style={{ marginTop: "25px" }}
          data-aos="fade-up"
        >
          {bullet} CODE
        </div>
        <div className="flexbox code-complexity">
          <div className="codes" data-aos="fade-in">
            <div className="nav-btns flexbox">
              <button className="lang-btn cpp-btn" data-aos="fade-up">.Cpp</button>
              <button className="lang-btn js-btn" data-aos="fade-up">.js</button>
              <button className="lang-btn java-btn" data-aos="fade-up">.java</button>
              <button className="lang-btn py-btn" data-aos="fade-up">.py</button>
            </div>
            <div className="code" data-aos="fade-down">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui
              ullam fuga laudantium.
            </div>
          </div>

          <div className="complexity grid" data-aos="fade-in">
            <div className="time-complexity grid">
              <p className="time" data-aos="slide-right">{clock} Time Complexity :</p>
              <ul className="grid">
                <li data-aos="fade-up">
                  <b>Best Case [1 2 3...] : </b> &nbsp;{timeComplexity[algo][0]}
                </li>
                <li data-aos="fade-up">
                  <b>Average Case [2 3 1...] : </b> &nbsp;{timeComplexity[algo][1]}
                </li>
                <li data-aos="fade-up">
                  <b>Worst Case [3 2 1...] : </b> &nbsp;{timeComplexity[algo][2]}
                </li>
              </ul>
            </div>
            <div className="space-complexity">
              <p className="space" data-aos="slide-right">{suitcase} Space Complexity : </p>
              <li data-aos="fade-up"><b>All Cases : </b>&nbsp;{SpaceComplexity[algo]}</li>
            </div>
          </div>
        </div>
        <div
          className="heading"
          style={{ marginTop: "25px" }}
          data-aos="fade-up"
        >
          {bullet} Practice Questions
        </div>
        <ol className="grid question-list">
          <li data-aos="fade-up">1. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">2. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">3. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">4. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">5. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">6. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">7. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">8. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">9. &nbsp; Lorem, ipsum.</li>
          <li data-aos="fade-up">10. &nbsp; Lorem, ipsum.</li>
        </ol>
      </div>
    </section>
  );
}
export default AlgorithmDescription;
