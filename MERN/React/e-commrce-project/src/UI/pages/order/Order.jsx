import React, { useContext, useEffect, useState } from 'react';
import myContext from '../../context/data/myContext';
import Layout from '../../components/layout/Layout';

function Order() {
  const context = useContext(myContext);
  const { mode, order } = context;
  console.log("🚀 ~ Order ~ order:", order)
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const orderData = JSON.parse(localStorage.getItem('orders'));

    if (userData && userData.email && orderData) {
      const filteredOrders = orderData.filter(item => item.email === userData.email);
      console.log("🚀 ~ useEffect ~ filteredOrders:", filteredOrders)
      setUserOrders(filteredOrders);
    }
  }, [order]); // Re-run the effect when `order` changes

  return (
    <Layout>
      <div className="h-full pt-10">
        <div className="mx-auto max-w-5xl justify-center px-6 md:space-x-6 xl:px-0">
          {userOrders.length > 0 ? (
            userOrders.map((item, index) => (
              <div key={index} className="rounded-lg mb-6">
                <div>
                  <div
                    className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-6 shadow-md rounded-lg"
                    style={{
                      backgroundColor: mode === 'dark' ? '#282c34' : 'white',
                      color: mode === 'dark' ? 'white' : 'black'
                    }}
                  >
                    {item.cartItems.map((cartItem, cartIndex) => (
                      <div key={cartIndex}>
                        <div className="flex flex-col">
                          <div>
                            <img
                              alt="Product"
                              className="lg:w-1/2 w-full h-auto object-cover object-center rounded"
                              src={cartItem.image}
                            />
                          </div>
                          <div className="flex flex-col items-start">
                            <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {cartItem.title}
                            </h2>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                              {cartItem.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </p>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                              Price: ₹ {cartItem.price}
                            </p>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                              Payment Id: {item.paymentId}
                            </p>
                            <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>
                              Quantity: {cartItem.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='text-center text-2xl font-bold'>No Orders</p>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Order;
