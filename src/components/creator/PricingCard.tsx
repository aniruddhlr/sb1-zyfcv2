import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function PricingCard({ title, price, features, popular }: PricingCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm p-6 ${popular ? 'ring-2 ring-purple-600' : ''}`}>
      {popular && (
        <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </span>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mt-4">{title}</h3>
      <p className="mt-4">
        <span className="text-4xl font-bold text-gray-900">${price}</span>
        <span className="text-gray-500 ml-2">per post</span>
      </p>
      <ul className="mt-6 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-center">
            <Check className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 w-full bg-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-700 transition-colors">
        Book Now
      </button>
    </div>
  );
}