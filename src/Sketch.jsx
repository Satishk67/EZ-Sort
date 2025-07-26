import "./Sketch.css";
function Sketch(props) {
  const n = props.Size;
  const rectWidth = (window.innerWidth-8) / n;
  const Height = window.innerHeight;
  const arr = props.arr;

  return (
    <svg className="drawing">
      {arr.map((x, i) => (
        <g key={i}>
          <text className="bar-text" width={rectWidth} x={i * rectWidth + rectWidth / 2} y={Height-x-10}>{x}</text>
          <rect className="bar" width={rectWidth} height={x} x={i * rectWidth} y={Height-x} fill={props.color[i]}/>
        </g>
      ))}
    </svg>
  );
}
export default Sketch;