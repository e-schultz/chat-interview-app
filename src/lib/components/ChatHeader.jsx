/** @jsx jsx */
import { jsx } from 'theme-ui';
export default props => (
  <header
    sx={{
      // applies width 100% to all viewport widths,
      // width 50% above the first breakpoint,
      // and 25% above the next breakpoint
      width: ['100%'],
      p: '4',
      borderBottom: '1px solid',
      borderBottomColor: 'secondary'
    }}
  >
    {props.children}
  </header>
);
