import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const inquiryTopics = [
    "General Inquiry",
    "Technical Support",
    "Inventory & Sales",
    "Billing & Plans",
    "Feedback / Feature",
  ];

  // Email format validation regex
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(String(email).toLowerCase());
  };

  // Validate entire form
  const validateForm = () => {
    const newErrors = {};

    // Validate Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = "Name must be at least 2 characters";
    }

    // Validate Email Address
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!validateEmail(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address (e.g. name@example.com)";
    }

    // Validate Message
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    return newErrors;
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulate async network submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 900));

      setIsSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
    } catch (err) {
      console.error("Submission failed:", err);
      setErrors({ form: "Something went wrong. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/70 text-gray-800">
      <Navbar />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">
            <span>💬 We&apos;re Here to Help</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Contact Our Team
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-3">
            Have a question about DashFlow, need assistance, or want to share feedback? Reach out to us below.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* LEFT COLUMN: Contact Details & Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-purple-900 rounded-3xl p-7 sm:p-9 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
              
              {/* Background ambient blur */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

              <h2 className="text-2xl font-bold tracking-tight mb-2">
                Contact Information
              </h2>
              <p className="text-indigo-200 text-xs sm:text-sm mb-8 leading-relaxed">
                Fill out the form or reach out directly through any of our support channels.
              </p>

              <div className="space-y-6 text-sm">
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold block">Email</span>
                    <a href="mailto:support@dashflow.com" className="text-white hover:text-indigo-200 font-medium transition">
                      support@dashflow.com
                    </a>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold block">Headquarters</span>
                    <p className="text-white font-medium">
                      Innovation Tower, Level 8<br />Dhaka, Bangladesh
                    </p>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-indigo-300 font-semibold block">Response Time</span>
                    <p className="text-white font-medium">
                      Within 24 business hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center space-x-2.5 text-xs text-indigo-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Support team is currently online</span>
              </div>
            </div>

            {/* Quick Links / FAQ note */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200/80 shadow-xs">
              <h3 className="text-sm font-bold text-gray-900 mb-1">
                Frequently Asked Questions
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Looking for quick answers about DashFlow features and inventory tracking?
              </p>
              <Link
                to="/searchtxt"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center space-x-1"
              >
                <span>Explore Search & Knowledge page</span>
                <span>→</span>
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-lg shadow-gray-200/50">
            
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">
              Send us a Message
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mb-6">
              Fill in the form below and we will respond directly to your email.
            </p>

            {/* Success Banner */}
            {isSuccess && (
              <div className="mb-6 p-4 sm:p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 flex items-start space-x-3.5 animate-fadeIn">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-emerald-900">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs text-emerald-700 mt-1">
                    Thank you for reaching out. We have received your inquiry and our team will get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Form Error Banner */}
            {errors.form && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center space-x-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{errors.form}</span>
              </div>
            )}

            {/* Form Component */}
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              
              {/* Topic Selector Chips */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-2">
                  Select Inquiry Topic:
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTopics.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, subject: topic }))}
                      className={`text-xs px-3 py-1.5 rounded-xl border font-medium transition-all cursor-pointer ${
                        formData.subject === topic
                          ? "bg-indigo-600 text-white border-indigo-600 shadow-xs"
                          : "bg-gray-50 border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
                      }`}
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Full Name & Email (Grid on Tablet/Desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Farhaan Malik"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? "border-red-300 focus:ring-red-400 bg-red-50/30"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-red-600 text-xs mt-1.5 flex items-center font-medium">
                      <span className="mr-1">⚠️</span> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. farhaan@example.com"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 ${
                      errors.email
                        ? "border-red-300 focus:ring-red-400 bg-red-50/30"
                        : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600 text-xs mt-1.5 flex items-center font-medium">
                      <span className="mr-1">⚠️</span> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Message Field */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className="text-[11px] text-gray-400">
                    {formData.message.length} chars
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your inquiry, question or feedback in detail..."
                  className={`w-full px-4 py-3 rounded-xl border text-sm transition focus:outline-none focus:ring-2 resize-none ${
                    errors.message
                      ? "border-red-300 focus:ring-red-400 bg-red-50/30"
                      : "border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
                  }`}
                />
                {errors.message && (
                  <p className="text-red-600 text-xs mt-1.5 flex items-center font-medium">
                    <span className="mr-1">⚠️</span> {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-md hover:shadow-lg hover:shadow-indigo-500/20 active:scale-99 transition duration-150 flex items-center justify-center space-x-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
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

export default ContactUs;
