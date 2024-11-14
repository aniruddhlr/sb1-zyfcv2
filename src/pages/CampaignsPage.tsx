import React, { useState } from 'react';
import { Search, Filter, Briefcase, Calendar, DollarSign, Users } from 'lucide-react';

export default function CampaignsPage() {
  const [activeTab, setActiveTab] = useState('browse');

  const campaigns = [
    {
      id: '1',
      title: 'Summer Fashion Collection Launch',
      brand: 'StyleCo',
      budget: '$2,000 - $3,000',
      deadline: 'Jun 30, 2024',
      category: 'Fashion',
      requirements: '1 Post, 2 Stories',
      applicants: 28,
      description: 'Looking for fashion influencers to showcase our new summer collection. Focus on sustainable materials and ethical fashion.',
      image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '2',
      title: 'Healthy Lifestyle App Promotion',
      brand: 'FitLife',
      budget: '$1,500 - $2,500',
      deadline: 'Jun 15, 2024',
      category: 'Health & Fitness',
      requirements: '1 Reel, 3 Stories',
      applicants: 42,
      description: 'Seeking fitness and wellness creators to promote our new lifestyle tracking app. Must have experience in health tech.',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: '3',
      title: 'Eco-Friendly Product Review',
      brand: 'GreenEarth',
      budget: '$1,000 - $2,000',
      deadline: 'Jun 20, 2024',
      category: 'Lifestyle',
      requirements: '1 Review Video, 1 Post',
      applicants: 15,
      description: 'Looking for eco-conscious creators to review and showcase our sustainable home products line.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Campaign Opportunities</h1>
            <p className="mt-2 text-gray-600">Find and collaborate on exciting brand campaigns</p>
          </div>
          <button className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
            <Briefcase className="h-5 w-5 mr-2" />
            Post a Campaign
          </button>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-purple-600"
                placeholder="Search campaigns..."
              />
            </div>
            <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'browse'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Browse Campaigns
            </button>
            <button
              onClick={() => setActiveTab('applied')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'applied'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applied Campaigns
            </button>
          </nav>
        </div>

        {/* Campaign Cards */}
        <div className="grid grid-cols-1 gap-8">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 h-48 md:h-auto">
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">{campaign.title}</h2>
                      <p className="mt-1 text-sm text-gray-600">by {campaign.brand}</p>
                    </div>
                    <span className="mt-2 md:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      {campaign.category}
                    </span>
                  </div>
                  <p className="mt-4 text-gray-600">{campaign.description}</p>
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-5 w-5 text-gray-400 mr-2" />
                      {campaign.budget}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                      {campaign.deadline}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Briefcase className="h-5 w-5 text-gray-400 mr-2" />
                      {campaign.requirements}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-5 w-5 text-gray-400 mr-2" />
                      {campaign.applicants} applied
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-end">
                    <button className="inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}