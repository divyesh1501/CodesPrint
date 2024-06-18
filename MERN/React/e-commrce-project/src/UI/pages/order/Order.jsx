// import React, { useContext } from 'react'
// import myContext from '../../context/data/myContext'
// import Layout from '../../components/layout/Layout'

// function Order() {
//     const userid = JSON.parse(localStorage.getItem("user")).userId
//     const context = useContext(myContext)
//     const { mode, order } = context
//     return (
//         <Layout>
//             {order.length > 0 ?
//                 (<>
//                     <div className=" h-full pt-10">
//                         {
//                             order.filter(obj => obj.userid === userid).map((order) => {
//                                 // order.cartItems.map()
//                                 return (
//                                     <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//                                         {
//                                             order.cartItems.map((item) => {
//                                                 return (
//                                                     <div className="rounded-lg md:w-2/3">
//                                                         <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '', }}>
//                                                             <img src={item.imageUrl} alt="product-img" className="w-full rounded-lg sm:w-40" />
//                                                             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                                                                 <div className="mt-5 sm:mt-0">
//                                                                     <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
//                                                                     <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
//                                                                     <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 )
//                                             })
//                                         }
//                                     </div>
//                                 )
//                             })
//                         }
//                     </div>
//                 </>)
//                 :
//                 (
//                     <h2 className=' text-center tex-2xl text-white'>Not Order</h2>
//                 )

//             }
//         </Layout>
//     )
// }

// export default Order
// import React, { useContext } from 'react';
// import myContext from '../../context/data/myContext';

// function Order() {
//     const { order } = useContext(myContext);


//     return (
//         <>

//         </>
//     );
// }

// export default Order;



// <Layout>
//     {order.length > 0 ? (
//         <div className="h-full pt-10">
//             {order.filter(obj => obj.userid === userid).map(order => {
//                 console.log('Filtered Order:', order);
//                 return (
//                     <div key={order.id} className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
//                         {order.cartItems && order.cartItems.length > 0 ? (
//                             order.cartItems.map((item, index) => {
//                                 console.log('Cart Item:', item);
//                                 return (
//                                     <div key={index} className="rounded-lg md:w-2/3">
//                                         <div
//                                             className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
//                                             style={{
//                                                 backgroundColor: mode === 'dark' ? '#282c34' : '',
//                                                 color: mode === 'dark' ? 'white' : '',
//                                             }}
//                                         >
//                                             <img src={item.imageUrl} alt="product-img" className="w-full rounded-lg sm:w-40" />
//                                             <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
//                                                 <div className="mt-5 sm:mt-0">
//                                                     <h2 className="text-lg font-bold text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.title}</h2>
//                                                     <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.description}</p>
//                                                     <p className="mt-1 text-xs text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>{item.price}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })
//                         ) : (
//                             <p className="text-center text-gray-700" style={{ color: mode === 'dark' ? 'white' : '' }}>No items in cart</p>
//                         )}
//                     </div>
//                 );
//             })}
//         </div>
//     ) : (
//         <h2 className="text-center tex-2xl text-white">No Order</h2>
//     )}
// </Layout>


import React, { useEffect, useState } from 'react';

function Order() {
  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    try {
      const result = localStorage.getItem('orders');
      if (result) {
        const ordersArray = JSON.parse(result);
        setOrder(ordersArray);
      }
    } catch (error) {
      console.log(error); // Handle errors appropriately
    }
  };

  useEffect(() => {
    getOrderData();
  }, []);

  return (
    <>
      {order.length > 0 && order.cartItems ? ( // Check for both order and cartItems
        <ul>
          {order.cartItems.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading order...</p> // Display a loading message while data fetches
      )}
    </>
  );
  }

export default Order;
