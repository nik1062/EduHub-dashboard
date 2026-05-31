import { Settings as SettingsIcon, Bell, Shield, Eye, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/Card";

export default function Settings() {
  const settingsSections = [
    {
      title: "General",
      icon: SettingsIcon,
      items: ["Appearance", "Language", "Timezone"]
    },
    {
      title: "Notifications",
      icon: Bell,
      items: ["Email Notifications", "Push Notifications", "In-app Alerts"]
    },
    {
      title: "Security",
      icon: Shield,
      items: ["Change Password", "Two-Factor Authentication", "Sessions"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500">Manage your account settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {settingsSections.map((section, idx) => (
          <Card key={idx} className="p-8">
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-indigo-50 rounded-lg">
                  <section.icon className="h-5 w-5 text-indigo-600" />
               </div>
               <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
            </div>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-gray-50 last:border-0">
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                  <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700">Configure</button>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
