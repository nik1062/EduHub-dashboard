"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { 
  ChevronLeft, 
  Play, 
  CheckCircle, 
  Lock, 
  Clock, 
  Star, 
  Users,
  MessageCircle,
  Share2,
  Bookmark
} from "lucide-react";
import { mockCourses, Course } from "@/data/mockData";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function CourseDetails({ params }: PageProps) {
  const { id } = use(params);
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    const found = mockCourses.find((c) => c.id === id);
    if (found) setCourse(found);
  }, [id]);

  if (!course) {
    return <div className="flex h-full items-center justify-center">Loading...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8 pb-10">
      <Link 
        href="/courses" 
        className="inline-flex items-center text-sm font-black text-gray-400 hover:text-indigo-600 transition-colors uppercase tracking-widest"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Catalog
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Video Player Mock */}
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl md:rounded-3xl bg-black shadow-2xl group">
            <img 
              src={course.thumbnail} 
              alt={course.title} 
              className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 hover:bg-white/30 transition-all hover:scale-110 shadow-2xl group/play">
                <Play className="h-6 w-6 md:h-8 md:w-8 text-white fill-white ml-1 group-hover/play:scale-110 transition-transform" />
              </button>
            </div>
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between text-white">
              <div className="flex items-center gap-2 md:gap-4">
                 <span className="text-[10px] md:text-xs font-black bg-indigo-600 px-2 py-1 rounded">LIVE</span>
                 <p className="text-[10px] md:text-sm font-bold drop-shadow-md truncate max-w-[150px] md:max-w-none">Playing: Introduction to {course.category}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-4xl font-black text-gray-900 mb-2 md:mb-3 leading-tight tracking-tight">{course.title}</h1>
              <div className="flex flex-wrap items-center gap-4 md:gap-8 text-xs md:text-sm text-gray-500 font-medium">
                <div className="flex items-center gap-2">
                   <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(course.instructor)}`} className="h-6 w-6 rounded-lg" alt="" />
                   <span className="font-bold text-gray-900">{course.instructor}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                  <span className="font-black text-gray-900">{course.rating}</span>
                  <span className="text-gray-400">({course.studentsCount.toLocaleString()})</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 md:flex-none p-3 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm">
                <Share2 className="h-5 w-5 mx-auto text-gray-400" />
              </button>
              <button className="flex-1 md:flex-none p-3 rounded-2xl border border-gray-100 bg-white hover:bg-gray-50 transition-all shadow-sm">
                <Bookmark className="h-5 w-5 mx-auto text-gray-400" />
              </button>
            </div>
          </div>

          <div className="flex gap-6 md:gap-10 border-b border-gray-100 overflow-x-auto no-scrollbar">
             <button className="pb-4 text-xs md:text-sm font-black text-indigo-600 border-b-4 border-indigo-600 whitespace-nowrap uppercase tracking-widest">Syllabus</button>
             <button className="pb-4 text-xs md:text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap uppercase tracking-widest">Overview</button>
             <button className="pb-4 text-xs md:text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap uppercase tracking-widest">Resources</button>
             <button className="pb-4 text-xs md:text-sm font-bold text-gray-400 hover:text-gray-900 transition-colors whitespace-nowrap uppercase tracking-widest">Reviews</button>
          </div>

          <div className="space-y-4">
            {course.syllabus.map((lesson, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "group flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all cursor-pointer",
                  lesson.isCompleted 
                    ? "bg-white border-gray-50 opacity-60" 
                    : "bg-white border-gray-100 hover:border-indigo-200 hover:shadow-md"
                )}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={cn(
                    "flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border-2 transition-colors",
                    lesson.isCompleted ? "bg-emerald-50 border-emerald-100" : "bg-gray-50 border-gray-100 group-hover:bg-indigo-50 group-hover:border-indigo-100"
                  )}>
                    {lesson.isCompleted ? (
                      <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                    ) : (
                      <Play className={cn("h-4 w-4 md:h-5 md:w-5 text-gray-400 group-hover:text-indigo-600", idx > 2 ? "hidden" : "block")} />
                    )}
                    {idx > 2 && !lesson.isCompleted && <Lock className="h-4 w-4 md:h-5 md:w-5 text-gray-300" />}
                  </div>
                  <div>
                    <p className={cn("text-sm md:text-base font-black", lesson.isCompleted ? "text-gray-400" : "text-gray-900")}>
                      {idx + 1}. {lesson.title}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mt-1">
                       <span className="flex items-center gap-1.5"><Clock className="h-3 w-3" /> {lesson.duration}</span>
                       <span>• Video Lesson</span>
                    </div>
                  </div>
                </div>
                {!lesson.isCompleted && idx <= 2 && (
                  <button className="hidden sm:block text-xs font-black text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">
                    Watch Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 md:space-y-10">
           <Card className="p-8 border-none bg-white shadow-xl shadow-indigo-100/50">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">Overall Progress</p>
                  <h4 className="text-3xl font-black text-gray-900">{course.progress}%</h4>
                </div>
                <div className="h-16 w-16 rounded-full border-4 border-indigo-600 border-r-gray-100 flex items-center justify-center shadow-inner">
                   <span className="text-[10px] font-black text-indigo-600">{course.progress}%</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed font-medium">
                You've completed <span className="text-gray-900 font-bold">{course.syllabus.filter(s => s.isCompleted).length}</span> out of {course.syllabus.length} modules. Finish the next module to earn your badge!
              </p>
              <button className="w-full h-14 rounded-2xl bg-indigo-600 text-white font-black hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 active:scale-95">
                CONTINUE LEARNING
              </button>
           </Card>

           <div className="space-y-5">
              <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">What's included</h3>
              <ul className="space-y-4">
                {[
                  "12 hours of high-quality video",
                  "Lifetime access to content",
                  "Hands-on projects and quizzes",
                  "Verified certificate of completion",
                  "Exclusive community access"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm font-bold text-gray-600">
                    <div className="h-5 w-5 rounded-md bg-emerald-50 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
           </div>

           <Card className="bg-gray-900 border-none p-8 text-white overflow-hidden relative group">
              <div className="relative z-10">
                <MessageCircle className="h-10 w-10 text-indigo-400 mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-black mb-2 tracking-tight">Need help?</h3>
                <p className="text-sm text-gray-400 mb-6 leading-relaxed">Chat with our mentors and fellow students in the community.</p>
                <button className="flex items-center gap-2 text-xs font-black text-white hover:text-indigo-300 transition-colors uppercase tracking-[0.15em]">
                  Join Discord Community
                </button>
              </div>
              <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-indigo-600/30 rounded-full blur-3xl opacity-50" />
           </Card>
        </div>
      </div>
    </div>
  );
}
