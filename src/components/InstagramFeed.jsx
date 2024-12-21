import React from "react";
import { Instagram, Heart, MessageCircle, Share2 } from "lucide-react";
import birthdayGift from "../assets/birthday-gifts.jpg";
import AnnivasryGift from "../assets/AnnivasryGift.jpg";

export default function InstagramFeed() {
  const posts = [
    {
      id: 1,
      username: "sarah_crafts",
      image: AnnivasryGift,
      likes: 234,
      comments: 12,
      caption: "The perfect anniversary gift! 🎁 #GiftCraftMoments",
    },
    {
      id: 2,
      username: "wedding_dreams",
      image:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 456,
      comments: 28,
      caption:
        "Our wedding favors were a hit! Thanks @giftcraft ✨ #GiftCraftMoments",
    },
    {
      id: 3,
      username: "gift_lover",
      image: birthdayGift,
      likes: 567,
      comments: 34,
      caption: "Birthday surprise done right 🎉 #GiftCraftMoments",
    },
    {
      id: 4,
      username: "corporate_events",
      image:
        "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      likes: 789,
      comments: 45,
      caption: "Corporate gifting made elegant 💼 #GiftCraftMoments",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="h-8 w-8 text-pink-600" />
            <h2 className="text-3xl font-bold text-gray-900">
              Share Your Moments
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tag your photos with{" "}
            <span className="font-semibold text-pink-600">
              #GiftCraftMoments
            </span>{" "}
            for a chance to be featured on our page
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={`Posted by ${post.username}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center text-white">
                    <Heart className="h-6 w-6 mr-2" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center text-white">
                    <MessageCircle className="h-6 w-6 mr-2" />
                    <span>{post.comments}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900">
                    @{post.username}
                  </span>
                  <Share2 className="h-5 w-5 text-gray-500 hover:text-pink-600 cursor-pointer" />
                </div>
                <p className="text-gray-600 text-sm">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:from-pink-700 hover:to-purple-700 transition-colors duration-300"
          >
            <Instagram className="h-5 w-5" />
            Follow Us on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
