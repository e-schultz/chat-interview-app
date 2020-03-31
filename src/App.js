import React, { useReducer } from 'react';

import { ThemeProvider, Container, Box } from 'theme-ui';
import AppLayout from './lib/components/AppLayout';
import MessageBar from './lib/components/MessageBar';
import theme from './theme';

function App(props) {
  const [messages, messageDispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return [...state, { text: action.payload }];
      default:
        return state;
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppLayout
        p={4}
        bg="muted"
        footer={
          <MessageBar
            onSend={evt =>
              messageDispatch({ type: 'ADD_MESSAGE', payload: evt })
            }
          />
        }
      >
        {messages.map(message => {
          return <Box>{message.text}</Box>;
        })}
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
