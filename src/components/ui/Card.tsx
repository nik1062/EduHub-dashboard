"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animate?: boolean;
  delay?: number;
}

export function Card({ children, className, animate = true, delay = 0, ...props }: CardProps) {
  const Component = animate ? motion.div : "div";
  
  const animationProps = animate ? {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: delay, ease: [0.22, 1, 0.36, 1] }
  } : {};

  return (
    <Component
      className={cn(
        "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-md",
        className
      )}
      {...(animationProps as any)}
      {...props}
    >
      {children}
    </Component>
  );
}
