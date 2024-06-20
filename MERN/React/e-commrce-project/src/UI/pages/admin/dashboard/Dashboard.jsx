import React, { useContext } from 'react'
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboradTab';
import { BsHandbagFill } from "react-icons/bs";
import { FaUserTie } from 'react-icons/fa';
import { AiFillProduct } from 'react-icons/ai';
import { RiAdminFill } from "react-icons/ri";

function Dashboard() {
  const context = useContext(myContext)
  const { mode, products, order, userData } = context
  console.log("🚀 ~ Dashboard ~ userData:", userData)
  return (
    <Layout>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-3 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <AiFillProduct size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl  fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>{products.length}</h2>
                <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Products</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <BsHandbagFill size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>{order.length}</h2>
                <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Orders</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }} >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaUserTie size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}> {Object.keys(userData).length}</h2>
                <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Total Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/4 sm:w-1/2 w-full">
              <div className=" border-2 hover:shadow-purple-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <RiAdminFill size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl  fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}><h2 className="title-font font-medium text-3xl fonts1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                  {Object.values(userData).filter(user => user.userType === 'admin').length}
                </h2>
                </h2>
                <p className=" text-purple-500  font-bold" style={{ color: mode === 'dark' ? 'white' : '' }}>Admin</p>
              </div>
            </div>
          </div>
        </div>
        <DashboardTab />
      </section>
    </Layout>
  )
}

export default Dashboard