"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { GraduationCap, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        throw new Error("Invalid email or password");
      }

      router.push("/");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center shadow-xl shadow-indigo-200 mb-4">
            <GraduationCap className="h-7 w-7 text-white" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 tracking-tight">Welcome Back</h1>
          <p className="text-gray-500 font-medium mt-2">Sign in to your EduHub account.</p>
        </div>

        <Card className="p-8 border-none shadow-2xl shadow-gray-200/50">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-100 text-rose-600 text-sm font-bold text-center">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <label className="text-xs font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between ml-1">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Password</label>
                <button type="button" className="text-[10px] font-black text-indigo-600 hover:text-indigo-700 uppercase tracking-widest">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                />
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-indigo-600 text-white rounded-xl text-sm font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group active:scale-95"
            >
              {loading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  SIGN IN <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm font-bold text-gray-500">
              Don't have an account?{" "}
              <Link href="/register" className="text-indigo-600 hover:text-indigo-700 ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
