import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Send, Bot, Loader2, BarChart3, LineChart } from 'lucide-react';
import { CHART_DATA } from '../constants';
import { ChatMessage } from '../types';
import { geminiService } from '../services/geminiService';
import { GenerateContentResponse } from "@google/genai";

const MarketDashboard: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: 'Welcome to the Magnolia Intelligence Desk. I am monitoring global energy and commodity markets. How can I assist with your strategic analysis today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Only scroll when there are new messages (not on initial mount)
    if (messages.length > 1) {
      scrollToBottom();
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Create a placeholder for the model response
    const modelMsgId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, {
      id: modelMsgId,
      role: 'model',
      text: '',
      isLoading: true
    }]);

    try {
      const result = await geminiService.sendMessageStream(userMsg.text);
      
      let fullText = '';
      
      for await (const chunk of result) {
         const c = chunk as GenerateContentResponse;
         const text = c.text || '';
         fullText += text;
         
         setMessages(prev => prev.map(msg => 
            msg.id === modelMsgId 
              ? { ...msg, text: fullText, isLoading: false } 
              : msg
          ));
      }

    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === modelMsgId 
          ? { ...msg, text: "I apologize, but I am currently unable to access the real-time market stream. Please try again momentarily.", isLoading: false } 
          : msg
      ));
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="intelligence" className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
            <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-500 font-semibold tracking-widest uppercase text-sm"
            >
                AI-Powered Strategy
            </motion.span>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-serif font-bold text-white mt-2"
            >
                Market Intelligence
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-8 h-[600px]">
          
          {/* Chart Section - Hidden */}
          {/* <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-950/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-800 rounded-lg text-blue-500">
                        <BarChart3 size={20} />
                    </div>
                    <div>
                        <h3 className="text-white font-semibold">Portfolio Performance</h3>
                        <p className="text-xs text-slate-400">YTD Growth vs Benchmark</p>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button className="px-3 py-1 text-xs bg-slate-800 text-slate-300 rounded hover:text-white transition">1M</button>
                    <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded font-bold">1Y</button>
                </div>
            </div>
            
            <div className="flex-1 w-full min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={CHART_DATA}>
                    <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="date" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#f8fafc' }}
                        itemStyle={{ color: '#2563eb' }}
                    />
                    <Area type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
                </ResponsiveContainer>
            </div>
          </motion.div> */}

          {/* Gemini AI Chat */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-slate-950 border border-blue-500/20 rounded-2xl flex flex-col shadow-2xl shadow-blue-900/5 relative overflow-hidden"
          >
            <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
            
            {/* Header */}
            <div className="p-4 border-b border-slate-800 bg-slate-900/50 flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg">
                    <Bot size={20} className="text-white" />
                </div>
                <div>
                    <h3 className="text-white font-medium">Magnolia Analyst</h3>
                    <p className="text-xs text-blue-500/80 font-mono">POWERED BY GEMINI 2.5</p>
                </div>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                {messages.map((msg) => (
                    <div 
                        key={msg.id} 
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div 
                            className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                                msg.role === 'user' 
                                ? 'bg-slate-800 text-white rounded-br-none border border-slate-700' 
                                : 'bg-blue-500/10 text-slate-200 rounded-bl-none border border-blue-500/20'
                            }`}
                        >
                            {msg.role === 'model' && msg.isLoading && !msg.text ? (
                                <div className="flex gap-1 items-center h-5">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce delay-200"></span>
                                </div>
                            ) : (
                                // Render simple markdown-like formatting (basic)
                                msg.text.split('\n').map((line, i) => (
                                    <p key={i} className="mb-1 last:mb-0">{line}</p>
                                ))
                            )}
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-900 border-t border-slate-800">
                <div className="relative">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ask about market trends, crude oil outlook..."
                        className="w-full bg-slate-950 border border-slate-800 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all placeholder:text-slate-600"
                        disabled={loading}
                    />
                    <button 
                        onClick={handleSend}
                        disabled={loading || !input.trim()}
                        className="absolute right-2 top-2 p-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                    >
                        {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
                    </button>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketDashboard;