import React, { useContext, useEffect } from 'react';
import { TiTrash } from 'react-icons/ti';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import myContext from '../../context/data/myContext';

function Cart() {
  const context = useContext(myContext);
  const { mode, incrementQuantity, decrementQuantity, deleteCartItem, totalAmount, cartItems, shipping, grandTotal } = context;

  const cartItemStyle = {
    backgroundColor: mode === 'dark' ? '#282c34' : '',
    color: mode === 'dark' ? 'white' : ''
  };

  useEffect(() => {
    window.scrollTo(0, 0);
}, [])

  return (
    <Layout>
      <div className="pt-5 mb-[60%] md:mb-3 lg:mb-3" style={cartItemStyle}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        {
          cartItems.length > 0 ? (
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
              <div className="rounded-lg md:w-2/3">
                {cartItems.map((item, index) => (
                  <div key={index} className="justify-between mb-6 rounded-lg border drop-shadow-xl p-6 sm:flex sm:justify-start" style={cartItemStyle}>
                    <img src={item.image} alt="product-img" className="w-full rounded-lg sm:w-40" />
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900" style={cartItemStyle}>{item.title}</h2>
                        {item.category && (
                          <h2 className="text-sm text-gray-900" style={cartItemStyle}>
                            {item.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </h2>
                        )}
                        <p className="mt-1 text-xs font-semibold text-gray-700" style={cartItemStyle}>₹ {item.price}</p>
                        <div className="flex items-center mt-2">
                          <button className="decrement px-2 text-xl font-semibold" onClick={() => decrementQuantity(item.id, item.quantity)}><FiMinusCircle /></button>
                          <span className="mx-2 px-3 border-1 rounded border-slate-600">{item.quantity}</span>
                          <button className="increment px-2 text-xl font-semibold" onClick={() => incrementQuantity(item.id)}><FiPlusCircle /></button>
                        </div>
                      </div>
                      <div onClick={() => deleteCartItem(item.id)} className="mt-4 flex justify-between sm:space-y-6 text-2xl sm:mt-0 sm:block sm:space-x-6" style={cartItemStyle}>
                        <TiTrash className="cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 h-full rounded-lg border p-6 shadow-md md:mt-0 md:w-1/3" style={cartItemStyle}>
                <div className="mb-2 flex justify-between">
                  <p style={cartItemStyle}>Subtotal</p>
                  <p style={cartItemStyle}>₹ {totalAmount}</p>
                </div>
                <div className="flex justify-between">
                  <p style={cartItemStyle}>Shipping</p>
                  <p style={cartItemStyle}>₹ {shipping}</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between mb-3">
                  <p className="text-lg font-bold" style={cartItemStyle}>Total</p>
                  <div>
                    <p className="mb-1 text-lg font-bold" style={cartItemStyle}>₹ {grandTotal}</p>
                  </div>
                </div>
                <Modal />
              </div>
            </div>
          ) : (
            <p className='text-center text-2xl font-bold text-red-500'>Your Cart is Empty..!!</p>
          )
        }
      </div>
    </Layout>
  );
}

export default Cart;


