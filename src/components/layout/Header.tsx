"use client";

import { Bell, Search, Menu, LogOut } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useSidebar } from "@/context/SidebarContext";
import Link from "next/link";

export function Header() {
  const { toggle } = useSidebar();
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-30 flex h-16 md:h-20 w-full items-center justify-between border-b border-gray-100 bg-white/80 px-4 md:px-8 backdrop-blur-md">
      <div className="flex flex-1 items-center gap-4">
        <button 
          onClick={toggle}
          className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="relative w-full max-w-md hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses, lessons, etc..."
            className="h-10 w-full rounded-xl border border-gray-100 bg-gray-50/50 pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 md:gap-4">
        <button className="relative p-2 text-gray-400 hover:bg-gray-50 rounded-xl transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
        <div className="h-8 w-px bg-gray-100 mx-1 hidden sm:block" />
        
        {session?.user ? (
          <div className="flex items-center gap-3 pl-1 group relative">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900">{session.user.name}</p>
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium Student</p>
            </div>
            <img
              src={session.user.image || `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(session.user.name || "User")}`}
              alt={session.user.name || "User"}
              className="h-9 w-9 md:h-10 md:w-10 rounded-xl border-2 border-white shadow-sm bg-gray-50 cursor-pointer"
            />
            {/* Dropdown Menu Mock */}
            <div className="absolute right-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="bg-white border border-gray-100 rounded-2xl shadow-xl p-2 w-48">
                <Link href="/profile" className="block px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">Profile</Link>
                <Link href="/settings" className="block px-4 py-2 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors">Settings</Link>
                <div className="h-px bg-gray-50 my-1" />
                <button 
                  onClick={() => signOut()}
                  className="w-full text-left px-4 py-2 text-sm font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link href="/login" className="text-sm font-bold text-gray-600 hover:text-indigo-600 px-4 py-2 transition-colors">Sign In</Link>
            <Link href="/register" className="text-sm font-bold bg-indigo-600 text-white px-5 py-2 rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">Join Free</Link>
          </div>
        )}
      </div>
    </header>
  );
}
