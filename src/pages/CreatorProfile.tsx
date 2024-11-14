import React from 'react';
import { MapPin, Instagram, Youtube, Twitter } from 'lucide-react';
import CreatorStats from '../components/creator/CreatorStats';
import ContentGallery from '../components/creator/ContentGallery';
import PricingCard from '../components/creator/PricingCard';

export default function CreatorProfile() {
  const creator = {
    name: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    location: 'Los Angeles, CA',
    bio: 'Fashion and lifestyle content creator passionate about sustainable fashion and mindful living. Helping brands connect with conscious consumers.',
    stats: {
      followers: '500K',
      engagement: '4.8%',
      avgLikes: '25K',
      reach: '2.5M'
    },
    contents: [
      { id: '1', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', likes: '32K', comments: '428' },
      { id: '2', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', likes: '28K', comments: '385' },
      { id: '3', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', likes: '45K', comments: '512' }
    ],
    packages: [
      {
        title: 'Basic Post',
        price: '1,500',
        features: ['1 Instagram Post', 'Story Mention', '24h Turnaround', 'Usage Rights'],
      },
      {
        title: 'Premium Package',
        price: '3,000',
        features: ['3 Instagram Posts', '5 Stories', 'Reel Video', '48h Turnaround', 'Usage Rights'],
        popular: true,
      },
      {
        title: 'Brand Campaign',
        price: '5,000',
        features: ['5 Instagram Posts', '10 Stories', '2 Reel Videos', 'Dedicated Blog Post', 'Priority Support'],
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="flex-1">
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-900">{creator.name}</h1>
                <p className="mt-1 text-gray-600 flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-1" />
                  {creator.location}
                </p>
              </div>
              <p className="mt-4 text-gray-600 max-w-2xl">{creator.bio}</p>
              <div className="mt-4 flex items-center justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-600">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <CreatorStats {...creator.stats} />

        {/* Content Gallery */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Content</h2>
          <ContentGallery contents={creator.contents} />
        </div>

        {/* Pricing */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Collaboration Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {creator.packages.map((pkg) => (
              <PricingCard key={pkg.title} {...pkg} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}