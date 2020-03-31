import { useEffect } from 'react';

// would like to make this more generic
// but want to scroll to the last message in the list any time the messages update
// also want to avoid having references to `document` as much as possible within the components
// probably better to make use of refs in react and keep track of them that way in a real-world use case
export default function useScrollToMessage(messages = []) {
  useEffect(() => {
    if (messages.length > 0) {
      const lastId = messages[messages.length - 1].id;

      document.getElementById(`message-${lastId}`).scrollIntoView();
    }
  }, [messages]);
}
