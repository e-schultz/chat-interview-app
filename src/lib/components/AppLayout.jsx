/** @jsx jsx */
// initial from recipes in theme-ui docs - https://theme-ui.com/recipes/flexbox-layout
import { jsx } from 'theme-ui';
import ChatHeader from './ChatHeader';
export default props => (
  <div
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      maxHeight: '10vh'
    }}
  >
    <ChatHeader>FieldChat</ChatHeader>
    <main
      sx={{
        background: 'white',
        flexGrow: 1,

        overflow: 'auto',
        maxHeight: '90vh',
        /* for Firefox */
        minHeight: 0
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
