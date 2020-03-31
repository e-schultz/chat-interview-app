import React, { useReducer, useEffect } from 'react';

import { ThemeProvider } from 'theme-ui';
import AppLayout from './lib/components/AppLayout';
import MessageBar from './lib/components/MessageBar';
import MessageList from './lib/components/MessageList';
import theme from './theme';
import TEST_MESSAGES from './TEST_DATA';

function messageReducer(state, action) {
  // generally wouldn't generate the ID here, but want something to set as the key for now
  // so react doesn't complain that I am rendering a list without a keyProp
  const nextId = state.length === 0 ? 0 : state[state.length - 1].id + 1;

  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state, { text: action.payload, id: nextId }];
    default:
      return state;
  }
}
function App(props) {
  const [messages, messageDispatch] = useReducer(messageReducer, TEST_MESSAGES);

  useEffect(() => {
    const lastId = messages[messages.length - 1].id;

    document.getElementById(`message-${lastId}`).scrollIntoView();
  }, [messages]);
  return (
    <ThemeProvider theme={theme}>
      <AppLayout
        p={4}
        bg="muted"
        footer={
          <MessageBar
            p={4}
            m={4}
            onSend={evt =>
              messageDispatch({ type: 'ADD_MESSAGE', payload: evt })
            }
          />
        }
      >
        <MessageList id="messageList" messages={messages} />
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
