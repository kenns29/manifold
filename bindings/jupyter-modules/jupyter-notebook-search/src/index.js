import React, {useEffect, useRef} from 'react';
import * as d3 from 'd3';
export default props => {
  const svgRef = useRef(null);
  const {data} = props;
  const cells = (data && data.notebooks) || [];
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
  return (
    <div>
      <svg ref={svgRef} width="1000px" height="600px" />
    </div>
  );
};
