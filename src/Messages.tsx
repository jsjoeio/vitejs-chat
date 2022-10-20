export type Message = {
  id: string;
  text: string;
  timestamp: number;
  userId: 'left' | 'right';
};

type MessageProps = {
  messages: Message[];
};

export function Messages({ messages }: MessageProps) {
  return (
    <div>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`bg-black py-2 px-4 rounded-full my-4 flex ${
            message.userId === 'left' ? 'justify-end' : 'justify-start'
          }`}
        >
          <p className="text-sm p-4 inline text-left ">{message.text}</p>
        </div>
      ))}
    </div>
  );
}
