"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { mockCourses } from "@/data/mockData";
import { CourseCard } from "@/components/ui/CourseCard";

const categories = ["All", "Design", "Development", "Data Science", "Business"];

export default function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = mockCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Course Catalog</h1>
          <p className="text-gray-500">Explore and enroll in new courses to expand your skills.</p>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by course name or instructor..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="h-11 w-full rounded-xl border border-gray-200 bg-white pl-10 pr-4 text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-sm"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
          <Filter className="h-4 w-4 text-gray-400 mr-1 hidden sm:block" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-200 hover:text-indigo-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 rounded-full bg-gray-100 p-6">
            <Search className="h-10 w-10 text-gray-400" />
          </div>
          <h3 className="text-lg font-bold text-gray-900">No courses found</h3>
          <p className="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
        </div>
      )}
    </div>
  );
}
