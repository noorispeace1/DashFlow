import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export const Searchtxt = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [caseSensitive, setCaseSensitive] = useState(false);
  const [activeTab, setActiveTab] = useState("highlighter"); // 'highlighter' | 'cards'
  const [selectedCategory, setSelectedCategory] = useState("All");

  const sampleParagraph = `DashFlow is a state-of-the-art inventory management and sales tracking application designed to streamline business operations with speed, clarity, and precision. It empowers teams to monitor stock levels in real time, record customer transactions effortlessly, and gain actionable insights through comprehensive visual dashboards. Built using a robust technology stack including React, Redux Toolkit, and Tailwind CSS, DashFlow delivers a smooth, responsive, and intuitive user experience across desktop and mobile devices. Whether you are running a retail storefront, managing warehouse logistics, or tracking product shipments, DashFlow provides the modular tools and performance needed to scale your enterprise efficiently.`;

  // Sample items dataset for search & filtering demonstration
  const featureItems = useMemo(
    () => [
      {
        id: 1,
        title: "Real-Time Inventory Tracking",
        category: "Inventory",
        description:
          "Keep track of stock quantities, item statuses, warehouse locations, and low-stock alerts dynamically.",
        badge: "Core Feature",
        icon: "📦",
      },
      {
        id: 2,
        title: "Sales & Revenue Analytics",
        category: "Sales",
        description:
          "Generate instant sales invoices, record customer payments, and analyze weekly or monthly revenue growth.",
        badge: "Analytics",
        icon: "📈",
      },
      {
        id: 3,
        title: "Role-Based Authentication",
        category: "Security",
        description:
          "Protect company data with encrypted JWT tokens, session persistence, and multi-user access permissions.",
        badge: "Security",
        icon: "🔐",
      },
      {
        id: 4,
        title: "Interactive Dashboards",
        category: "Analytics",
        description:
          "Visualize business performance with graphs, sales summaries, transaction tables, and key metrics.",
        badge: "UI/UX",
        icon: "📊",
      },
      {
        id: 5,
        title: "Multi-Device Responsive Design",
        category: "Platform",
        description:
          "Seamlessly access your inventory data on desktops, laptops, tablets, and smartphones with zero friction.",
        badge: "Mobile Ready",
        icon: "📱",
      },
      {
        id: 6,
        title: "Modular API & Fast Backend",
        category: "Platform",
        description:
          "Scalable backend architecture using Node.js and Express to process high volumes of product queries safely.",
        badge: "Performance",
        icon: "⚡",
      },
    ],
    []
  );

  const categories = ["All", "Inventory", "Sales", "Security", "Analytics", "Platform"];
  const quickSearchTags = ["DashFlow", "Inventory", "Sales", "Real time", "React", "Security", "Tracking"];

  // Helper to escape regex special characters
  const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  // Highlighter logic
  const { highlightedContent, matchCount, isFound } = useMemo(() => {
    const trimmed = searchTerm.trim();

    if (!trimmed) {
      return {
        highlightedContent: sampleParagraph,
        matchCount: 0,
        isFound: true,
      };
    }

    try {
      const escaped = escapeRegExp(trimmed);
      const flags = caseSensitive ? "g" : "gi";
      const regex = new RegExp(`(${escaped})`, flags);
      const parts = sampleParagraph.split(regex);
      const matches = sampleParagraph.match(regex);
      const count = matches ? matches.length : 0;

      if (count === 0) {
        return {
          highlightedContent: sampleParagraph,
          matchCount: 0,
          isFound: false,
        };
      }

      const highlighted = parts.map((part, index) => {
        const isMatch = caseSensitive
          ? part === trimmed
          : part.toLowerCase() === trimmed.toLowerCase();

        return isMatch ? (
          <mark
            key={index}
            className="bg-yellow-300 text-gray-950 font-bold px-1.5 py-0.5 rounded shadow-sm transition-all duration-150 inline-block ring-1 ring-yellow-400"
            style={{ backgroundColor: "#fde047" }}
          >
            {part}
          </mark>
        ) : (
          part
        );
      });

      return {
        highlightedContent: highlighted,
        matchCount: count,
        isFound: true,
      };
    } catch {
      return {
        highlightedContent: sampleParagraph,
        matchCount: 0,
        isFound: false,
      };
    }
  }, [searchTerm, caseSensitive, sampleParagraph]);

  // Helper to highlight search term inside arbitrary text strings
  const highlightSnippet = (text) => {
    const trimmed = searchTerm.trim();
    if (!trimmed) return text;

    try {
      const escaped = escapeRegExp(trimmed);
      const flags = caseSensitive ? "g" : "gi";
      const regex = new RegExp(`(${escaped})`, flags);
      const parts = text.split(regex);

      return parts.map((part, i) => {
        const isMatch = caseSensitive
          ? part === trimmed
          : part.toLowerCase() === trimmed.toLowerCase();

        return isMatch ? (
          <mark
            key={i}
            className="bg-yellow-300 text-gray-900 font-semibold px-1 rounded ring-1 ring-yellow-400"
            style={{ backgroundColor: "#fde047" }}
          >
            {part}
          </mark>
        ) : (
          part
        );
      });
    } catch {
      return text;
    }
  };

  // Filtered Cards dataset
  const filteredCards = useMemo(() => {
    const trimmed = searchTerm.trim();
    return featureItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      if (!trimmed) return matchesCategory;

      const searchTarget = `${item.title} ${item.description} ${item.category} ${item.badge}`;
      const matchesSearch = caseSensitive
        ? searchTarget.includes(trimmed)
        : searchTarget.toLowerCase().includes(trimmed.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [featureItems, selectedCategory, searchTerm, caseSensitive]);

  // Paragraph Stats
  const paragraphStats = useMemo(() => {
    const words = sampleParagraph.trim().split(/\s+/).length;
    const chars = sampleParagraph.length;
    return { words, chars };
  }, [sampleParagraph]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">
            <span>🔍 Intelligent Search & Highlight</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Search, Filter & Highlight
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Real-time keyword highlighting on English paragraphs and smart categorization filtering with interactive states.
          </p>
        </div>

        {/* Global Search Box & Control Card */}
        <div className="bg-white rounded-2xl shadow-md shadow-gray-200/50 border border-gray-200/80 p-5 sm:p-7 mb-8 transition-all">
          <div className="space-y-4">
            
            {/* Search Input Field */}
            <div className="relative">
              <label
                htmlFor="global-search-input"
                className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2"
              >
                Enter Search Query:
              </label>
              <div className="relative flex items-center">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-indigo-500">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  id="global-search-input"
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Type anything to search and highlight in yellow..."
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50/50 border border-gray-300 rounded-xl text-base text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition shadow-inner"
                />
                {searchTerm && (
                  <button
                    type="button"
                    onClick={() => setSearchTerm("")}
                    className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-700 transition"
                    title="Clear Search"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Quick Keyword Suggestion Pills & Filter Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2 border-t border-gray-100">
              <div className="flex items-center flex-wrap gap-1.5">
                <span className="text-xs text-gray-500 font-medium mr-1">
                  Quick tags:
                </span>
                {quickSearchTags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchTerm(tag)}
                    className={`text-xs px-2.5 py-1 rounded-lg border transition font-medium cursor-pointer ${
                      searchTerm.toLowerCase() === tag.toLowerCase()
                        ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                        : "bg-gray-100/80 text-gray-700 border-gray-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Case Sensitive Toggle */}
              <div className="flex items-center space-x-2 self-end sm:self-auto">
                <label className="flex items-center cursor-pointer select-none text-xs font-semibold text-gray-600 hover:text-gray-900">
                  <input
                    type="checkbox"
                    checked={caseSensitive}
                    onChange={(e) => setCaseSensitive(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 mr-1.5"
                  />
                  Case-sensitive
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* View Mode Tabs (Paragraph vs Card Grid) */}
        <div className="flex items-center justify-between border-b border-gray-200 mb-6 pb-2">
          <div className="flex space-x-2 sm:space-x-4">
            <button
              onClick={() => setActiveTab("highlighter")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-150 flex items-center space-x-2 cursor-pointer ${
                activeTab === "highlighter"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span>Paragraph Highlighter</span>
            </button>
            <button
              onClick={() => setActiveTab("cards")}
              className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-150 flex items-center space-x-2 cursor-pointer ${
                activeTab === "cards"
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "text-gray-600 hover:text-indigo-600 hover:bg-gray-100"
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <span>Cards Search & Filter ({filteredCards.length})</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PARAGRAPH HIGHLIGHTER */}
        {activeTab === "highlighter" && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Status Message Notification */}
            {searchTerm.trim() !== "" && (
              <div>
                {!isFound ? (
                  <div
                    id="no-text-found-message"
                    className="p-4 bg-red-50/90 border border-red-200 rounded-xl text-red-700 flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold">No text found</h4>
                        <p className="text-xs text-red-600">
                          The query &ldquo;<strong>{searchTerm.trim()}</strong>&rdquo; does not match any words in the paragraph.
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSearchTerm("")}
                      className="text-xs bg-red-100 hover:bg-red-200 text-red-800 font-semibold px-3 py-1.5 rounded-lg transition"
                    >
                      Clear
                    </button>
                  </div>
                ) : (
                  <div className="p-4 bg-amber-50/90 border border-amber-200 rounded-xl text-amber-900 flex items-center space-x-3 shadow-xs">
                    <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center text-yellow-800 flex-shrink-0">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">
                        Found {matchCount} occurrence{matchCount > 1 ? "s" : ""}
                      </h4>
                      <p className="text-xs text-amber-800">
                        Matching texts are highlighted below with a bright <strong>yellow background</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Paragraph Box */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-md p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-2 mb-4">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
                  <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                    English Text Paragraph
                  </h3>
                </div>
                <div className="flex items-center space-x-3 text-xs text-gray-500">
                  <span>Words: <strong>{paragraphStats.words}</strong></span>
                  <span>•</span>
                  <span>Characters: <strong>{paragraphStats.chars}</strong></span>
                  {searchTerm.trim() !== "" && isFound && (
                    <>
                      <span>•</span>
                      <span className="text-indigo-600 font-bold bg-indigo-50 px-2 py-0.5 rounded">
                        {matchCount} highlighted
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="text-gray-800 leading-relaxed text-base sm:text-lg font-normal font-sans selection:bg-indigo-100 selection:text-indigo-900 p-2">
                <p className="whitespace-pre-line">
                  {highlightedContent}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: SEARCH & FILTER CARDS */}
        {activeTab === "cards" && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* Category Filter Buttons */}
            <div className="flex items-center flex-wrap gap-2 pb-2">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mr-2">
                Categories:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-indigo-600 text-white shadow-sm scale-102"
                      : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cards Grid */}
            {filteredCards.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredCards.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-indigo-300 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{item.icon}</span>
                        <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-indigo-50 text-indigo-600 rounded-full border border-indigo-100">
                          {item.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                        {highlightSnippet(item.title)}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {highlightSnippet(item.description)}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                      <span className="font-semibold text-gray-500">{item.category}</span>
                      <span className="group-hover:translate-x-1 transition-transform text-indigo-600 font-semibold">
                        Details →
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200 p-8 shadow-xs">
                <div className="w-12 h-12 mx-auto rounded-full bg-red-50 text-red-500 flex items-center justify-center text-xl mb-3">
                  🔍
                </div>
                <h3 className="text-lg font-bold text-gray-900">No matching items found</h3>
                <p className="text-sm text-gray-500 mt-1 max-w-md mx-auto">
                  No cards matched &ldquo;<strong>{searchTerm}</strong>&rdquo; in the &ldquo;{selectedCategory}&rdquo; category. Try different keywords or reset filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg shadow transition"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 mt-12 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} DashFlow. All rights reserved.</span>
          <div className="flex space-x-4">
            <Link to="/" className="hover:text-indigo-600">Home</Link>
            <Link to="/searchtxt" className="hover:text-indigo-600">Search & Filter</Link>
            <Link to="/contact" className="hover:text-indigo-600">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Searchtxt;
