'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="min-h-screen relative">
        <div className="absolute inset-0 bg-[url('/stars.png')] opacity-50"></div>
        <div className="container mx-auto px-4 py-16 relative z-10 min-h-screen flex flex-col">
          <nav className="flex justify-between items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold">AI Innovate</h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-x-6"
            >
              <Link href="#" className="hover:text-indigo-300 transition-colors">Overview</Link>
              <Link href="#" className="hover:text-indigo-300 transition-colors">Features</Link>
              <Link href="#" className="hover:text-indigo-300 transition-colors">Roadmap</Link>
              <Link href="#" className="hover:text-indigo-300 transition-colors">About</Link>
            </motion.div>
          </nav>
          
          <div className="flex flex-col items-center text-center mt-auto mb-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-70"></div>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
                AI beyond imagination,
                <br />
                one click away.
              </h2>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Create extraordinary AI-powered solutions in seconds.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-center space-x-4"
            >
              <input
                type="text"
                placeholder="Describe your AI project..."
                className="bg-white bg-opacity-10 text-white placeholder-gray-400 px-6 py-3 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Generate
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8"
            >
              <Link href="#" className="text-indigo-300 hover:text-indigo-100 transition-colors">
                Watch the demo video
              </Link>
            </motion.div>
          </div>
          
          <div className="absolute bottom-4 right-4">
            <span className="bg-white bg-opacity-10 text-xs font-semibold px-3 py-1 rounded-full">
              AI Innovate Beta
            </span>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('/circuit-pattern.png')] opacity-20"></div>
        <div className="container mx-auto px-4 py-24 relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Revolutionize Your Workflow
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Instant Creation", description: "Generate complete websites, apps, and designs with a single prompt." },
              { title: "AI-Powered Insights", description: "Leverage advanced algorithms to optimize your projects for maximum impact." },
              { title: "Seamless Integration", description: "Easily incorporate our AI tools into your existing development pipeline." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg p-6 border border-indigo-500 border-opacity-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
              >
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link href="#" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors inline-flex items-center">
              Explore Features
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}