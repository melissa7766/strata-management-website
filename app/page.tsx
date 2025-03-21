'use client';

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="relative w-full max-w-2xl mx-auto mb-8">
          <Image
            src="/globe.svg"
            alt="Strata Management"
            width={800}
            height={400}
            className="rounded-lg shadow-lg"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Strata Manager</h1>
        <p className="text-xl text-gray-600">Welcome to your comprehensive building management platform. Manage levies, maintenance, insurance, and committee matters all in one place.</p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Levies Card */}
        <Link href="/levies" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Levies</h2>
            <p className="text-gray-600">Manage payments and track outstanding balances</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Outstanding: $12,500</p>
              <p>Due this month: $5,000</p>
            </div>
          </div>
        </Link>

        {/* Maintenance Card */}
        <Link href="/maintenance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Maintenance</h2>
            <p className="text-gray-600">Track repairs and scheduled maintenance</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Pending tasks: 5</p>
              <p>In progress: 2</p>
            </div>
          </div>
        </Link>

        {/* Insurance Card */}
        <Link href="/insurance" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Insurance</h2>
            <p className="text-gray-600">Manage policies and claims</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Coverage: $2.5M</p>
              <p>Active claims: 3</p>
            </div>
          </div>
        </Link>

        {/* Committee Card */}
        <Link href="/committee" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Committee</h2>
            <p className="text-gray-600">Manage committee members and meetings</p>
            <div className="mt-4 text-sm text-gray-500">
              <p>Members: 7</p>
              <p>Next meeting: Next Tuesday</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">New Levy Payment</p>
              <p className="text-sm text-gray-500">Lot 15 - Administration Levy</p>
            </div>
            <div className="text-right">
              <p className="font-medium">$500</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Maintenance Scheduled</p>
              <p className="text-sm text-gray-500">Elevator Service - Level 2</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Tomorrow</p>
              <p className="text-sm text-gray-500">9:00 AM</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="font-medium">Committee Meeting</p>
              <p className="text-sm text-gray-500">Monthly Review</p>
            </div>
            <div className="text-right">
              <p className="font-medium">Next Tuesday</p>
              <p className="text-sm text-gray-500">2:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
