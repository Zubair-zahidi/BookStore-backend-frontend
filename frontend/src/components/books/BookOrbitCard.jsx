import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Star, Zap, BookOpen, ExternalLink } from 'lucide-react'

export default function BookOrbitCard({ book, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef()

  // Sample cosmic book data (replace with your 20 books)
  const cosmicBooks = [
    { title: "The Quantum Thief", author: "Hannu Rajaniemi", category: "Sci-Fi", rating: 4.8 },
    { title: "Nebula Chronicles", author: "Ada Palmer", category: "Space Opera", rating: 4.9 },
    { title: "Stellar Evolution", author: "Liu Cixin", category: "Hard SF", rating: 4.7 },
    { title: "Dark Matter Dreams", author: "Blake Crouch", category: "Thriller", rating: 4.6 },
    { title: "Galactic Senate", author: "Ann Leckie", category: "Political SF", rating: 4.5 },
    { title: "Wormhole Paradox", author: "Ted Chiang", category: "Short Stories", rating: 4.9 },
    // Add 14 more books...
  ]

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, rotateY: -180 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        rotateY: 0,
        rotateX: isHovered ? -10 : 0,
        scale: isHovered ? 1.05 : 1
      }}
      transition={{ 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.05,
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative perspective-1000"
    >
      {/* 3D Card Container */}
      <div className="relative transform-style-3d transition-all duration-500">
        
        {/* Front of Card */}
        <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-6 shadow-2xl overflow-hidden">
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
          </div>
          
          {/* Glowing Border Effect */}
          {isHovered && (
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur opacity-50 animate-pulse" />
          )}
          
          {/* Content */}
          <div className="relative z-10">
            {/* Book Cover with 3D Effect */}
            <div className="relative mb-6">
              <div className="w-full h-48 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-600/20 border border-gray-700 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                {/* Holographic Book Lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="h-px w-full bg-gradient-to-r from-transparent via-white to-transparent mb-3" style={{ marginTop: i * 12 }} />
                  ))}
                </div>
                {/* Book Title on Cover */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white truncate">{book.title}</h3>
                  <p className="text-sm text-gray-300">{book.author}</p>
                </div>
              </div>
              
              {/* 3D Spine Effect */}
              <div className="absolute -left-2 top-4 bottom-4 w-2 bg-gradient-to-b from-purple-700 to-cyan-700 rounded-l-lg" />
            </div>
            
            {/* Book Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{book.title}</h3>
                <p className="text-gray-400 text-sm">by {book.author}</p>
              </div>
              
              {/* Category Badge */}
              <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-800/50 border border-gray-700">
                <Zap className="w-3 h-3 text-yellow-400" />
                <span className="text-xs text-gray-300">{book.category}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(book.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-800 text-gray-700'}`} />
                ))}
                <span className="text-sm text-gray-400 ml-2">{book.rating}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 py-2.5 px-4 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium flex items-center justify-center gap-2"
                >
                  <BookOpen className="w-4 h-4" />
                  Read Now
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back of Card (3D Flip) */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, rotateY: 90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-6 shadow-2xl"
          >
            {/* Holographic Synopsis */}
            <div className="text-gray-300 text-sm leading-relaxed">
              Journey through quantum realms and cosmic anomalies in this interstellar adventure...
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="text-xs text-gray-500">ISBN: 978-3-16-148410-0</div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Floating Particles around card */}
      {isHovered && (
        <>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ delay: i * 0.05 }}
              className="absolute w-1 h-1 rounded-full bg-cyan-400"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </>
      )}
    </motion.div>
  )
}