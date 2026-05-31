export interface Course {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  progress: number;
  duration: string;
  category: string;
  rating: number;
  studentsCount: number;
  description: string;
  syllabus: {
    title: string;
    duration: string;
    isCompleted: boolean;
  }[];
}

export interface User {
  name: string;
  avatar: string;
  role: string;
  stats: {
    hoursLearned: number;
    coursesInProgress: number;
    completedCourses: number;
    achievements: number;
  };
  recentActivity: {
    id: string;
    day: string;
    hours: number;
  }[];
}

export const mockUser: User = {
  name: "Alex Johnson",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
  role: "Product Designer",
  stats: {
    hoursLearned: 124,
    coursesInProgress: 4,
    completedCourses: 12,
    achievements: 8,
  },
  recentActivity: [
    { id: "1", day: "Mon", hours: 2 },
    { id: "2", day: "Tue", hours: 4 },
    { id: "3", day: "Wed", hours: 1.5 },
    { id: "4", day: "Thu", hours: 5 },
    { id: "5", day: "Fri", hours: 3 },
    { id: "6", day: "Sat", hours: 1 },
    { id: "7", day: "Sun", hours: 2.5 },
  ],
};

export const mockCourses: Course[] = [
  {
    id: "c1",
    title: "Advanced UI/UX Design Principles",
    instructor: "Sarah Drasner",
    thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?w=800&q=80",
    progress: 75,
    duration: "12h 30m",
    category: "Design",
    rating: 4.9,
    studentsCount: 1240,
    description: "Master the art of creating intuitive and beautiful user interfaces with industry-standard design patterns.",
    syllabus: [
      { title: "Introduction to UI Design", duration: "45m", isCompleted: true },
      { title: "Color Theory & Typography", duration: "1h 15m", isCompleted: true },
      { title: "Layout & Composition", duration: "2h 30m", isCompleted: true },
      { title: "Advanced Prototyping", duration: "3h 45m", isCompleted: false },
    ],
  },
  {
    id: "c2",
    title: "Full-Stack Web Development with Next.js",
    instructor: "Lee Robinson",
    thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
    progress: 30,
    duration: "24h 45m",
    category: "Development",
    rating: 4.8,
    studentsCount: 3500,
    description: "Learn how to build production-ready applications with Next.js, React, and Tailwind CSS.",
    syllabus: [
      { title: "Getting Started with Next.js", duration: "1h 00m", isCompleted: true },
      { title: "Server Components vs Client Components", duration: "2h 30m", isCompleted: false },
      { title: "Data Fetching Strategies", duration: "3h 15m", isCompleted: false },
    ],
  },
  {
    id: "c3",
    title: "Introduction to Machine Learning",
    instructor: "Andrew Ng",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&q=80",
    progress: 10,
    duration: "40h 00m",
    category: "Data Science",
    rating: 5.0,
    studentsCount: 15000,
    description: "A comprehensive introduction to the fundamental concepts of machine learning.",
    syllabus: [
      { title: "Linear Regression", duration: "4h 00m", isCompleted: true },
      { title: "Logistic Regression", duration: "5h 00m", isCompleted: false },
    ],
  },
  {
    id: "c4",
    title: "Modern Project Management",
    instructor: "Julie Zhuo",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    progress: 0,
    duration: "8h 20m",
    category: "Business",
    rating: 4.7,
    studentsCount: 890,
    description: "Learn how to lead teams and manage complex projects using agile methodologies.",
    syllabus: [
      { title: "Agile Fundamentals", duration: "2h 00m", isCompleted: false },
      { title: "Scrum & Kanban", duration: "3h 00m", isCompleted: false },
    ],
  },
];
