import React from "react";
import { useNavigate } from "react-router-dom";
import { Gift, Cake, GemIcon, Briefcase, Package, Heart } from "lucide-react";

import customHappers from "../assets/custom-happers.jpg";

const categories = [
  {
    id: "wedding",
    name: "Wedding Gifts",
    description: "Elegant gifts for the special day",
    icon: GemIcon,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "birthday",
    name: "Birthday Favors",
    description: "Make their day special",
    icon: Cake,
    image:
      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "corporate",
    name: "Corporate Gifts",
    description: "Professional gifting solutions",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "custom",
    name: "Custom Hampers",
    description: "Personalized gift collections",
    icon: Package,
    image: customHappers,
  },
];

export function useCategories() {
  return categories;
}

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryId) => {
    navigate(`/products?category=${categoryId}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of gifts for every
            occasion
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="aspect-square relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <category.icon className="h-8 w-8 mb-2" />
                  <h3 className="text-xl font-semibold mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
