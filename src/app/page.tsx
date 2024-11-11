"use client"


import React from 'react'
import { useState } from "react";
import Link from 'next/link'
import { useRouter } from "next/router";

const HomePage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add authentication logic here if needed
    // router.push("/dashboard/admin");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <Link href={'/dashboard/admin'}>
            <button
              type="submit"
              className="w-full px-4 py-2 mt-3 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default HomePage;