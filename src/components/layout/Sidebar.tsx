"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  BookOpen, 
  User, 
  Settings, 
  LogOut,
  GraduationCap,
  Sparkles,
  Users,
  MessageSquare,
  ClipboardList,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useSidebar } from "@/context/SidebarContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: BookOpen, label: "My Courses", href: "/courses" },
  { icon: Users, label: "Community", href: "/community" },
  { icon: MessageSquare, label: "Messages", href: "/messages" },
  { icon: ClipboardList, label: "Assignments", href: "/assignments" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { isOpen, close } = useSidebar();

  const SidebarContent = () => (
    <div className="flex h-full w-full flex-col bg-white border-r border-gray-100 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
      <div className="flex h-20 items-center justify-between px-8">
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div 
            whileHover={{ rotate: 15, scale: 1.1 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-purple-700 shadow-lg shadow-indigo-200"
          >
            <GraduationCap className="h-6 w-6 text-white" />
          </motion.div>
          <span className="text-2xl font-black text-gray-900 tracking-tight group-hover:text-indigo-600 transition-colors">EduHub</span>
        </Link>
        <button onClick={close} className="lg:hidden p-2 text-gray-400 hover:text-gray-900 transition-colors">
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="flex-1 px-4 py-8 overflow-y-auto no-scrollbar">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative group block"
              >
                <div
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-sm font-bold rounded-xl transition-all duration-300",
                    isActive 
                      ? "bg-indigo-50 text-indigo-700 shadow-sm" 
                      : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                  )}
                >
                  <item.icon className={cn("h-5 w-5 transition-colors", isActive ? "text-indigo-600" : "text-gray-400 group-hover:text-gray-600")} />
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="sidebar-active"
                      className="absolute left-0 w-1 h-6 bg-indigo-600 rounded-r-full"
                    />
                  )}
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 px-4">
           <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-800 p-6 relative overflow-hidden group">
              <Sparkles className="absolute top-2 right-2 h-12 w-12 text-white/10 -rotate-12 transition-transform group-hover:scale-125" />
              <p className="text-white text-sm font-bold mb-1 relative z-10">Pro Plan</p>
              <p className="text-indigo-100 text-[11px] mb-4 relative z-10 leading-relaxed">Unlock unlimited courses and expert mentorship.</p>
              <button className="w-full py-2 bg-white text-indigo-700 text-xs font-black rounded-lg shadow-md hover:bg-indigo-50 transition-colors relative z-10">
                Upgrade Now
              </button>
           </div>
        </div>
      </div>

      <div className="p-6 border-t border-gray-50">
        <button className="flex w-full items-center gap-3 px-4 py-3 text-sm font-bold text-gray-500 rounded-xl hover:bg-red-50 hover:text-red-700 transition-all duration-300 group">
          <LogOut className="h-5 w-5 text-gray-400 group-hover:text-red-600 group-hover:translate-x-1 transition-transform" />
          Log out
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex h-full w-72 flex-col flex-shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="fixed inset-0 z-40 bg-gray-900/40 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-72 lg:hidden shadow-2xl"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
