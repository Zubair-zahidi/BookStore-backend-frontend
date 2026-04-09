import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { X, Upload, Image as ImageIcon, Sparkles, Globe } from 'lucide-react'

export default function AddBookPortal() {
  const [isOpen, setIsOpen] = useState(false)
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    price: '',
    image: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('title', bookData.title)
    formData.append('author', bookData.author)
    formData.append('price', bookData.price)
    formData.append('image', bookData.image)
    
    // Send to backend
    await fetch('http://localhost:5000/books', {
      method: 'POST',
      body: formData,
    })
    
    setIsOpen(false)
    setBookData({ title: '', author: '', price: '', image: null })
  }

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-40 group"
      >
        <div className="relative">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/30">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -inset-2 rounded-full border-2 border-purple-400/50 animate-ping" />
          <div className="absolute -inset-4 rounded-full border border-purple-400/20 group-hover:animate-spin-slow" />
        </div>
      </motion.button>

      {/* Portal Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-x-4 top-1/2 -translate-y-1/2 max-w-2xl mx-auto z-50"
            >
              <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
                
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
                  <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
                </div>
                
                {/* Header */}
                <div className="relative p-8 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                        Add Cosmic Book
                      </h2>
                      <p className="text-gray-400 mt-2">Add your book to the interstellar library</p>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                    >
                      <X className="w-5 h-5 text-gray-400" />
                    </motion.button>
                  </div>
                </div>
                
                {/* Form */}
                <form onSubmit={handleSubmit} className="relative p-8 space-y-6">
                  
                  {/* Title Field */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      Book Title
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      value={bookData.title}
                      onChange={(e) => setBookData({...bookData, title: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 transition-all"
                      placeholder="Enter book title..."
                    />
                  </div>
                  
                  {/* Author Field */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Author</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="text"
                      value={bookData.author}
                      onChange={(e) => setBookData({...bookData, author: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/30 transition-all"
                      placeholder="Enter author name..."
                    />
                  </div>
                  
                  {/* Price Field */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Price (Credits)</label>
                    <motion.input
                      whileFocus={{ scale: 1.01 }}
                      type="number"
                      value={bookData.price}
                      onChange={(e) => setBookData({...bookData, price: e.target.value})}
                      className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-500/50 focus:ring-1 focus:ring-pink-500/30 transition-all"
                      placeholder="Enter price..."
                      step="0.01"
                    />
                  </div>
                  
                  {/* Image Upload */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      Book Cover
                    </label>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative border-2 border-dashed border-gray-700 rounded-2xl p-8 text-center hover:border-cyan-500/50 transition-colors cursor-pointer"
                    >
                      <input
                        type="file"
                        onChange={(e) => setBookData({...bookData, image: e.target.files[0]})}
                        className="absolute inset-0 opacity-0 cursor-pointer"
                      />
                      <Upload className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                      <p className="text-gray-400">Drag & drop or click to upload</p>
                      <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF up to 10MB</p>
                    </motion.div>
                  </div>
                  
                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30 transition-all"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <Sparkles className="w-5 h-5" />
                      Launch to Library
                      <Sparkles className="w-5 h-5" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}