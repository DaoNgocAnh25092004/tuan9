"use client";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "@/store/slices/cartSlice";
import {
  Minus,
  Plus,
  ShoppingCartIcon as CartIcon,
  Trash2,
} from "lucide-react";
import { useState } from "react";

// Sample products
const products = [
  {
    id: "1",
    name: "Wireless Headphones",
    price: 99.99,
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Smartphone",
    price: 699.99,
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Laptop",
    price: 1299.99,
    image: "/placeholder.svg",
  },
];

export default function ShoppingCart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate totals
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="flex flex-col p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl shadow-md max-w-md mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-purple-700">
          📦 4. Shopping Cart
        </h2>
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <CartIcon className="h-6 w-6 text-purple-600" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6">
        <h3 className="font-medium text-purple-800">Products</h3>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-gray-100 rounded-md overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-gray-500">
                  ${product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })
                )
              }
              className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full hover:bg-purple-200 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {isCartOpen && (
        <div className="mt-4">
          <h3 className="font-medium text-purple-800 mb-3">Your Cart</h3>
          {cartItems.length === 0 ? (
            <div className="p-4 bg-white rounded-lg text-center text-gray-500">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-100 rounded-md overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-xs text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        if (item.quantity > 1) {
                          dispatch(
                            updateQuantity({
                              id: item.id,
                              quantity: item.quantity - 1,
                            })
                          );
                        } else {
                          dispatch(removeItem(item.id));
                        }
                      }}
                      className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        dispatch(
                          updateQuantity({
                            id: item.id,
                            quantity: item.quantity + 1,
                          })
                        )
                      }
                      className="p-1 text-gray-400 hover:text-purple-600 transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="p-1 ml-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}

              <div className="mt-4 p-4 bg-white rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-medium mt-2">
                  <span>Total:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <button className="w-full mt-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
