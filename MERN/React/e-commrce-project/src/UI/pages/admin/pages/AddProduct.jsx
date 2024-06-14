import React, { useContext } from 'react'
import Layout from '../../../components/layout/Layout'
import myContext from '../../../context/data/myContext'

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, newProduct, setNewProduct, addProduct, handleInputChange } = context;
    return (
        <Layout>
            <div className='flex justify-center items-center my-24 mx-2 h-screen'>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input
                            type="text" name="title" value={newProduct.title} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input
                            type="number" name="price" value={newProduct.price} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input
                            type="number" step="0.1" name="rate" value={newProduct.rating.rate} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product rate'
                        />
                    </div>
                    <div>
                        <input
                            type="number" name="count" value={newProduct.rating.count} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product rating count'
                        />
                    </div>
                    <div>
                        <input
                            type="text" name="image" value={newProduct.image} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input
                            type="text" name="category" value={newProduct.category} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product Category'
                        />
                    </div>
                    <div>
                        <textarea cols="5" rows="5"
                            name="description" value={newProduct.description} onChange={handleInputChange}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                        </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            onClick={addProduct}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AddProduct