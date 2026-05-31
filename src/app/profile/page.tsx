"use client";

import { motion } from "framer-motion";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit3,
  Camera,
  Shield,
  Bell,
  CreditCard
} from "lucide-react";
import { mockUser } from "@/data/mockData";
import { Card } from "@/components/ui/Card";

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-700 transition-all">
          <Edit3 className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <Card className="md:col-span-1 flex flex-col items-center text-center p-8">
          <div className="relative mb-6">
            <img 
              src={mockUser.avatar} 
              alt={mockUser.name} 
              className="h-32 w-32 rounded-full border-4 border-indigo-50 bg-gray-100"
            />
            <button className="absolute bottom-1 right-1 p-2 rounded-full bg-indigo-600 text-white border-4 border-white shadow-lg">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <h2 className="text-xl font-bold text-gray-900">{mockUser.name}</h2>
          <p className="text-sm text-gray-500 mb-6">{mockUser.role}</p>
          
          <div className="w-full space-y-3 pt-6 border-t border-gray-100">
             <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Student ID</span>
                <span className="font-mono font-bold text-gray-900">#ED-2024-882</span>
             </div>
             <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">Member Since</span>
                <span className="font-bold text-gray-900">May 2023</span>
             </div>
          </div>
        </Card>

        <Card className="md:col-span-2 p-8 space-y-8">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</p>
                 <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <User className="h-4 w-4 text-gray-400" />
                    {mockUser.name}
                 </div>
               </div>
               <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</p>
                 <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Mail className="h-4 w-4 text-gray-400" />
                    alex.johnson@example.com
                 </div>
               </div>
               <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone Number</p>
                 <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <Phone className="h-4 w-4 text-gray-400" />
                    +1 (555) 000-1234
                 </div>
               </div>
               <div className="space-y-1">
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location</p>
                 <div className="flex items-center gap-2 text-gray-900 font-medium">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    San Francisco, CA
                 </div>
               </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-6">Account Settings</h3>
            <div className="space-y-4">
               {[
                 { icon: Shield, label: "Password & Security", desc: "Manage your password and 2FA settings" },
                 { icon: Bell, label: "Notifications", desc: "Control which emails and alerts you receive" },
                 { icon: CreditCard, label: "Billing & Subscription", desc: "Manage your Pro plan and invoices" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                   <div className="flex items-center gap-4">
                     <div className="h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                        <item.icon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600" />
                     </div>
                     <div>
                       <p className="text-sm font-bold text-gray-900">{item.label}</p>
                       <p className="text-xs text-gray-500">{item.desc}</p>
                     </div>
                   </div>
                   <button className="text-xs font-bold text-indigo-600">Configure</button>
                 </div>
               ))}
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
