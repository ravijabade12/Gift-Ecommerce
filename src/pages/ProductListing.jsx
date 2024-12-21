import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductFilters from "../components/ProductFilters";
import { useCategories } from "../components/Categories";
import spaimg from "../assets/spa-image.jpg";

const products = [
  {
    id: 1,
    name: "Luxury Wedding Gift Box",
    description: "Elegant gift box with personalized items for the newlyweds",
    price: 149.99,
    originalPrice: 199.99,
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "wedding",
    isNew: true,
    customization: true,
  },
  {
    id: 2,
    name: "Birthday Celebration Hamper",
    description: "Complete birthday celebration package with customized items",
    price: 79.99,
    originalPrice: 99.99,
    image:
      "https://images.unsplash.com/photo-1577998474517-7eeeed4e448a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "birthday",
    discount: 20,
  },
  {
    id: 3,
    name: "Corporate Excellence Pack",
    description: "Professional gift set for corporate celebrations",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "corporate",
    isNew: true,
  },
  {
    id: 4,
    name: "Deluxe Spa Hamper",
    description: "Luxurious spa and wellness gift collection",
    price: 129.99,
    originalPrice: 159.99,
    image: spaimg,
    category: "custom",
    customization: true,
  },
  {
    id: 5,
    name: "Diwali Special Gift Box",
    description: "Traditional festive gift box with modern touches",
    price: 89.99,
    originalPrice: 119.99,
    image:
      "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "seasonal",
    discount: 25,
  },
  {
    id: 6,
    name: "Anniversary Romance Package",
    description: "Romantic gift set for special anniversaries",
    price: 169.99,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "wedding",
    customization: true,
  },
];

export default function ProductListing() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const searchParam = searchParams.get("search");
  const [activeCategory, setActiveCategory] = useState(categoryParam || "all");
  const categories = useCategories();

  const allCategories = [
    { id: "all", name: "All Products" },
    ...categories,
    { id: "seasonal", name: "Seasonal Specials" },
  ];

  useEffect(() => {
    if (categoryParam) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  const filterProducts = (products) => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === activeCategory
      );
    }

    // Filter by search term
    if (searchParam) {
      const searchTerms = searchParam.toLowerCase().split(" ");
      filtered = filtered.filter((product) => {
        const searchString =
          `${product.name} ${product.description} ${product.category}`.toLowerCase();
        return searchTerms.every((term) => searchString.includes(term));
      });
    }

    return filtered;
  };

  const filteredProducts = filterProducts(products);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            {searchParam
              ? `Search Results for "${searchParam}"`
              : "Our Products"}
          </h1>
        </div>

        <ProductFilters
          categories={allCategories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onClearFilters={() => setActiveCategory("all")}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found.</p>
            {searchParam && (
              <p className="text-sm text-gray-500 mt-2">
                Try adjusting your search terms or browse our categories.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
