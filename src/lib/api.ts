import { mockCourses, mockUser, Course, User } from "@/data/mockData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getCourses(): Promise<Course[]> {
  await delay(500); // Simulate network latency
  return mockCourses;
}

export async function getCourseById(id: string): Promise<Course | undefined> {
  await delay(300);
  return mockCourses.find((course) => course.id === id);
}

export async function getUser(): Promise<User> {
  await delay(400);
  return mockUser;
}
