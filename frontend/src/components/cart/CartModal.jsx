import { useContext } from 'react'
import { motion } from 'framer-motion'
import { X, ShoppingCart, Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react'
import { CartContext } from '../contexts/CartContext'

export default function CartModal({ onClose }) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useContext(CartContext)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, x: 100 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl"
      >
        <div className="relative bg-gradient-to-br from-gray-900/90 via-gray-900/80 to-gray-900/90 backdrop-blur-2xl rounded-3xl border border-gray-800 shadow-2xl overflow-hidden">
          
          {/* Header */}
          <div className="relative p-8 border-b border-gray-800">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                  <ShoppingCart className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    Cosmic Cart
                  </h2>
                  <p className="text-gray-400 mt-2">{cartItems.length} items in your cart</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {cartItems.length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={clearCart}
                    className="px-4 py-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors text-sm"
                  >
                    Clear All
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </motion.button>
              </div>
            </div>
          </div>
          
          {/* Cart Items */}
          <div className="p-8 max-h-[60vh] overflow-y-auto">
            {cartItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🛒</div>
                <h3 className="text-2xl font-bold text-gray-300 mb-3">Your Cart is Empty</h3>
                <p className="text-gray-400 mb-8">Add some cosmic books to get started!</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onClose}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium"
                >
                  Browse Books
                </motion.button>
              </div>
            ) : (
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-6 p-4 rounded-2xl bg-gray-800/30 border border-gray-700/50"
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400 mb-2">by {item.author}</p>
                      <div className="text-lg font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-900/50 rounded-xl p-1">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Minus className="w-4 h-4 text-gray-400" />
                        </motion.button>
                        <span className="w-8 text-center font-bold text-white">{item.quantity}</span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Plus className="w-4 h-4 text-gray-400" />
                        </motion.button>
                      </div>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
          
          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="p-8 border-t border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-sm text-gray-400">Total</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                    ${totalPrice.toFixed(2)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400">Items</div>
                  <div className="text-xl font-bold text-white">{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</div>
                </div>
              </div>
              
              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700 text-gray-300 hover:text-white transition-colors"
                >
                  Continue Shopping
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-bold flex items-center justify-center gap-3"
                >
                  <CreditCard className="w-5 h-5" />
                  Proceed to Checkout
                </motion.button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}