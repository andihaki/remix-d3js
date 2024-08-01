import { useEffect, useRef } from "react";
import * as d3 from "d3";

const Circle = () => {
  const ref = useRef(null);

  useEffect(() => {
    const svgElement = d3.select(ref.current);
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50);
  }, []);

  return (
    <>
      <div className="flex justify-around">
        <div>
          <h2>Imperative</h2>
          <svg ref={ref} />
        </div>
        <div>
          <h2>Declarative</h2>
          <svg>
            <circle cx="150" cy="70" r="50" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Circle;
