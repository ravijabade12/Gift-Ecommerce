import React from "react";
import { Gift, Package, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";
import { useRef } from "react";
import { Suspense } from "react";

export default function Hero() {
  function GiftModel(props) {
    // Replace "/bmw.glb" with your 3D gift model path in the public folder
    const { scene } = useGLTF("/gift.glb");
    const modelRef = useRef();

    return (
      <primitive
        ref={modelRef}
        position={[0, 0, 0]}
        object={scene}
        {...props}
      />
    );
  }
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
          <div className="relative h-[500px]">
            {" "}
            {/* Adjust height as needed */}
            <div className="relative w-full h-full">
              <Suspense
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    Loading 3D Model...
                  </div>
                }
              >
                <Canvas
                  dpr={[1, 2]}
                  shadows
                  camera={{ fov: 45, position: [0, 2, 5] }}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5rem", // rounded-lg
                    boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", // shadow-2xl
                  }}
                >
                  <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.5}
                    polar={[-0.1, Math.PI / 4]}
                  >
                    <Stage environment={"sunset"}>
                      <GiftModel scale={0.1} />
                    </Stage>
                  </PresentationControls>
                </Canvas>
              </Suspense>
            </div>
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
