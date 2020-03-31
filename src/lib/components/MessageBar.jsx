/** @jsx jsx */
import { useState } from 'react';
import { jsx, Label, Input, Button, Flex, Box } from 'theme-ui';
export default props => {
  const [message, setMessage] = useState('');
  const handleSubmit = evt => {
    evt.preventDefault();
    props.onSend(message);
    setMessage('');
  };
  return (
    <Flex as="form" onSubmit={handleSubmit} bg="primary">
      <Box p={2} sx={{ flex: '1 1 auto' }}>
        <Label htmlFor="message" color="white">
          message
        </Label>
        <Input
          name="message"
          value={message}
          bg="white"
          onChange={evt => setMessage(evt.target.value)}
          mb={3}
        />
      </Box>
      <Box p={2}>
        <Button>Send</Button>
      </Box>
    </Flex>
  );
};
