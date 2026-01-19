import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';
import axios from 'axios';
import ConsciousnessOrb from '../components/NovarchLanding/ConsciousnessOrb';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const hasStarted = messages.length > 0;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/chat`, {
        session_id: sessionId,
        message: userMessage,
        history: messages
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.data.response }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I'm having trouble connecting right now. Please try again in a moment." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0d10] text-[#f8f9fb] flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-[#1a1d24]">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#6a7080] hover:text-[#a8aeb8] transition-colors text-[14px] font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>
        <span className="text-[14px] tracking-[0.2em] text-[#4a5060] uppercase font-light">Novarch</span>
        <div className="w-16" /> {/* Spacer for balance */}
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col max-w-2xl w-full mx-auto px-6 md:px-8">
        
        {/* Entry state - before conversation starts */}
        {!hasStarted && (
          <div className="flex-1 flex flex-col items-center justify-center py-16 space-y-8">
            {/* Subtle orb */}
            <div className="opacity-40">
              <ConsciousnessOrb size="small" />
            </div>
            
            {/* Welcome text */}
            <div className="text-center space-y-4 max-w-md">
              <h1 className="text-2xl md:text-3xl font-light text-[#f8f9fb] tracking-tight">
                Take a moment.
              </h1>
              <p className="text-base md:text-lg text-[#8a919f] font-light leading-relaxed">
                Say what's been lingering.
              </p>
            </div>
            
            {/* Supportive subtext */}
            <p className="text-[14px] text-[#5a6070] font-light">
              There's no pressure — just take your time.
            </p>
          </div>
        )}

        {/* Conversation - after first message */}
        {hasStarted && (
          <div className="flex-1 overflow-y-auto py-8 space-y-8">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`${message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] ${
                    message.role === 'user' 
                      ? 'bg-[#1a1d24] px-5 py-4 text-[#c8cdd6]' 
                      : 'text-[#a8aeb8]'
                  }`}
                >
                  <p className="text-[15px] font-light leading-[1.75] whitespace-pre-wrap">
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <p className="text-[15px] text-[#5a6070] font-light">...</p>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Input area */}
        <div className="py-6 border-t border-[#1a1d24]">
          <form onSubmit={handleSubmit} className="flex items-center gap-4">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={hasStarted ? "Continue..." : "Start by sharing what's on your mind..."}
              disabled={isLoading}
              className="flex-1 bg-transparent text-[#f8f9fb] placeholder:text-[#4a5060] text-[15px] font-light focus:outline-none py-2"
            />
            <button 
              type="submit"
              disabled={isLoading || !input.trim()}
              className="text-[#5a6070] hover:text-[#a8aeb8] transition-colors disabled:opacity-30 p-2"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChatPage;
