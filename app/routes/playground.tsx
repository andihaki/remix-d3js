import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function Playground() {
  const ref = useRef(null);
  useEffect(() => {
    const xScale = d3.scaleLinear().domain([0, 100]).range([10, 290]);
    const svgElement = d3.select(ref.current);
    const axisGenerator = d3.axisBottom(xScale);
    svgElement.append("g").call(axisGenerator);
  }, []);
  return <svg ref={ref} />;
}
