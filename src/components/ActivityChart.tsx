"use client";

import { useEffect, useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';
import { mockUser } from '@/data/mockData';
import { Card } from './ui/Card';

export function ActivityChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <Card className="flex flex-col h-[300px]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-bold text-gray-900">Learning Activity</h3>
        </div>
        <div className="flex-1 w-full bg-gray-50 rounded-lg animate-pulse" />
      </Card>
    );
  }

  return (
    <Card className="flex flex-col h-[300px]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-gray-900">Learning Activity</h3>
        <select className="text-sm border-none bg-transparent font-medium text-gray-500 focus:ring-0 cursor-pointer">
          <option>This Week</option>
          <option>Last Week</option>
        </select>
      </div>
      <div className="flex-1 w-full min-h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={mockUser.recentActivity}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#9ca3af', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: '#f9fafb' }}
              contentStyle={{ 
                borderRadius: '8px', 
                border: 'none', 
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' 
              }}
            />
            <Bar dataKey="hours" radius={[4, 4, 0, 0]}>
              {mockUser.recentActivity.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.hours > 3 ? '#4f46e5' : '#818cf8'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
