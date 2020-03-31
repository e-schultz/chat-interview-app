import { useReducer } from 'react';
// eventually this could have flags for updating messages
// pending to be sent / etc
// pulling the logic out of the component and into a reusable hook
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

function useMessageList(initialMessages) {
  const [messages, messageDispatch] = useReducer(
    messageReducer,
    initialMessages
  );

  return [messages, messageDispatch];
}

export default useMessageList;
