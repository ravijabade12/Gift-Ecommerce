import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, Clock, Sparkles } from "lucide-react";

export default function SeasonalPromotions() {
  const navigate = useNavigate();

  const promotions = [
    {
      id: 1,
      title: "Diwali Special Collection",
      description: "Illuminate celebrations with our curated festive hampers",
      image:
        "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "30% OFF",
      endDate: "Limited Time Offer",
      category: "seasonal",
    },
    {
      id: 2,
      title: "Wedding Season",
      description: "Exclusive trousseau packaging and return favor collections",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "20% OFF",
      endDate: "Seasonal Special",
      category: "wedding",
    },
    {
      id: 3,
      title: "Corporate Bulk Orders",
      description: "Special pricing for year-end corporate gifting",
      image:
        "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      discount: "Bulk Pricing",
      endDate: "Corporate Exclusive",
      category: "corporate",
    },
  ];

  const handleShopNow = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seasonal Specials
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Limited-time offers and exclusive collections for every celebration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-pink-600 text-white px-4 py-2 rounded-full font-semibold">
                  {promo.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-5 w-5 mr-2" />
                    <span className="text-sm">{promo.endDate}</span>
                  </div>
                  <button
                    className="btn btn-primary flex items-center"
                    onClick={() => handleShopNow(promo.category)}
                  >
                    <Sparkles className="h-4 w-4 mr-2" />
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
