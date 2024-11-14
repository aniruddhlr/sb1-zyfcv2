import React from 'react';
import { Users, Heart, BarChart2, Target } from 'lucide-react';

interface CreatorStatsProps {
  followers: string;
  engagement: string;
  avgLikes: string;
  reach: string;
}

export default function CreatorStats({ followers, engagement, avgLikes, reach }: CreatorStatsProps) {
  const stats = [
    { label: 'Followers', value: followers, icon: Users },
    { label: 'Engagement', value: engagement, icon: Heart },
    { label: 'Avg. Likes', value: avgLikes, icon: BarChart2 },
    { label: 'Monthly Reach', value: reach, icon: Target },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="bg-white p-4 rounded-lg shadow-sm">
          <div className="flex items-center space-x-2">
            <Icon className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">{label}</span>
          </div>
          <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>
        </div>
      ))}
    </div>
  );
}