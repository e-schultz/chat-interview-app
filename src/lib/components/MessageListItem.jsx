/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
export default props => {
  return (
    <Box
      id={props.id}
      sx={{
        // applies width 100% to all viewport widths,
        // width 50% above the first breakpoint,
        // and 25% above the next breakpoint
        width: ['100%', '75%', '75%'],
        border: '1px solid black',
        flex: '1 1 auto',
        p: 2,
        mb: 2,
        mx: 'auto'
      }}
    >
      {props.children}
    </Box>
  );
};
