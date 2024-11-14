import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, Zap, Users, TrendingUp } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const categories = [
    { name: 'Fashion & Style', count: '2.3k creators' },
    { name: 'Tech & Gaming', count: '1.8k creators' },
    { name: 'Food & Cooking', count: '1.5k creators' },
    { name: 'Fitness & Health', count: '1.2k creators' },
    { name: 'Travel & Adventure', count: '900 creators' },
    { name: 'Beauty & Cosmetics', count: '1.7k creators' },
  ];

  const featuredCreators = [
    {
      id: '1',
      name: 'Sarah Johnson',
      category: 'Fashion & Style',
      followers: '500K',
      engagement: '4.8%',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: '2',
      name: 'David Chen',
      category: 'Tech & Gaming',
      followers: '750K',
      engagement: '5.2%',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: '3',
      name: 'Maria Garcia',
      category: 'Food & Cooking',
      followers: '300K',
      engagement: '6.1%',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              Connect with the Perfect Creator
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-purple-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Find and collaborate with influential creators who align with your brand's vision. Streamline your influencer marketing campaigns.
            </p>
            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-4 border border-transparent rounded-lg leading-5 bg-white shadow-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-600"
                  placeholder="Search by category, niche, or location..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer border border-gray-100"
              onClick={() => navigate('/creators')}
            >
              <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{category.count}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Creators Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Creators</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCreators.map((creator) => (
              <div key={creator.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="h-48 w-full relative">
                  <img
                    src={creator.image}
                    alt={creator.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{creator.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{creator.category}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">
                        <Users className="h-4 w-4 inline mr-1" />
                        {creator.followers} followers
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        <TrendingUp className="h-4 w-4 inline mr-1" />
                        {creator.engagement} eng.
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/creator/${creator.id}`)}
                    className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose CreatorMatch</h2>
          <p className="mt-4 text-lg text-gray-600">
            The most comprehensive platform for creator-brand collaborations
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Verified Creators</h3>
            <p className="mt-2 text-gray-600">
              All creators are thoroughly vetted to ensure quality and authenticity
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Zap className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Smart Matching</h3>
            <p className="mt-2 text-gray-600">
              AI-powered algorithm to find the perfect creator for your campaign
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900">Real-time Analytics</h3>
            <p className="mt-2 text-gray-600">
              Track campaign performance and ROI with detailed insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}