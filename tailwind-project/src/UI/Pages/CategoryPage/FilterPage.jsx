import { Check, ChevronRight, ChevronUp, X } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function FilterPage() {
    let navigate = useNavigate();

    function navToCategory() {
        navigate('/category');
        window.location.reload()
    }
    return (
        <>
        {/* Filter-Page */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3'>
                <div className='rounded-t-3xl'>
                    <div>
                        <div className='flex items-center my-6'>
                            <h2 className='capitalize font-bold md:text-2xl text-lg flex-1'>filters</h2>
                            <p className='text-gray-500' role='button' onClick={navToCategory}><X className='md:h-auto md:w-auto h-5 w-5' /></p>
                        </div>
                        <hr />
                    </div>
                    <div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>t-shirts</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>shorts</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>shirts</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>hoodie</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>jeans</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <hr className='my-4' />
                    </div>
                    <div>
                        <div className='flex flex-col'>
                            <div className='flex items-center'><label for="price" className='capitalize font-bold md:text-2xl text-lg flex-1 my-6'>Price</label><p className='text-gray-500' role='button'><ChevronUp className='md:h-auto md:w-auto h-5 w-5'  /></p></div>
                            <input type="range" id="price" name="price" min="20" value="80" max="100" className='relative accent-black' role='button' />
                            <hr className='my-6' />
                        </div>
                    </div>
                    <div>
                        <h2 className='flex items-center my-4'>
                            <p className='capitalize flex-1 font-bold md:text-2xl text-lg'>colors</p>
                            <p className='text-gray-500' role='button'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p>
                        </h2>
                        <div className='grid grid-cols-5 gap-5'>
                            <p className='bg-green-500 rounded-full h-10 w-10 border-2 border-green-800' role='button'></p>
                            <p className='bg-red-500 rounded-full h-10 w-10 border-2 border-red-800' role='button'></p>
                            <p className='bg-yellow-500 rounded-full h-10 w-10 border-2 border-yellow-800' role='button'></p>
                            <p className='bg-orange-500 rounded-full h-10 w-10 border-2 border-orange-800' role='button'></p>
                            <p className='bg-sky-500 rounded-full h-10 w-10 border-2 border-sky-800' role='button'></p>
                            <p className='bg-blue-500 rounded-full h-10 w-10 border-2 border-blue-800 flex items-center justify-center text-white' role='button'><Check /></p>
                            <p className='bg-violet-500 rounded-full h-10 w-10 border-2 border-violet-800' role='button'></p>
                            <p className='bg-pink-500 rounded-full h-10 w-10 border-2 border-pink-800' role='button'></p>
                            <p className='bg-white rounded-full h-10 w-10 border-2 border-slate-300' role='button'></p>
                            <p className='bg-black rounded-full h-10 w-10 border-2 border-black' role='button'></p>
                        </div>
                        <hr className='my-4' />
                    </div>
                    <div>
                        <div>
                            <h2 className='flex items-center my-4'>
                                <p className='capitalize flex-1 font-bold md:text-2xl text-lg'>size</p>
                                <p className='text-gray-500'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p>
                            </h2>
                            <div className='grid md:grid-cols-2 grid-cols-3 gap-3'>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>XX-small</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>X-small</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>small</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>medium</p>
                                <p className='bg-black p-3 rounded-full capitalize text-white text-center md:text-base text-xs' role='button'>large</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>x-large</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>XX-large</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>3X-large</p>
                                <p className='bg-gray-200 p-3 rounded-full capitalize text-gray-500 text-center md:text-base text-xs' role='button'>4X-large</p>
                            </div>
                        </div>
                        <hr className='my-4' />
                    </div>
                    <div>
                        <h2 className='flex items-center my-4'>
                            <p className='capitalize flex-1 font-bold md:text-2xl text-lg'>dress style</p>
                            <p className='text-gray-500'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p>
                        </h2>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>casual</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>formal</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>party</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                        <div className='flex items-center text-gray-500 my-1'>
                            <p className='capitalize flex-1 md:text-base text-xs'>gym</p>
                            <p role='button'><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /></p>
                        </div>
                    </div>
                    <button className='text-white bg-black rounded-full p-3 capitalize w-full my-4 md:text-base text-xs'>apply filter</button>
                </div>
            </section>
        </>
    )
}
