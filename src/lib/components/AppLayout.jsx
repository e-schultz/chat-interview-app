/** @jsx jsx */
// initial from recipes in theme-ui docs - https://theme-ui.com/recipes/flexbox-layout
import { jsx } from 'theme-ui';
import ChatHeader from './ChatHeader';
export default props => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    }}
  >
    <ChatHeader>FieldChat</ChatHeader>
    <main
      sx={{
        width: '100%',
        flex: '1 1 auto'
      }}
    >
      {props.children}
    </main>
    <footer
      sx={{
        width: '100%'
      }}
    >
      {props.footer}
    </footer>
  </div>
);
