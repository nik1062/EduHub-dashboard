"use client";

import { motion } from "framer-motion";
import { Clock, Star, Users, ArrowRight } from "lucide-react";
import { Course } from "@/data/mockData";
import { Card } from "./Card";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface CourseCardProps {
  course: Course;
  variant?: "default" | "compact";
  index?: number;
}

export function CourseCard({ course, variant = "default", index = 0 }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <Card 
          className={cn(
            "group overflow-hidden p-0 transition-all border-none bg-white", 
            variant === "compact" ? "flex items-center gap-4 p-3" : ""
          )}
          delay={index * 0.1}
        >
          <div className={cn("relative overflow-hidden", variant === "compact" ? "h-20 w-20 flex-shrink-0 rounded-xl" : "aspect-[16/10]")}>
            <img
              src={course.thumbnail}
              alt={course.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
               <span className="text-white text-xs font-bold flex items-center gap-1">
                 View Details <ArrowRight className="h-3 w-3" />
               </span>
            </div>
            {variant === "default" && (
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-indigo-600/90 px-3 py-1 text-[10px] font-bold text-white backdrop-blur-md uppercase tracking-wider">
                  {course.category}
                </span>
              </div>
            )}
          </div>

          <div className={cn("p-5", variant === "compact" ? "flex-1 p-0" : "")}>
            <h3 className={cn("font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2", variant === "compact" ? "text-sm" : "text-lg leading-tight mb-2")}>
              {course.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4">{course.instructor}</p>

            {variant === "default" && (
              <>
                <div className="flex items-center gap-4 text-[11px] font-medium text-gray-500 mb-5">
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 rounded-lg">
                    <Clock className="h-3 w-3 text-indigo-500" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-yellow-50 rounded-lg text-yellow-700">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-blue-50 rounded-lg text-blue-700">
                    <Users className="h-3 w-3" />
                    {course.studentsCount.toLocaleString()}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-bold text-gray-400 uppercase tracking-wider">Course Progress</span>
                    <span className="text-indigo-600 font-black">{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 1, delay: (index * 0.1) + 0.5 }}
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-[0_0_8px_rgba(79,70,229,0.4)]"
                    />
                  </div>
                </div>
              </>
            )}

            {variant === "compact" && (
              <div className="flex items-center justify-between">
                 <div className="h-1.5 w-24 overflow-hidden rounded-full bg-gray-100">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${course.progress}%` }}
                      transition={{ duration: 0.8, delay: (index * 0.1) + 0.3 }}
                      className="h-full bg-indigo-600"
                    />
                  </div>
                  <span className="text-[10px] font-black text-indigo-600">{course.progress}%</span>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
