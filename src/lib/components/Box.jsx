/** @jsx jsx */
import { jsx } from 'theme-ui';
export default props => (
  <div
    sx={{
      // applies width 100% to all viewport widths,
      // width 50% above the first breakpoint,
      // and 25% above the next breakpoint
      width: ['100%', '50%', '25%']
    }}
  >
    {props.children}
  </div>
);
