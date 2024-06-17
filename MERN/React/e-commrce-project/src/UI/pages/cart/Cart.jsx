import React, { useContext, useEffect, useState } from 'react'
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';
import Modal from '../../components/modal/Modal';
import { TbTrash } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';


function Cart() {

  const context = useContext(myContext)
  const { mode } = context;

  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart)
  console.log("🚀 ~ Cart ~ cartItem:", cartItem)

  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    let temp = 0;
    cartItem.forEach((cartItems) => {
      temp = temp + parseInt(cartItems.price)
    })
    setTotalAmount(temp);
    console.log(temp)
  }, [cartItem])

  const shipping = parseInt(100);
  const grandTotal = shipping + totalAmount
  console.log("🚀 ~ Cart ~ grandTotal:", grandTotal)

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
    toast.error('Product removed from cart', {
      autoClose: 3000,
    });
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItem))
  }, [cartItem])


  return (
    <Layout >
      <div className=" pt-5 mb-[60%] md:mb-3 lg:mb-3" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 ">
          <div className="rounded-lg md:w-2/3 ">
            {cartItem.map((item, index) => {
              const { image, price, category, title } = item;
              return (<div key={index} className="justify-between mb-6 rounded-lg border  drop-shadow-xl p-6  sm:flex  sm:justify-start" style={{
                backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
                color: mode === 'dark' ? 'white' : ''
              }}>
                <img src={image} alt="product-img" className="w-full rounded-lg sm:w-40" />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{title}</h2>
                    <h2 className="text-sm  text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h2>
                    <p className="mt-1 text-xs font-semibold text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {price}</p>
                  </div>
                  <div onClick={() => deleteCart(item)} className="mt-4 flex justify-between sm:space-y-6  text-2xl sm:mt-0 sm:block sm:space-x-6" style={{ color: mode === 'dark' ? 'white' : '' }}>
                    <TbTrash className='cursor-pointer' />
                  </div>
                </div>
              </div>
              )
            })}
          </div>

          <div className="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3" style={{
            backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '',
            color: mode === 'dark' ? 'white' : ''
          }}>
            <div className="mb-2 flex justify-between">
              <p className="" style={{ color: mode === 'dark' ? 'white' : '' }}>Subtotal</p>
              <p className="" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {totalAmount}</p>
            </div>
            <div className="flex justify-between">
              <p className="" style={{ color: mode === 'dark' ? 'white' : '' }}>Shipping</p>
              <p className="" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {shipping}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-3" >
              <p className="text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total</p>
              <div className>
                <p className="mb-1 text-lg font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {grandTotal}</p>
              </div>
            </div>

            {/* <Modal  /> */}
            <Modal />
          </div>
        </div>
      </div>
    </Layout >
  )
}

export default Cart