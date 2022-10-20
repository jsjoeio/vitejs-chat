import { useState } from 'react';
import './App.css';
import { Message, Messages } from './Messages';
import { Input } from './Input';

function buildMessage(
  userId: Message['userId'],
  id: Message['id'],
  text: Message['text']
): Message {
  return {
    id,
    text,
    userId,
    timestamp: Date.now(),
  };
}

function App() {
  const [currentUserId, setCurrentUserId] = useState<'left' | 'right'>('right');
  const [messages, setMessages] = useState<Message[]>([]);

  return (
    <div className="App">
      <h1>Chat</h1>
      <Messages messages={messages} />
      <Input
        onSubmit={(text: Message['text']) => {
          const defaultId = '123';

          const msg = buildMessage(currentUserId, defaultId, text);
          setMessages([...messages, msg]);

          if (currentUserId === 'left') {
            setCurrentUserId('right');
          } else {
            setCurrentUserId('left');
          }
        }}
      />
    </div>
  );
}

export default App;
