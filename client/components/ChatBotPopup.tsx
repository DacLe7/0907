import React, { useState, useRef, useEffect } from 'react';

interface Message {
  from: 'user' | 'bot';
  text: string;
}

const initialMessages: Message[] = [
  { from: 'bot', text: 'Xin chào! Tôi có thể giúp gì cho bạn về nến thơm SaaS?' },
];

export default function ChatBotPopup({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { from: 'user' as const, text: input };
    setMessages((msgs) => [...msgs, userMsg]);
    setInput('');
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: 'bot', text: 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.' },
      ]);
    }, 700);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white rounded-xl shadow-2xl border border-border flex flex-col overflow-hidden animate-fade-in">
      <div className="bg-primary text-primary-foreground px-4 py-3 flex items-center justify-between">
        <span className="font-semibold">SaaS ChatBot</span>
        <button onClick={onClose} className="text-primary-foreground hover:text-white text-xl">×</button>
      </div>
      <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto max-h-72 bg-background">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`px-3 py-2 rounded-lg text-sm mb-1 max-w-[80%] ${msg.from === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-foreground'}`}>
              {msg.text}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="p-3 border-t border-border bg-background flex gap-2">
        <input
          className="flex-1 px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Nhập tin nhắn..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all"
          onClick={handleSend}
        >
          Gửi
        </button>
      </div>
    </div>
  );
} 