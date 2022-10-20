import React from 'react';
import { Message } from './Messages';

type InputProps = {
  onSubmit: (text: Message['text']) => void;
};

export function Input({ onSubmit }: InputProps) {
  const [message, setMessage] = React.useState('');
  return (
    <div>
      <form>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log('message is: ', message);
            onSubmit(message);
            setMessage('');
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}
