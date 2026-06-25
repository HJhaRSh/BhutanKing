"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

// Minimalist Dragon SVG
const DragonIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5c-2.48 0-4.5-2.02-4.5-4.5h2c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-1.25-.92-2.3-2.13-2.47L9 9h6v2h-4.32l.83.82c1.77.34 3.49 1.76 3.49 3.68 0 2.48-2.02 4.5-4.5 4.5z" />
    <path d="M15 7h-6v2h6z" opacity=".3" />
    <path d="M12 4C7.58 4 4 7.58 4 12s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 12.5c-2.48 0-4.5-2.02-4.5-4.5h2c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5c0-1.25-.92-2.3-2.13-2.47L9 9h6v2h-4.32l.83.82c1.77.34 3.49 1.76 3.49 3.68 0 2.48-2.02 4.5-4.5 4.5z" />
  </svg>
);

const DragonSilhouette = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M32 6C20 6 12 18 12 28c0 10 6 16 12 20 8 5 18 6 24 2-4-8-12-10-16-16 6-4 12-12 12-20 0-6-6-8-12-8zm0 4c4 0 8 4 8 8s-4 10-10 12c4 4 10 6 12 12-6 2-14 0-20-4-4-3-8-8-8-16 0-8 6-16 18-16z"
      fill="currentColor"
    />
    <circle cx="38" cy="18" r="2" fill="currentColor" />
  </svg>
);

type Message = {
  id: string;
  role: "system" | "user" | "assistant";
  content: string;
};

export default function DrukAvatar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initial greeting
  useEffect(() => {
    setMessages([
      {
        id: "welcome",
        role: "assistant",
        content: "Kuzuzangpo la! 🐉 I am Druk, the Thunder Dragon and guardian of Dralha Group. Ask me about our hotels, mills, bamboo ventures, agribusiness, or how to get in touch.",
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/druk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "assistant", content: data.reply },
      ]);
    } catch (err) {
      setError("The mountain winds are strong right now — please try again in a moment. 🏔️");
      // Add a temporary error message from Druk
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "assistant", content: "The mountain winds are strong right now — please try again in a moment. 🏔️" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="mb-4 flex flex-col overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-black/50 backdrop-blur-3xl border border-white/10"
            style={{
              width: "100vw",
              maxWidth: "380px",
              height: "70vh",
              maxHeight: "540px",
            }}
          >
            {/* Header */}
            <div className="flex h-[72px] shrink-0 items-center justify-between px-5 bg-white/5 border-b border-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-3.5">
                <div className="h-10 w-10 overflow-hidden rounded-full border border-white/20 shadow-[0_0_15px_rgba(232,160,32,0.4)]">
                  <img src="/druk.png" alt="Druk" className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base font-bold text-white">Druk</span>
                  <span className="text-[11px] text-white/80">Dralha Group Concierge</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Message Area */}
            <div className="flex-1 overflow-y-auto bg-transparent p-5 hide-scrollbar">
              <div className="flex flex-col space-y-4">
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      <div className="mr-3 mt-1 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E8A020]/30 shadow-[0_0_10px_rgba(232,160,32,0.2)]">
                        <img src="/druk.png" alt="Druk" className="h-full w-full object-cover" />
                      </div>
                    )}
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3.5 text-[14.5px] leading-relaxed shadow-lg ${
                        msg.role === "user"
                          ? "bg-gradient-to-br from-[#E8A020]/90 to-[#B87000]/90 text-white rounded-br-sm border border-white/20 shadow-[0_4px_20px_rgba(232,160,32,0.25)]"
                          : "bg-white/5 backdrop-blur-xl text-white/95 rounded-bl-sm border border-white/10"
                      }`}
                    >
                      <div className="markdown-body [&>p]:mb-3 [&>p:last-child]:mb-0 [&>ul]:mb-3 [&>ul]:space-y-1.5 [&>ul]:pl-5 [&>ul]:list-disc [&>ul]:marker:text-[#E8A020] [&>ol]:mb-3 [&>ol]:space-y-1.5 [&>ol]:pl-5 [&>ol]:list-decimal [&>ol]:marker:text-[#E8A020] [&_a]:text-[#E8A020] [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-white [&_a]:transition-colors [&_strong]:font-semibold [&_strong]:text-white [&_code]:bg-black/40 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[13px] [&_code]:font-mono [&_code]:text-[#E8A020] [&>blockquote]:border-l-2 [&>blockquote]:border-[#E8A020] [&>blockquote]:pl-3 [&>blockquote]:italic [&>blockquote]:text-white/70">
                        <ReactMarkdown>{msg.content}</ReactMarkdown>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="mr-3 mt-1 flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#E8A020]/30 shadow-[0_0_10px_rgba(232,160,32,0.2)]">
                      <img src="/druk.png" alt="Druk" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex max-w-[80%] items-center space-x-1.5 rounded-2xl rounded-bl-sm bg-white/10 px-4 py-3 text-sm">
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.4, delay: 0 }}
                        className="h-1.5 w-1.5 rounded-full bg-[#E8A020]"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.4, delay: 0.2 }}
                        className="h-1.5 w-1.5 rounded-full bg-[#E8A020]"
                      />
                      <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ repeat: Infinity, duration: 1.4, delay: 0.4 }}
                        className="h-1.5 w-1.5 rounded-full bg-[#E8A020]"
                      />
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Bar */}
            <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl p-4">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about Dralha Group..."
                  className="w-full rounded-full bg-white/5 border border-white/10 py-3 pl-5 pr-14 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#E8A020]/60 focus:ring-1 focus:ring-[#E8A020]/30 transition-all shadow-inner"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-1.5 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-gradient-to-br from-[#E8A020] to-[#6B21A8] text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(232,160,32,0.6)] disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none"
                >
                  <Send className="h-4 w-4 ml-[-2px]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Avatar Button */}
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <AnimatePresence>
          {isHovered && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 5, scale: 0.9 }}
              className="absolute -top-10 whitespace-nowrap rounded-full bg-[#E8A020] px-3 py-1 text-[11px] font-medium text-white shadow-lg"
            >
              Ask Druk
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulsing rings */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <motion.div
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.4, 0.2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
              className="absolute h-full w-full rounded-full bg-[#E8A020]"
            />
            <motion.div
              animate={{
                scale: [1, 1.5, 2],
                opacity: [0.4, 0.2, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 1.25,
              }}
              className="absolute h-full w-full rounded-full bg-[#E8A020]"
            />
        </div>

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 flex h-[88px] w-[88px] items-center justify-center rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(232,160,32,0.8)]"
          style={{
            boxShadow: "0 10px 25px -5px rgba(232, 160, 32, 0.5), 0 0 20px rgba(107, 33, 168, 0.6)",
            border: "2px solid rgba(232, 160, 32, 0.4)",
          }}
        >
          <img src="/druk.png" alt="Druk AI Concierge" className="h-full w-full object-cover" />
        </motion.button>
      </div>
    </div>
  );
}
