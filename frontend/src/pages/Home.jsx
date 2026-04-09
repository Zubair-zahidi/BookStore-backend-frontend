import { motion } from 'framer-motion'
import CosmicBackground from '../components/cosmic/CosmicBackground'
import CosmicNavbar from '../components/navigation/CosmicNavbar'
import HeroSection from '../components/sections/HeroSection'
import BookOrbitCard from '../components/books/BookOrbitCard'
import AddBookPortal from '../components/sections/AddBookPortal'
import { cosmicBooks } from '../utils/cosmicData'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950 text-white overflow-hidden">
      <CosmicBackground />
      <CosmicNavbar />
      <HeroSection />
      
      {/* Floating Books Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-sm text-cyan-300">INTERSTELLAR COLLECTION</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                Cosmic Library
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore books from across the galaxy, each with unique cosmic properties
            </p>
          </motion.div>
          
          {/* 3D Book Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cosmicBooks.map((book, index) => (
              <BookOrbitCard key={index} book={book} index={index} />
            ))}
          </div>
          
          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/30 text-gray-300 hover:text-white transition-all group"
            >
              <span className="flex items-center gap-3">
                Load More Books
                <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      {/* Add Book Portal */}
      <AddBookPortal />
      
      {/* Footer */}
      <footer className="relative border-t border-gray-800/50 mt-20 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cosmic Books
            </span>
          </div>
          <p className="text-gray-500">© 2024 Interstellar Library. All rights reserved.</p>
          <p className="text-gray-600 text-sm mt-2">Built with React, Three.js, and stardust</p>
        </div>
      </footer>
    </div>
  )
}