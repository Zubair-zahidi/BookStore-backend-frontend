import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cosmic_cart')
    if (savedCart) {
      setCartItems(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cosmic_cart', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id)
      if (existingItem) {
        return prevItems.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevItems, { ...book, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id)
      return
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCartItems([])
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice
    }}>
      {children}
    </CartContext.Provider>
  )
}