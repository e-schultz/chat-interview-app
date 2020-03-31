/** @jsx jsx */

import { jsx, Box } from 'theme-ui';

import MessageListItem from './MessageListItem';
export default props => {
  return (
    <Box
      id={props.id}
      sx={{
        overflowY: 'auto',
        flex: '1 1 auto'
      }}
    >
      {props.messages.map(message => (
        <MessageListItem key={message.id} id={`message-${message.id}`}>
          {message.text}
        </MessageListItem>
      ))}
    </Box>
  );
};
