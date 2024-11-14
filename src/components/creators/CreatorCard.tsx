import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, TrendingUp, Star } from 'lucide-react';

interface CreatorCardProps {
  id: number;
  name: string;
  category: string;
  image: string;
  followers: string;
  engagement: string;
  rating: number;
  location: string;
}

export default function CreatorCard({
  id,
  name,
  category,
  image,
  followers,
  engagement,
  rating,
  location
}: CreatorCardProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-medium text-purple-600">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">{location}</p>
        
        <div className="mt-4 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="flex items-center justify-center text-purple-600">
              <Users className="h-5 w-5" />
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{followers}</p>
            <p className="text-xs text-gray-500">Followers</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-purple-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{engagement}</p>
            <p className="text-xs text-gray-500">Engagement</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-purple-600">
              <Star className="h-5 w-5" />
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">{rating}</p>
            <p className="text-xs text-gray-500">Rating</p>
          </div>
        </div>

        <button 
          onClick={() => navigate(`/creator/${id}`)}
          className="mt-6 w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          View Profile
        </button>
      </div>
    </div>
  );
}