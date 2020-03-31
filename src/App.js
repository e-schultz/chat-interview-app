import React, { useReducer, useEffect } from 'react';

import { ThemeProvider } from 'theme-ui';
import AppLayout from './lib/components/AppLayout';
import MessageBar from './lib/components/MessageBar';
import MessageList from './lib/components/MessageList';
import useMessageList from './lib/hooks/useMessageList';
import useScrollToLastMessage from './lib/hooks/useScrollToLastMessage';
import theme from './theme';
import TEST_MESSAGES from './TEST_DATA';

function App(props) {
  const [messages, messageDispatch] = useMessageList(TEST_MESSAGES);

  useScrollToLastMessage(messages);

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
