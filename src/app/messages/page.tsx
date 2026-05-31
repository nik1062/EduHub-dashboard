"use client";

import { useState } from "react";
import { 
  Search, 
  Send, 
  MoreVertical, 
  Phone, 
  Video, 
  Paperclip, 
  Smile,
  CheckCheck,
  ChevronLeft
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const contacts = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Senior Design Mentor",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahM",
    lastMessage: "The grid system looks much better now!",
    time: "2m ago",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "James Wilson",
    role: "Fullstack Developer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    lastMessage: "Are we still meeting at 5 PM?",
    time: "1h ago",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "UI/UX Study Group",
    role: "Community Group",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Group",
    lastMessage: "Elena: Shared a new case study link.",
    time: "3h ago",
    unread: 0,
    online: true,
  }
];

const messages = [
  { id: 1, text: "Hi Alex! I reviewed your latest dashboard design.", sender: "them", time: "10:30 AM" },
  { id: 2, text: "The use of white space is excellent, but let's look at the typography hierarchy.", sender: "them", time: "10:31 AM" },
  { id: 3, text: "Thanks Sarah! I was thinking the same. Should I increase the weight for headings?", sender: "me", time: "10:35 AM" },
  { id: 4, text: "Yes, exactly. Try using a Black weight for the main labels.", sender: "them", time: "10:40 AM" },
  { id: 5, text: "Got it, I'll update it now and send the new preview.", sender: "me", time: "10:42 AM" },
];

export default function Messages() {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [isMobileChatOpen, setIsMobileChatOpen] = useState(false);

  const handleContactClick = (contact: any) => {
    setSelectedContact(contact);
    setIsMobileChatOpen(true);
  };

  return (
    <div className="h-[calc(100vh-140px)] md:h-[calc(100vh-160px)] flex gap-0 md:gap-8 relative overflow-hidden">
      {/* Sidebar - Contacts */}
      <Card className={cn(
        "w-full md:w-80 flex flex-col p-0 border-none overflow-hidden h-full transition-all duration-300",
        isMobileChatOpen ? "hidden md:flex" : "flex"
      )}>
        <div className="p-6 border-b border-gray-50">
          <h2 className="text-xl font-black text-gray-900 mb-4">Messages</h2>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 outline-none"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto no-scrollbar">
          {contacts.map((contact) => (
            <div 
              key={contact.id}
              onClick={() => handleContactClick(contact)}
              className={cn(
                "flex items-center gap-4 p-4 cursor-pointer transition-all hover:bg-gray-50",
                selectedContact.id === contact.id ? "bg-indigo-50/50 md:border-r-4 md:border-indigo-600" : ""
              )}
            >
              <div className="relative">
                <img src={contact.avatar} alt={contact.name} className="h-12 w-12 rounded-xl" />
                {contact.online && (
                  <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-emerald-500 rounded-full border-2 border-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <p className="text-sm font-black text-gray-900 truncate">{contact.name}</p>
                  <span className="text-[10px] font-bold text-gray-400">{contact.time}</span>
                </div>
                <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread > 0 && (
                <div className="h-5 w-5 bg-indigo-600 rounded-full flex items-center justify-center text-[10px] text-white font-bold">
                  {contact.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Main Chat Area */}
      <Card className={cn(
        "flex-1 flex flex-col p-0 border-none overflow-hidden h-full transition-all duration-300",
        !isMobileChatOpen ? "hidden md:flex" : "flex"
      )}>
        {/* Chat Header */}
        <div className="p-4 md:p-6 border-b border-gray-50 flex items-center justify-between bg-white/50 backdrop-blur-md sticky top-0 z-10">
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setIsMobileChatOpen(false)}
              className="md:hidden p-2 -ml-2 text-gray-400 hover:text-gray-900"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <img src={selectedContact.avatar} alt={selectedContact.name} className="h-9 w-9 md:h-10 md:w-10 rounded-xl" />
            <div>
              <p className="text-sm font-black text-gray-900 truncate max-w-[120px] sm:max-w-none">{selectedContact.name}</p>
              <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                {selectedContact.online ? "Active Now" : "Offline"}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <button className="p-2 md:p-2.5 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-indigo-600 transition-all">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="p-2 md:p-2.5 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-indigo-600 transition-all">
              <Video className="h-4 w-4 md:h-5 md:w-5" />
            </button>
            <button className="p-2 md:p-2.5 rounded-xl hover:bg-gray-50 text-gray-400 hover:text-gray-900 transition-all">
              <MoreVertical className="h-4 w-4 md:h-5 md:w-5" />
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 no-scrollbar bg-gray-50/30">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={cn(
                "flex flex-col max-w-[85%] md:max-w-[70%]",
                msg.sender === "me" ? "ml-auto items-end" : "items-start"
              )}
            >
              <div 
                className={cn(
                  "p-3 md:p-4 rounded-2xl text-sm leading-relaxed shadow-sm",
                  msg.sender === "me" 
                    ? "bg-indigo-600 text-white rounded-tr-none" 
                    : "bg-white text-gray-900 rounded-tl-none border border-gray-100"
                )}
              >
                {msg.text}
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">{msg.time}</span>
                {msg.sender === "me" && <CheckCheck className="h-3 w-3 text-indigo-400" />}
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 md:p-6 bg-white border-t border-gray-50">
          <div className="flex items-center gap-2 md:gap-4 bg-gray-50 rounded-2xl p-1 md:p-2 md:pr-3">
            <button className="hidden sm:flex p-2 text-gray-400 hover:text-indigo-600 transition-all">
              <Smile className="h-5 w-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-indigo-600 transition-all">
              <Paperclip className="h-5 w-5" />
            </button>
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none outline-none text-sm py-2 px-1"
            />
            <button className="h-9 w-9 md:h-10 md:w-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all active:scale-95">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
