import { Clock, BookOpen, CheckCircle, Trophy, Sparkles, ChevronRight } from "lucide-react";
import { mockUser, mockCourses } from "@/data/mockData";
import { StatCard } from "@/components/ui/StatCard";
import { CourseCard } from "@/components/ui/CourseCard";
import { ActivityChart } from "@/components/ActivityChart";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  const activeCourses = mockCourses.filter(c => c.progress > 0 && c.progress < 100);

  return (
    <div className="space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-[0.2em] mb-2">
            <Sparkles className="h-3 w-3" />
            Personal Dashboard
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight leading-none">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">{mockUser.name.split(' ')[0]}</span>!
          </h1>
          <p className="text-gray-500 mt-3 font-medium">You've reached <span className="text-gray-900 font-bold">75%</span> of your weekly goal. Keep pushing!</p>
        </div>
        <div className="flex items-center gap-3">
           <button className="px-5 py-2.5 rounded-xl bg-white border border-gray-100 shadow-sm text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">
             Download Report
           </button>
           <button className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-100 text-sm font-bold hover:bg-indigo-700 transition-all active:scale-95">
             Add Course
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          index={0}
          label="Hours Learned"
          value={mockUser.stats.hoursLearned}
          icon={Clock}
          trend={{ value: 12, isPositive: true }}
          color="bg-blue-500"
        />
        <StatCard
          index={1}
          label="In Progress"
          value={mockUser.stats.coursesInProgress}
          icon={BookOpen}
          color="bg-indigo-500"
        />
        <StatCard
          index={2}
          label="Completed"
          value={mockUser.stats.completedCourses}
          icon={CheckCircle}
          color="bg-emerald-500"
        />
        <StatCard
          index={3}
          label="Achievements"
          value={mockUser.stats.achievements}
          icon={Trophy}
          color="bg-amber-500"
        />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-10">
          <ActivityChart />
          
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                Continue Learning
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100 text-[10px] text-indigo-600 font-black">
                  {activeCourses.length}
                </span>
              </h2>
              <button className="text-xs font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest flex items-center gap-1 group">
                View All <ChevronRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {activeCourses.slice(0, 2).map((course, i) => (
                <CourseCard key={course.id} course={course} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-10">
          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-6">Deadlines</h2>
            <div className="space-y-4">
              {activeCourses.map((course, i) => (
                <Card key={course.id} delay={i * 0.1} className="p-4 border-none shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "h-10 w-10 rounded-xl flex items-center justify-center font-bold text-xs",
                      i === 0 ? "bg-red-50 text-red-600" : "bg-gray-50 text-gray-400"
                    )}>
                      {i === 0 ? "TOM" : "WED"}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-1">{course.title}</p>
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Module 4 Quiz</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-black text-gray-900 tracking-tight mb-6">Quick Discover</h2>
            <div className="space-y-5">
              {mockCourses.filter(c => c.progress === 0).slice(0, 2).map((course, i) => (
                <CourseCard key={course.id} course={course} variant="compact" index={i} />
              ))}
            </div>
          </div>

          <Card className="bg-gray-900 border-none p-8 text-white relative overflow-hidden group shadow-2xl shadow-indigo-200">
             <div className="relative z-10">
               <Trophy className="h-10 w-10 text-amber-400 mb-4 transition-transform group-hover:scale-110 group-hover:rotate-12" />
               <h3 className="text-xl font-black mb-2">Join the Elite!</h3>
               <p className="text-gray-400 text-sm mb-6 leading-relaxed">Join 5,000+ students in our upcoming Web Design hackathon.</p>
               <button className="w-full py-3 bg-indigo-600 rounded-xl text-xs font-black shadow-lg shadow-indigo-900/40 hover:bg-indigo-500 transition-colors">
                 REGISTER NOW
               </button>
             </div>
             <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-indigo-600/20 rounded-full blur-3xl" />
          </Card>
        </div>
      </div>
    </div>
  );
}
