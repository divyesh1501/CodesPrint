import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'

function Order() {
  // const userid = JSON.parse(localStorage.getItem("user")).userId
  const context = useContext(myContext)
  const { mode, order } = context
  console.log("🚀 ~ Order ~ order:", order)
  return (
    <Layout>
      <> <div className=" h-full pt-10">
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {order.length > 0 ? (
            order.map((item, index) => (
              <div key={index} className="rounded-lg md:w-2/3">
                <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
                  {/* <img src={item.cartItems.image} alt="product-img" className="w-full rounded-lg sm:w-40" /> */}
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.addressInfo.name}</h2>
                      <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.email}</p>
                      <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.addressInfo.phoneNumber}</p>
                      <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No items in the cart.</p>
          )}
        </div>

      </div>
      </>

      <h2 className=' text-center tex-2xl text-white'>Not Order</h2>

    </Layout>
  )
}

export default Order


// import React, { useContext } from 'react';
// import myContext from '../../context/data/myContext';

// function Order() {
//   const { order } = useContext(myContext);



//   console.log('Order:', order);

//   return (
//     <div>
//       {order.length > 0 ? (
//         order.map((item, index) => (
//           <div key={index}>
//             <p>Item: {item.addressInfo.name}</p>
//             <p>Quantity: {item.addressInfo.phoneNumber}</p>
//             <p>Price: {item.date}</p>
//           </div>
//         ))
//       ) : (
//         <p>No items in the cart.</p>
//       )}
//     </div>
//   );
// }

// export default Order;
