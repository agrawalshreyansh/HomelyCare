'use client';

import { useState } from 'react';
import Header from '@/components/Header';

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(1);

  const conversations = [
    {
      id: 1,
      caretakerName: 'Jane Doe',
      caretakerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCojqLUBH_qhjL4LaGvN65b-KeMsO-IBmCHEXDI_NZl4ECx-lCHbLeIrTsuMnXE22LtU8FDHEEQKQJHuwdH5i1qKeW6mFFL5ug_38rAMu2Fd6Dgtk5fPIaMfZ1Kubw6q0DXATsikxCyJ67WbRJg9Y-I3qO8DgpBmAkLCN33IQgyMHd8Db6MI2y7-oL3hI5WLGuTCl0Z9jN9LlHN6442UeUOAgMkm7d18EPMzUeh3RQJa8Dqf9CzGvGY-qqb5otwu-VKkvZtuIWSSOqM',
      lastMessage: 'Sounds great! See you then.',
      timestamp: '2 hours ago',
      unread: true,
      messages: [
        { id: 1, text: 'Hi! I wanted to confirm our booking for next week.', sender: 'me', time: '10:30 AM' },
        { id: 2, text: 'Yes, I have you scheduled for Monday at 9 AM. Looking forward to it!', sender: 'them', time: '10:32 AM' },
        { id: 3, text: 'Sounds great! See you then.', sender: 'me', time: '10:35 AM' },
      ]
    },
    {
      id: 2,
      caretakerName: 'John Smith',
      caretakerImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1kGkHA16u17rePXvZLSQQZVOzGGJ9GVyR20pA0TRSDjiB3o6279zmgVVWWGsYa3RWBOHo_9BjmX4y42subKDTKIIQE7tZ6-tu1EySxcgndHJQRKGpklOcx3_uIXXnXB0S0ZNApo9moWMlgwgvXIBxFRDL_pcqPkdZ3auiCWVqNlj2jwDwELr16UHVgkvhgI1FEjqsuSh1JYmoOd9M69viJ-nQahILh8sBW62wdPNy9_CbnIqz-WVVNQ9fAJI9XDGCrP-LVOrzrsBZ',
      lastMessage: 'Thank you for your inquiry!',
      timestamp: '1 day ago',
      unread: false,
      messages: [
        { id: 1, text: 'Hello, do you have availability for this weekend?', sender: 'me', time: 'Yesterday 3:15 PM' },
        { id: 2, text: 'Thank you for your inquiry! Unfortunately, I\'m fully booked this weekend, but I have openings next week.', sender: 'them', time: 'Yesterday 3:45 PM' },
      ]
    },
  ];

  const currentConversation = conversations.find(c => c.id === selectedMessage);

  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen">
      <Header activeTab="Messages" />

      <main className="h-[calc(100vh-69px)] flex">
        {/* Conversations List */}
        <div className="w-80 border-r border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark flex-shrink-0 overflow-y-auto">
          <div className="p-4 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setSelectedMessage(conv.id)}
                className={`p-4 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors ${selectedMessage === conv.id ? 'bg-primary/10' : ''
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12 flex-shrink-0"
                    style={{ backgroundImage: `url("${conv.caretakerImage}")` }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold truncate">{conv.caretakerName}</h3>
                      {conv.unread && (
                        <span className="size-2 rounded-full bg-primary flex-shrink-0"></span>
                      )}
                    </div>
                    <p className="text-sm text-subtext-light dark:text-subtext-dark truncate">{conv.lastMessage}</p>
                    <p className="text-xs text-subtext-light dark:text-subtext-dark mt-1">{conv.timestamp}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {currentConversation ? (
            <>
              {/* Chat Header */}
              <div className="p-4 border-b border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark flex items-center gap-3">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                  style={{ backgroundImage: `url("${currentConversation.caretakerImage}")` }}
                />
                <div>
                  <h3 className="font-bold">{currentConversation.caretakerName}</h3>
                  <p className="text-sm text-subtext-light dark:text-subtext-dark">Active now</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {currentConversation.messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-md ${msg.sender === 'me' ? 'bg-primary text-white' : 'bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-slate-800'} rounded-2xl px-4 py-2`}>
                      <p>{msg.text}</p>
                      <p className={`text-xs mt-1 ${msg.sender === 'me' ? 'text-white/70' : 'text-subtext-light dark:text-subtext-dark'}`}>{msg.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-background-light dark:bg-background-dark focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined">send</span>
                    Send
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-subtext-light dark:text-subtext-dark mb-4">chat_bubble_outline</span>
                <h3 className="text-xl font-bold mb-2">Select a conversation</h3>
                <p className="text-subtext-light dark:text-subtext-dark">Choose a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
