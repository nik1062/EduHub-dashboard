"use client";

import { 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Download,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const assignments = [
  {
    id: 1,
    title: "Responsive Dashboard Design",
    course: "Advanced UI/UX Design Principles",
    dueDate: "Tomorrow, 11:59 PM",
    status: "pending",
    type: "Project",
    priority: "High",
  },
  {
    id: 2,
    title: "React State Management Quiz",
    course: "Full-Stack Web Development",
    dueDate: "Oct 24, 2024",
    status: "completed",
    type: "Quiz",
    grade: "95/100",
  },
  {
    id: 3,
    title: "User Research Interview Script",
    course: "Advanced UI/UX Design Principles",
    dueDate: "Oct 20, 2024",
    status: "missed",
    type: "Document",
  }
];

export default function Assignments() {
  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight">Assignments</h1>
          <p className="text-gray-500 mt-2 font-medium">Track your progress and upcoming deadlines.</p>
        </div>
        <div className="flex items-center gap-2 p-1 bg-white border border-gray-100 rounded-2xl shadow-sm">
           <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-black transition-all">ALL</button>
           <button className="px-4 py-2 rounded-xl text-gray-500 text-xs font-black hover:bg-gray-50 transition-all">PENDING</button>
           <button className="px-4 py-2 rounded-xl text-gray-500 text-xs font-black hover:bg-gray-50 transition-all">COMPLETED</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {assignments.map((assignment, i) => (
          <Card key={assignment.id} delay={i * 0.1} className="p-0 border-none overflow-hidden group">
            <div className="flex flex-col md:flex-row">
               <div className={cn(
                 "w-2 md:w-3",
                 assignment.status === "pending" ? "bg-amber-400" : 
                 assignment.status === "completed" ? "bg-emerald-500" : "bg-rose-500"
               )} />
               <div className="flex-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-8">
                 <div className="flex items-start gap-6">
                   <div className={cn(
                     "h-14 w-14 rounded-2xl flex items-center justify-center shadow-inner",
                     assignment.status === "pending" ? "bg-amber-50 text-amber-600" : 
                     assignment.status === "completed" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                   )}>
                     {assignment.type === "Project" ? <ClipboardList className="h-7 w-7" /> : 
                      assignment.type === "Quiz" ? <AlertCircle className="h-7 w-7" /> : <FileText className="h-7 w-7" />}
                   </div>
                   <div>
                     <div className="flex items-center gap-3 mb-1">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{assignment.type}</span>
                        {assignment.priority && (
                          <span className="px-2 py-0.5 rounded-md bg-rose-50 text-rose-600 text-[10px] font-black uppercase tracking-tighter">
                            {assignment.priority} Priority
                          </span>
                        )}
                     </div>
                     <h3 className="text-xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors mb-1">{assignment.title}</h3>
                     <p className="text-sm font-medium text-gray-500">{assignment.course}</p>
                   </div>
                 </div>

                 <div className="flex flex-col md:items-end gap-4 min-w-[200px]">
                    <div className="flex items-center gap-2">
                       <Clock className="h-4 w-4 text-gray-400" />
                       <span className="text-sm font-bold text-gray-700">{assignment.dueDate}</span>
                    </div>
                    <div className="flex items-center gap-3 w-full md:w-auto">
                       {assignment.status === "pending" ? (
                         <button className="flex-1 md:flex-none px-6 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-black shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-all">
                           SUBMIT NOW
                         </button>
                       ) : assignment.status === "completed" ? (
                         <div className="flex items-center gap-2 text-emerald-600 font-black text-sm">
                           <CheckCircle2 className="h-5 w-5" /> {assignment.grade}
                         </div>
                       ) : (
                         <button className="flex-1 md:flex-none px-6 py-2.5 bg-gray-100 text-gray-400 rounded-xl text-xs font-black cursor-not-allowed">
                           EXPIRED
                         </button>
                       )}
                       <button className="p-2.5 rounded-xl border border-gray-100 text-gray-400 hover:text-gray-900 transition-all">
                         <ChevronRight className="h-5 w-5" />
                       </button>
                    </div>
                 </div>
               </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
         <Card className="p-8 border-none bg-indigo-50/50">
            <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-4">Total Weight</h4>
            <div className="text-3xl font-black text-gray-900 mb-2">84%</div>
            <p className="text-sm text-gray-500 font-medium">Overall submission rate across all courses.</p>
         </Card>
         <Card className="p-8 border-none bg-emerald-50/50">
            <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em] mb-4">Average Grade</h4>
            <div className="text-3xl font-black text-gray-900 mb-2">A-</div>
            <p className="text-sm text-gray-500 font-medium">Top 10% of your class cohort.</p>
         </Card>
         <Card className="p-8 border-none bg-amber-50/50">
            <h4 className="text-[10px] font-black text-amber-400 uppercase tracking-[0.2em] mb-4">Time Saved</h4>
            <div className="text-3xl font-black text-gray-900 mb-2">12h</div>
            <p className="text-sm text-gray-500 font-medium">By completing assignments early this month.</p>
         </Card>
      </div>
    </div>
  );
}
