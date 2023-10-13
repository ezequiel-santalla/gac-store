import { useState, createContext, useEffect } from 'react'

export const CartContext = createContext({
  cart: [],
  totalPrice: 0,
  totalQuantity: 0,
  addProduct: () => {},
  removeProduct: () => {},
  emptyCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart")

    return storedCart ? JSON.parse(storedCart) : []
  })

  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))

    let quantity = 0
    let price = 0

    cart.forEach((item) => {
      quantity += item.quantity
      price += item.item.price * item.quantity
    })

    setTotalQuantity(quantity)
    setTotalPrice(price)
  }, [cart])

  const addProduct = (item, quantity) => {
    const existingProduct = cart.find((prod) => prod.item.id === item.id)

    if (!existingProduct) {
      const updatedCart = [...cart, { item, quantity }]

      setCart(updatedCart)
    } else {
      const updatedCart = cart.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, quantity: prod.quantity + quantity }
        } else {
          return prod
        }
      })

      setCart(updatedCart)
    }
  }

  const removeProduct = (id) => {
    const productRemoved = cart.find((prod) => prod.item.id === id)
    const updatedCart = cart.filter((prod) => prod.item.id !== id)
    setCart(updatedCart);
    setTotalQuantity((prev) => prev - productRemoved.quantity)
    setTotalPrice((prev) => prev - productRemoved.item.price * productRemoved.quantity)
  }

  const emptyCart = () => {
    setCart([])
    setTotalQuantity(0)
    setTotalPrice(0)
  }

  return (
    <CartContext.Provider value={{cart, totalQuantity, totalPrice, addProduct, removeProduct, emptyCart}}>
      {children}
    </CartContext.Provider>
  )
}
