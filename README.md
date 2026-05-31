# 🎓 EduHub - Next-Gen Learning Dashboard

EduHub is a high-fidelity, full-stack Learning Management System (LMS) dashboard designed for modern students. It features a "Neo-Minimalist" aesthetic, interactive motion, and a robust backend powered by MongoDB and NextAuth.js.

![EduHub Preview](https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200)

## ✨ Features

-   **🚀 Dynamic Dashboard:** Real-time learning statistics, interactive progress charts (Recharts), and "Continue Learning" shortcuts.
-   **📚 Course Catalog:** Comprehensive catalog with real-time search and category filtering.
-   **🎥 Interactive Learning:** Deep-dive course views with a mocked video player and an interactive syllabus.
-   **🤝 Student Community:** A full-featured social hub with trending topics, discussion feeds, and contributor leaderboards.
-   **💬 Mentorship Messages:** Real-time chat interface with contact management and online status indicators.
-   **📝 Assignment Tracker:** Status-coded assignment management (Pending, Completed, Missed) with grade tracking.
-   **🔐 Secure Auth:** Full authentication system using **NextAuth.js**, featuring secure registration, login, and session-aware UI.
-   **📱 Fully Responsive:** Adaptive design for Mobile, Tablet, and Desktop views.

## 🛠️ Tech Stack

-   **Frontend:** React 19, Next.js 16 (App Router), Tailwind CSS 4, Framer Motion.
-   **Backend:** Next.js API Routes (Serverless Functions).
-   **Database:** MongoDB Atlas with Mongoose ORM.
-   **Authentication:** NextAuth.js (Auth.js) with JWT strategy.
-   **Charts/Icons:** Recharts, Lucide React.

## 🚀 Getting Started

### Prerequisites

-   Node.js 20+
-   MongoDB Atlas account

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/nik1062/EduHub-dashboard.git
    cd EduHub-dashboard
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    Create a `.env.local` file in the root directory and add your credentials:
    ```env
    MONGODB_URI=your_mongodb_atlas_connection_string
    AUTH_SECRET=your_generated_random_secret
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser.

## 🌍 Hosting & Deployment

https://edu-hub-dashboard-blue.vercel.app

The easiest way to deploy this project is via [Vercel](https://vercel.com).

### Steps to Deploy:

1.  **Push your code** to GitHub (if not already done).
2.  **Import the project** in Vercel.
3.  **Configure Environment Variables** in the Vercel Dashboard:
    -   Add `MONGODB_URI` (your Atlas string).
    -   Add `AUTH_SECRET` (generate one using `openssl rand -base64 32`).
4.  **Click Deploy.** Vercel will automatically configure the Next.js build and host your MongoDB API routes.

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---
Built with ❤️ for the Next-Gen Student Experience.
