import "./SortingHero.css";
import Sketch from "./Sketch";
import { useState, useEffect , useRef} from "react";
import {
  BubbleSort,
  InsertionSort,
  SelectionSort,
  MergeSort,
  QuickSort,
  HeapSort,
} from "./SortingAlgorithms";

function SortingHero(props) {
  const [arrsize, setArrSize] = useState(50);
  const [speed, setSpeed] = useState(50);
  const [array, setArray] = useState([]);
  const stopBtn = useRef(null);

  // Helper to generate a random array
  const generateRandomArray = (size) => {
    const Height = window.innerHeight;
    return Array.from(
      { length: size },
      () => Math.floor(Math.random() * 0.95 * (Height - 200)) + 200
    );
  };

  const colorArray = [array.length];
  for (let i = 0; i < array.length; i++) {
    colorArray[i] = `hsla(${Math.random() * 360}, 95%, 40%, 0.85)`;
  }

  // Initialize array on mount or when arrsize changes
  useEffect(() => {
    setArray(generateRandomArray(arrsize));
  }, [arrsize]);
  
    const Randomise = () => {
      stopBtn.current = true;
      setArray(generateRandomArray(arrsize));
    };
  
  const ClickMotion = () => {
    document.getElementById("random-btn").style.transform = "scale(0.8)";
    setTimeout(() => {
      document.getElementById("random-btn").style.transform = "scale(1)";
    }, 100);
  };

  const ClickMotion2 = () => {
    document.getElementById("start-btn").style.transform = "scale(0.8)";
    setTimeout(() => {
      document.getElementById("start-btn").style.transform = "scale(1)";
    }, 100);
  };

  const ClickMotion3 = () => {
    document.getElementById("stop-btn").style.transform = "scale(0.8)";
    setTimeout(() => {
      document.getElementById("stop-btn").style.transform = "scale(1)";
    }, 100);
  };


  const startSorting = async () => {
    // check which sort
    stopBtn.current = false;
    const algo = props.sortName;
    if (algo === "Bubble Sort") {
      await BubbleSort(array, setArray, speed,stopBtn);
    }
    if (algo === "Insertion Sort") {
        await InsertionSort(array, setArray, speed,stopBtn);
      }
      if (algo === "Selection Sort") {
        await SelectionSort(array, setArray, speed,stopBtn);
      }
      if (algo === "Merge Sort") {
        await MergeSort(array, setArray, speed,stopBtn);
      }
      if (algo === "Quick Sort") {
        await QuickSort(array, setArray, speed,stopBtn);
      }
      if (algo === "Heap Sort") {
        await HeapSort(array, setArray, speed,stopBtn);
      }
    };

    const stopSorting = () => {
      stopBtn.current = true;
      setTimeout(() => {
        stopBtn.current = false;
      }, 100);
    };

  return (
    <section className="Algo-hero-box grid" id="Home">
      <div className="visual-control-bar flexbox">
        <div className="algo-name" data-aos="slide-right">
          {props.sortName}
        </div>

        <div className="flexbox rand-ctrl-flex">
          <div className="grid" style={{ rowGap: "10px", justifyItems: "center"}}>
            <button
              className="random-btn"
              onClick={() => {
                ClickMotion();
                Randomise();
              }}
              id="random-btn"
              data-aos="fade-down"
            >
              Random Array
            </button>
            <div className="flexbox" style={{ columnGap: "10px" }}>
            <button style={{width:"60px"}}
              className="random-btn"
              onClick={() => {
                ClickMotion2();
                startSorting();
              }}
              id="start-btn"
              data-aos="fade-down"
            >
              Start
            </button>
            <button style={{width:"60px"}} 
              className="random-btn"
              onClick={() => {
                ClickMotion3();
                stopSorting();
              }}
              ref = {stopBtn}
              id="stop-btn"
              data-aos="fade-down"
            >
              Stop
            </button>
          </div>
          </div>
          <div className="control-btn grid">
            <div className="flexbox input-btn">
              <label htmlFor="size" data-aos="fade-down">
                Array Size(N) :
              </label>
              <input
                min="2"
                defaultValue="40"
                max="250"
                type="range"
                className="ctrl-inp"
                id="size"
                name="arr_size"
                onChange={(event) => {setArrSize(Number(event.target.value)),stopSorting()}}
              />
              <div>{arrsize}</div>
            </div>
            <div className="flexbox input-btn">
              <label htmlFor="speed" data-aos="fade-down">
                Sorting Speed :
              </label>
              <input
                min="1"
                max="100"
                defaultValue="5"
                type="range"
                className="ctrl-inp"
                id="speed"
                name="sort_speed"
                onChange={(event) => {setSpeed(Number(event.target.value)),stopSorting()}}
              />
              <div>{speed}</div>
            </div>
            <div
              className="array-display flexbox input-btn"
              data-aos="fade-down"
            >
              Custom Array :
              <input
                className="text-area"
                type="text"
                name="array"
                id="array"
                placeholder="7 4 2 1 -8"
                disabled
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className="sort-visual-box" data-aos="fade-up">
        <Sketch Size={arrsize} arr={array} color={colorArray}/>
      </div>
    </section>
  );
}

export default SortingHero;
