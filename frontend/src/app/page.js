"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center py-10 bg-gray-50">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Welcome to Our Payment Gateway
      </h1>

      {/* Payment Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl px-6">
        {/* Student Payment */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Student Payment
          </h2>
          <p className="text-gray-600 mb-6">
            Proceed to make payments for student-related services securely.
          </p>
          <Link
            href="/student"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Go to Student Payment Page
          </Link>
        </div>

        {/* School Payment */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            School Payment
          </h2>
          <p className="text-gray-600 mb-6">
            Proceed to make payments for school-related services securely.
          </p>
          <Link
            href="/school"
            className="bg-black text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Go to School Payment Page
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-600 text-sm text-center">
        © 2025 School Management System. All rights reserved.
      </footer>
    </div>
  );
}
