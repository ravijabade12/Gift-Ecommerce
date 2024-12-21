import React from "react";
import { Gift, Package, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-purple-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-bold text-gray-900 leading-tight">
              Craft Perfect Moments with
              <span className="text-pink-600"> Personalized Gifts</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover unique gifts for every occasion. From weddings to
              corporate events, make every moment memorable with our
              customizable collection.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="px-8 py-3 bg-pink-600 text-white rounded-full font-semibold hover:bg-pink-700 transition-colors"
              >
                Shop Now
              </Link>
              <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-colors">
                Customize Gifts
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-full bg-pink-200/30 absolute -top-8 -right-8 w-72 h-72 animate-pulse" />
            <img
              src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Gift boxes"
              className="relative rounded-lg shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: Gift,
              title: "Unique Selection",
              description: "Carefully curated gifts for every occasion",
            },
            {
              icon: Package,
              title: "Custom Packaging",
              description: "Beautiful gift wrapping and personalization",
            },
            {
              icon: Heart,
              title: "Made with Love",
              description: "Handcrafted with attention to detail",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <feature.icon className="h-12 w-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
