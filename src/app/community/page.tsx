"use client";

import { motion } from "framer-motion";
import { 
  Search, 
  MessageSquare, 
  Heart, 
  Bookmark, 
  TrendingUp, 
  Filter,
  MoreHorizontal,
  Plus,
  MessageCircle,
  Award
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const trendingTopics = [
  { tag: "#UIUXDesign", posts: "1.2k", color: "text-indigo-600", bg: "bg-indigo-50" },
  { tag: "#ReactDev", posts: "856", color: "text-blue-600", bg: "bg-blue-50" },
  { tag: "#DataScience", posts: "420", color: "text-emerald-600", bg: "bg-emerald-50" },
  { tag: "#CareerAdvice", posts: "634", color: "text-amber-600", bg: "bg-amber-50" },
];

const feedPosts = [
  {
    id: 1,
    user: "Sarah Jenkins",
    role: "In Design Masterclass",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    time: "2 hours ago",
    title: "Tips for mastering Figma Auto Layout for responsive designs?",
    content: "I'm currently working on a complex dashboard project and struggling with nested auto-layout components. Any best practices or tutorials you'd recommend to keep the layers organized?",
    likes: 156,
    comments: 24,
  },
  {
    id: 2,
    user: "Marcus Voe",
    role: "Web Development",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
    time: "5 hours ago",
    title: "React 19 features that will change your workflow",
    content: "I've been diving into the experimental branch and the new 'use' hook is absolutely insane. Here is a breakdown of how it's going to simplify data fetching...",
    likes: 89,
    comments: 12,
  },
  {
    id: 3,
    user: "Elena Rodriguez",
    role: "Career Growth",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena",
    time: "Yesterday",
    title: "Just landed my first Junior Role at a Fintech Startup!",
    content: "Words can't describe how excited I am. The projects I built during the EduHub Bootcamp were the main highlight of my interview. Don't sleep on your portfolio projects!",
    likes: 542,
    comments: 48,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  }
];

export default function Community() {
  return (
    <div className="max-w-7xl mx-auto space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Student Community</h1>
          <p className="text-gray-500 mt-2 font-medium">Connect with 12,000+ students from around the world.</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-5 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm text-sm font-black text-gray-600 hover:bg-gray-50 transition-all flex items-center gap-2">
             <Filter className="h-4 w-4" /> Filter Feed
           </button>
           <button className="px-5 py-3 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 text-sm font-black hover:bg-indigo-700 transition-all flex items-center gap-2">
             <Plus className="h-4 w-4" /> Start Discussion
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-10">
          {/* Trending Topics */}
          <section>
            <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
              Trending Topics
            </h3>
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-2 px-2">
              {trendingTopics.map((topic, i) => (
                <Card key={i} delay={i * 0.1} className="flex-shrink-0 min-w-[180px] p-4 flex items-center gap-3 border-none hover:scale-105 transition-transform cursor-pointer">
                  <div className={cn("h-10 w-10 rounded-xl flex items-center justify-center font-bold", topic.bg, topic.color)}>
                    #
                  </div>
                  <div>
                    <p className="text-sm font-black text-gray-900">{topic.tag}</p>
                    <p className="text-[11px] font-bold text-gray-400">{topic.posts} posts</p>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Feed */}
          <section className="space-y-6">
            {feedPosts.map((post, i) => (
              <Card key={post.id} delay={0.2 + (i * 0.1)} className="p-8 border-none group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(post.user)}`} alt={post.user} className="h-12 w-12 rounded-full border-2 border-indigo-50" />
                    <div>
                      <p className="text-sm font-black text-gray-900">{post.user}</p>
                      <p className="text-[11px] font-bold text-gray-400">{post.time} • <span className="text-indigo-600">{post.role}</span></p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>
                
                <h4 className="text-2xl font-black text-gray-900 mb-3 leading-tight group-hover:text-indigo-600 transition-colors cursor-pointer">
                  {post.title}
                </h4>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="mb-6 rounded-2xl overflow-hidden aspect-[21/9]">
                    <img src={post.image} alt="Post content" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-8">
                    <button className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-indigo-600 transition-colors">
                      <MessageCircle className="h-5 w-5" /> {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-sm font-black text-gray-400 hover:text-rose-500 transition-colors">
                      <Heart className="h-5 w-5" /> {post.likes}
                    </button>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-indigo-600 transition-colors">
                    <Bookmark className="h-5 w-5" />
                  </button>
                </div>
              </Card>
            ))}
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-10">
          <Card className="p-8 border-none bg-indigo-600 text-white relative overflow-hidden">
             <div className="relative z-10">
               <Award className="h-10 w-10 text-indigo-200 mb-4" />
               <h3 className="text-xl font-black mb-2">Community Stats</h3>
               <p className="text-indigo-100 text-sm mb-6 leading-relaxed">You've reached <span className="text-white font-black">Top 5%</span> of contributors this month!</p>
               <div className="flex items-end gap-2 h-16 mb-6">
                 {[40, 60, 45, 80, 100].map((h, i) => (
                   <motion.div 
                     key={i}
                     initial={{ height: 0 }}
                     animate={{ height: `${h}%` }}
                     transition={{ duration: 1, delay: i * 0.1 }}
                     className="flex-1 bg-white/20 rounded-t-lg"
                   />
                 ))}
               </div>
               <button className="w-full py-3 bg-white text-indigo-700 text-xs font-black rounded-xl shadow-lg hover:bg-indigo-50 transition-colors">
                 VIEW LEADERBOARD
               </button>
             </div>
             <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-white/10 rounded-full blur-3xl" />
          </Card>

          <div>
             <h3 className="text-lg font-black text-gray-900 mb-6 uppercase tracking-widest text-[11px]">Top Contributors</h3>
             <div className="space-y-5">
               {[
                 { name: "David Chen", points: "2,450", rank: 1, color: "text-amber-500", bg: "bg-amber-50" },
                 { name: "Aria Smith", points: "1,890", rank: 2, color: "text-gray-400", bg: "bg-gray-50" },
                 { name: "Jordan Lee", points: "1,240", rank: 3, color: "text-amber-700", bg: "bg-amber-100" },
               ].map((user, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                   <div className="flex items-center gap-4">
                     <div className={cn("h-8 w-8 rounded-lg flex items-center justify-center font-black text-xs", user.bg, user.color)}>
                       {user.rank}
                     </div>
                     <p className="text-sm font-black text-gray-900">{user.name}</p>
                   </div>
                   <span className="text-xs font-black text-indigo-600">{user.points} pts</span>
                 </div>
               ))}
             </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
