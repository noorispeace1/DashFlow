import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-indigo-200/40 to-purple-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            <span>Next-Generation Inventory & Business Suite</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight max-w-4xl mx-auto leading-tight">
            Simplify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Inventory & Sales</span> in Real Time
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            DashFlow empowers modern businesses to track items, process sales transactions, and inspect real-time analytical metrics with unmatched speed and clarity.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <Link
              to="/register"
              className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3.5 rounded-xl text-base font-semibold shadow-lg shadow-indigo-600/25 hover:shadow-xl hover:shadow-indigo-600/35 active:scale-98 transition duration-150 text-center"
            >
              Get Started Free
            </Link>
            <Link
              to="/searchtxt"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-gray-200 text-gray-800 px-6 py-3.5 rounded-xl text-base font-semibold shadow-xs hover:border-indigo-300 transition duration-150 text-center flex items-center justify-center space-x-2"
            >
              <span>🔍 Search & Filter</span>
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 sm:mt-18 pt-10 border-t border-gray-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">99.9%</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Uptime Reliability</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">&lt; 50ms</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Search Latency</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">100%</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Responsive Design</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-600">24/7</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Data Synchronization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-y border-gray-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2">
              Features & Capabilities
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Built for Speed, Accuracy, and Growth
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                🔐
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Secure Authentication
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                State management with Redux Toolkit and token-based protection to keep your company records completely safe.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                📦
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Item Management
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Seamlessly add, update, delete, search, and categorize inventory products across all storage warehouses.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-gray-50/70 border border-gray-100 hover:border-indigo-200 hover:shadow-md transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Search & Live Filtering
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Instant interactive keyword searching with highlighted results, category filters, and immediate query feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to streamline your workflow?
          </h2>
          <p className="mt-3 text-indigo-100 text-sm sm:text-base max-w-xl mx-auto">
            Experience DashFlow&apos;s intelligent management features and discover a simpler way to run your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/register"
              className="px-6 py-3 bg-white text-indigo-600 hover:bg-indigo-50 font-bold rounded-xl shadow transition"
            >
              Create Free Account
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-indigo-700/60 hover:bg-indigo-700 text-white font-medium border border-white/20 rounded-xl transition"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 text-white flex items-center justify-center text-xs font-bold">
              D
            </div>
            <span className="font-semibold text-gray-800">DashFlow</span>
            <span>— by Farhaan Malik</span>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
            <Link to="/searchtxt" className="hover:text-indigo-600 transition">Search & Filter</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition">Contact Us</Link>
            <Link to="/login" className="hover:text-indigo-600 transition">Login</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
