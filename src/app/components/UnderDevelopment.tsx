'use client';

import { motion } from 'framer-motion';

export default function UnderDevelopment() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background gradient blur */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-2xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
        </motion.div>

        <h1
          className="text-4xl md:text-5xl font-bold mb-6 pb-1"
          style={{
            background: 'linear-gradient(to right, #a78bfa, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Coming Soon
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          We&apos;re crafting something extraordinary. Our website is currently under development,
          bringing you an experience that pushes the boundaries of what&apos;s possible.
        </p>

        <div
          className="rounded-2xl p-6 border border-white/10"
          style={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
          }}
        >
          <p className="text-gray-300">
            Stay tuned for updates as we prepare to launch.
          </p>
        </div>
      </motion.div>
    </div>
  );
} 