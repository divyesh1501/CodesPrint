import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { TbEdit, TbTrash } from "react-icons/tb";
import { Link } from 'react-router-dom';
import RatingStars from '../../../components/ratingstar/RatingStars';

function DashboardTab() {
    const context = useContext(myContext)
    const { mode, products, setFormForUpdate, deleteProduct, order, userData } = context
    console.log("🚀 ~ DashboardTab ~ userData:", userData)
    console.log("🚀 ~ DashboardTab ~ products:", products)
    let [isOpen, setIsOpen] = useState(false);
    
    const [userDataState, setUserDataState] = useState([]);
    console.log("🚀 ~ DashboardTab ~ userDataState:", userDataState)

    useEffect(() => {
        if (userData) {
            setUserDataState(userData);
        }
    }, [userData]);


    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="container px-3 mx-auto">
                <div className="tab container mx-auto ">
                    <Tabs defaultIndex={0} className=" " >
                        <TabList className="md:flex md:space-x-8 grid grid-cols-1 md:grid-cols-2 text-center gap-4 md:justify-center mb-10 ">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]  px-5 py-1.5 text-center bg-[#605d5d12] ">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits />Products</div> </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500  hover:shadow-pink-700  rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]    px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl  hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]   px-5 py-1.5 text-center ">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>
                        {/* product  */}
                        <TabPanel>
                            <div className='  px-4 md:px-0 mb-16'>
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                                <div className=" flex justify-end" >
                                    <Link
                                        type="button" to={'/addproduct'}
                                        className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border no-underline hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} > <Link to={'/addproduct'} className="flex gap-2 items-center text-white no-underline">
                                            Add Product <FaCartPlus size={20} />
                                        </Link></Link>
                                </div>
                                <div className="relative overflow-x-auto " style={{ color: mode === 'dark' ? 'white' : '' }}>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 items-center ">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '' }}   >
                                            <tr style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                <th scope="col" className="px-6 py-3" >
                                                    S.No
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Image
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Title
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Price
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Category
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Rating
                                                </th>
                                                {/* <th scope="col" className="px-6 py-3">
                                                    Description
                                                </th> */}
                                                <th scope="col" className="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='text-black items-center'>
                                            {products.map((item, index) => {
                                                const { category, description, image, price, rating: { rate }, title } = item;
                                                return (
                                                    <tr key={index} className={`bg-gray-50 border-b items-center ${mode === 'dark' ? 'dark:border-gray-700' : ''}`} style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                        <td className="px-6 py-4">
                                                            {index + 1}
                                                        </td>
                                                        <td className="px-6 py-4 font-medium whitespace-nowrap">
                                                            <img className="w-16" src={image} alt="img" />
                                                        </td>
                                                        <td className="px-6 py-4 line-clamp-1">
                                                            {title}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {price}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            {category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                        </td>
                                                        <td className="px-6 py-4">
                                                            <RatingStars rating={rate} />
                                                        </td>
                                                        {/* <td className="px-6 py-4 line-clamp-1">
                                                            {description}
                                                        </td> */}
                                                        <td className="px-6 py-4">
                                                            <div className="flex gap-2 cursor-pointer  text-2xl items-center">
                                                                <Link onClick={() => deleteProduct(item.id)} className="text-red-500" >
                                                                    <TbTrash />
                                                                </Link>
                                                                <Link onClick={() => setFormForUpdate(item.id)} to={'/updateproduct'} className="text-yellow-500">
                                                                    <TbEdit />
                                                                </Link>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>


                                    </table>

                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="relative overflow-x-auto mb-16">
                                <h1 className='text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Order Details</h1>
                                {order.map((allorder, index) => {
                                    return (
                                        <table className="w-full text-sm text-left" key={index}>
                                            <thead className="text-xs text-black uppercase bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '' }}>
                                                <tr style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                    <th scope="col" className="px-6 py-3">Sr. No.</th>
                                                    <th scope="col" className="px-6 py-3">Payment Id</th>
                                                    <th scope="col" className="px-6 py-3">Image</th>
                                                    <th scope="col" className="px-6 py-3">Title</th>
                                                    <th scope="col" className="px-6 py-3">Price</th>
                                                    <th scope="col" className="px-6 py-3">Category</th>
                                                    <th scope="col" className="px-6 py-3">Name</th>
                                                    <th scope="col" className="px-6 py-3">Address</th>
                                                    <th scope="col" className="px-6 py-3">Pincode</th>
                                                    <th scope="col" className="px-6 py-3">Phone Number</th>
                                                    <th scope="col" className="px-6 py-3">Email</th>
                                                    <th scope="col" className="px-6 py-3">Date</th>
                                                </tr>
                                            </thead>
                                            <tbody className='text-black'>
                                                {allorder.cartItems.map((item, index) => {
                                                    const { title, description, category, image, price } = item;
                                                    return (
                                                        <tr key={index} className={`bg-gray-50 border-b ${mode === 'dark' ? 'dark:border-gray-700' : ''}`} style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                            <td className="px-6 py-4">{index + 1}.</td>
                                                            <td className="px-6 py-4">{allorder.paymentId}</td>
                                                            <td className="px-6 py-4"><img className='w-16' src={image} alt="img" /></td>
                                                            <td className="px-6 py-4 line-clamp-1">{title}</td>
                                                            <td className="px-6 py-4">{price}</td>
                                                            <td className="px-6 py-4">{category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.name}</td>
                                                            <td className="px-6 py-4 line-clamp-1">{allorder.addressInfo.address}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.pincode}</td>
                                                            <td className="px-6 py-4">{allorder.addressInfo.phoneNumber}</td>
                                                            <td className="px-6 py-4">{allorder.email}</td>
                                                            <td className="px-6 py-4">{allorder.date}</td>
                                                        </tr>
                                                    )
                                                })}
                                            </tbody>
                                        </table>
                                    )
                                })}
                            </div>
                        </TabPanel>

                        <TabPanel>
                            {/* <User addressInfo={addressInfo} setAddressInfo={setAddressInfo} setLoading={setLoading} /> */}
                            <div className="relative overflow-x-auto mb-10">
                                <h1 className=' text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-black uppercase bg-gray-200 " style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '' }}>
                                        <tr style={{ color: mode === 'dark' ? 'white' : '' }}>
                                            <th scope="col" className="px-6 py-3">
                                                S.No
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Uid
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Email
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                user type
                                            </th>
                                            {/* <th scope="col" className="px-6 py-3">
                                                Phone Number
                                            </th> */}
                                        </tr>
                                    </thead>

                                    {Object.keys(userDataState).length > 0 ? (
                                        Object.values(userDataState).map((user, index) => (
                                            <tbody key={index} className='text-black'>
                                                <tr className={`bg-gray-50 border-b ${mode === 'dark' ? 'dark:border-gray-700' : ''}`}
                                                    style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }} >
                                                    <td className="px-6 py-4">
                                                        {index + 1}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.name}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.userId}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.email}
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        {user.userType.charAt(0).toUpperCase() + user.userType.slice(1).toLowerCase()}
                                                    </td>
                                                    {/* <td className="px-6 py-4">
                                                        {user.email}
                                                    </td> */}
                                                </tr>
                                            </tbody>
                                        ))
                                    ) : (
                                        <p>No user data available</p>
                                    )}

                                </table>
                            </div>
                        </TabPanel>

                    </Tabs>
                </div>
            </div>
        </>
    )
}


export default DashboardTab