import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';

// This is a react component, refer to https://reactjs.org/ for react docs
export default props => {
  const svgRef = useRef(null);
  const {data} = props;
  const cells = (data && data.notebooks) || [];

  // The useEffect hooks executes everytime after the component re-renders, https://reactjs.org/docs/hooks-effect.html
  // This hook can be used to run the d3 code
  useEffect(() => {
    const sel = d3
      .select(svgRef.current)
      .selectAll('text')
      .data(cells, d => d);

    const enter = sel.enter().append('text');
    sel.exit().remove();

    sel
      .merge(enter)
      .text(d => d)
      .attr('y', (d, i) => (i + 1) * 20);
  });

  // The componment returns the rendered content
  return (
    <div>
      <svg ref={svgRef} width="1000px" height="600px" />
    </div>
  );
};
