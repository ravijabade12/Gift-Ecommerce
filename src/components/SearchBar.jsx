import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";

const suggestions = [
  { type: "category", value: "wedding", label: "Wedding Gifts" },
  { type: "category", value: "birthday", label: "Birthday Gifts" },
  { type: "category", value: "corporate", label: "Corporate Gifts" },
  { type: "category", value: "custom", label: "Custom Hampers" },
  { type: "category", value: "seasonal", label: "Seasonal Gifts" },
  { type: "product", value: "hamper", label: "Gift Hampers" },
  { type: "product", value: "photo frame", label: "Photo Frames" },
  { type: "product", value: "spa", label: "Spa Gifts" },
  { type: "product", value: "tech", label: "Tech Gifts" },
  { type: "occasion", value: "diwali", label: "Diwali Gifts" },
  { type: "occasion", value: "christmas", label: "Christmas Gifts" },
];

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (term) => {
    if (term.trim()) {
      navigate(`/products?search=${encodeURIComponent(term.trim())}`);
      setShowSuggestions(false);
      setSearchTerm("");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const filtered = suggestions.filter(
        (suggestion) =>
          suggestion.label.toLowerCase().includes(value.toLowerCase()) ||
          suggestion.value.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchTerm);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (suggestion.type === "category") {
      navigate(`/products?category=${suggestion.value}`);
    } else {
      handleSearch(suggestion.label);
    }
    setShowSuggestions(false);
    setSearchTerm("");
  };

  return (
    <div className="relative w-full max-w-lg" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search for gifts..."
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent pr-20"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="h-4 w-4 text-gray-400" />
            </button>
          )}
          <button
            onClick={() => handleSearch(searchTerm)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Search className="h-5 w-5 text-gray-400" />
          </button>
        </div>
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto z-50">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2"
            >
              <Search className="h-4 w-4 text-gray-400" />
              <div>
                <span className="text-gray-900">{suggestion.label}</span>
                <span className="text-xs text-gray-500 ml-2">
                  in {suggestion.type}s
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
