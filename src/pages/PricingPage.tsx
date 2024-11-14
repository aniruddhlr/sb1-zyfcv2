import React from 'react';
import { Check } from 'lucide-react';

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      description: 'Perfect for small businesses starting with creator marketing',
      features: [
        'Up to 5 active campaigns',
        'Basic analytics',
        'Email support',
        'Creator messaging',
        'Campaign management tools'
      ]
    },
    {
      name: 'Professional',
      price: '299',
      description: 'For growing brands seeking deeper creator relationships',
      features: [
        'Up to 20 active campaigns',
        'Advanced analytics',
        'Priority support',
        'Custom campaign briefs',
        'ROI tracking',
        'Content rights management',
        'Team collaboration tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Tailored solutions for large-scale creator campaigns',
      features: [
        'Unlimited campaigns',
        'Custom analytics',
        'Dedicated account manager',
        'API access',
        'Custom integrations',
        'Advanced reporting',
        'Multi-team management',
        'Custom contracts'
      ]
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Simple, Transparent Pricing</h1>
          <p className="mt-4 text-xl text-gray-600">
            Choose the perfect plan for your creator marketing needs
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-sm p-8 ${
                plan.popular ? 'ring-2 ring-purple-600' : ''
              }`}
            >
              {plan.popular && (
                <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-4">
                  Most Popular
                </span>
              )}
              <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
              <p className="mt-4 text-gray-600">{plan.description}</p>
              <p className="mt-8">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price === 'Custom' ? 'Custom' : `$${plan.price}`}
                </span>
                {plan.price !== 'Custom' && (
                  <span className="text-gray-600">/month</span>
                )}
              </p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-purple-600 mr-2 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors">
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}