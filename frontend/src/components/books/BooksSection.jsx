import { useState } from 'react'
import { motion } from 'framer-motion'
import CosmicBookCard from './CosmicBookCard'
import { cosmicBooks } from '../../utils/cosmicData'
import { Filter, Search, Grid, List, TrendingUp } from 'lucide-react'

export default function BooksSection() {
  const [viewMode, setViewMode] = useState('grid')
  const [categoryFilter, setCategoryFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Science Fiction', 'Fantasy', 'Mystery', 'Romance', 'Biography', 'Technology']

  return (
    <section className="py-20 px-4 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-900/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/10 via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-sm text-cyan-300 font-medium">COSMIC COLLECTION</span>
            <TrendingUp className="w-4 h-4 text-purple-300" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Interstellar Library
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover books from across the multiverse. Each volume is a portal to new dimensions of imagination.
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between p-6 rounded-2xl bg-gradient-to-r from-gray-900/30 to-gray-900/10 border border-gray-800 backdrop-blur-sm">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search across dimensions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategoryFilter(cat.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    categoryFilter === cat.toLowerCase() 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 p-2 rounded-xl bg-gray-800/50 border border-gray-700">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'grid' 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Grid className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all ${
                  viewMode === 'list' 
                    ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <List className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Books Grid */}
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            : 'flex flex-col'
        } gap-8`}>
          {cosmicBooks.slice(0, 12).map((book, index) => (
            <CosmicBookCard 
              key={book.id} 
              book={book} 
              index={index}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 hover:border-cyan-500/30 text-gray-300 hover:text-white transition-all"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-3">
              Load More Books
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}