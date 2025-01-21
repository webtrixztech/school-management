"use client";
import React from "react";
import StudentPayFee from "../components/StudentPayFee";
import SchoolPayPricing from "../components/SchoolPayPricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center py-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Welcome to Our Payment Gateway
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 w-full max-w-6xl px-10">
        {/* Left Card: Student Payment */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-3">
          <StudentPayFee />
        </div>

        {/* Right Card: School Payment */}
        <div className="col-span-1 sm:col-span-1 lg:col-span-3">
          <SchoolPayPricing />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-gray-600 text-sm text-center">
        © 2025 School Management System. All rights reserved.
      </footer>
    </div>
  );
}
