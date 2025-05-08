import React, { useState } from 'react';
import { getGeminiResponse } from '../utilise/gemini';
import { motion } from 'framer-motion';
import { Element } from 'react-scroll';

const AskMeAnything = () => {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState('');
  const [typing, setTyping] = useState(false);

  const cleanResponse = (response) => {
    return response.replace(/\*/g, '').trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;
    const userMessage = { role: 'user', content: question };
    setMessages(prev => [...prev, userMessage]);
    setTyping(true);

    const reply = await getGeminiResponse(question);
    const cleanedReply = cleanResponse(reply);
    const aiMessage = { role: 'ai', content: cleanedReply };
    
    setMessages(prev => [...prev, aiMessage]);
    setQuestion('');
    setTyping(false);
  };

  const handleChatClear = () => {
    setMessages([]);
  };

  return (
    <Element name="llm">
        <div className="max-w-2xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Ask Me Anything : SoftSell AI</h2>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 h-[500px] overflow-y-auto space-y-4 border">
            {messages.map((msg, index) => (
            <div key={index} className={`p-3 rounded-md ${msg.role === 'user' ? 'bg-blue-100 self-end text-right' : 'bg-gray-100'}`}>
                <p className="whitespace-pre-line text-sm md:text-base">
                <strong>{msg.role === 'user' ? 'You:' : 'AI:'}</strong> {msg.content}
                </p>
            </div>
            ))}

            {typing && (
            <motion.div
                className="bg-gray-100 p-3 rounded-md text-sm"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2, ease: 'easeOut', repeat: Infinity}}
            >
                <span className="animate-pulse">AI is typing...</span>
            </motion.div>
            )}
        </div>

        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
            <textarea
            rows="2"
            className="flex-1 p-3 rounded-md border dark:bg-gray-900 dark:text-white"
            placeholder="Type your question here..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
            />
            <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer"
            >
            Ask
            </button>

            <div
            onClick={handleChatClear}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-center flex items-center justify-center cursor-pointer"
            >
            Clear Chat
            </div>
        </form>
        </div>
    </Element>
  );
};

export default AskMeAnything;
