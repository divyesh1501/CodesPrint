import { ArrowRight, ChevronRight, Trash2 } from 'lucide-react'
import React from 'react'
import C1 from "./images/C1.png";
import C2 from "./images/C2.png";
import C3 from "./images/C3.png";
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    let navigate = useNavigate();
    function navToHome() {
        navigate('/');
    }
    return (
        <>
        {/* Cart-Section */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto sm:max-w-7xl md:max-w-7xl lg:max-w-7xl mx-3 mt-6'>
            <hr className='md:my-6 my-4'/>

                <p className='flex items-center capitalize md:text-base text-xs text-gray-500' role='button'><span onClick={navToHome}>home</span><ChevronRight className='md:h-auto md:w-auto h-4 w-4' /> <span className='text-black'>cart</span></p>

                <div className='my-6'>
                    <h1 className='font-black md:text-4xl text-2xl uppercase'>your cart</h1>
                    <div className='flex md:gap-10 lg:gap-5 flex-col md:flex-col lg:flex-row '>
                        <div className='border rounded-xl md:p-5 p-2 md:my-6 my-4'>
                            <div className='flex md:gap-5 gap-2 '>
                                <img src={C1} alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw] rounded-xl' />
                                <div className=''>
                                    <div className='flex space-x-14 md:space-x-80 lg:space-x-44 '>
                                        <p className='capitalize font-semibold md:text-base text-xs'>gradiant graphic t-shirt</p>
                                        <p><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>
                                    <p className='capitalize lg:text-base text-xs'>size: <span className='text-gray-500'>large</span></p>
                                    <p className='capitalize md:text-base text-xs'>color: <span className='text-gray-500'>white</span></p>
                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1 cur'>$145</p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                            <hr className='md:my-6 my-4' />
                            <div className='flex md:gap-5 gap-2 '>
                                <img src={C2} alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw]  rounded-xl' />
                                <div>
                                    <div className='flex space-x-24 md:space-x-96 lg:space-x-60'>
                                        <p className='capitalize font-semibold md:text-base text-xs'>checkered shirt</p>
                                        <p><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>
                                    <p className='capitalize md:text-base text-xs'>size: <span className='text-gray-500'>medium</span></p>
                                    <p className='capitalize md:text-base text-xs'>color: <span className='text-gray-500'>red</span></p>
                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1'>$180</p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                            <hr className='md:my-6 my-4' />
                            <div className='flex md:gap-5 gap-2 '>
                                <img src={C3} alt="" className='md:h-[22vh] md:w-[12vw] lg:h-[15vh] lg:w-[8vw] h-[20vh] w-[25vw]  rounded-xl' />
                                <div>
                                    <div className='flex space-x-24 md:space-x-96 lg:space-x-60'>
                                        <p className=' capitalize font-semibold md:text-base text-xs'>skinny fit jeans</p>
                                        <p className=''><Trash2 className='text-red-600 md:h-auto md:w-auto h-4 w-4 cursor-pointer' /></p>
                                    </div>
                                    <p className='capitalize md:text-base text-xs'>size: <span className='text-gray-500'>large</span></p>
                                    <p className='capitalize md:text-base text-xs'>color: <span className='text-gray-500'>blue</span></p>
                                    <div className='flex'>
                                        <p className='md:text-lg text-sm font-semibold flex-1'>$240</p>
                                        <input className='flex md:gap-5 gap-3 bg-gray-200 font-semibold md:p-2 p-1 rounded-full md:text-sm text-xs placeholder-black w-20 outline-none cursor-pointer' placeholder='-      1     +' />
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* Checkout-Section */}
                        <div className=''>
                            <div className='capitalize border rounded-xl p-5 md:my-6'>
                                <h2 className='font-bold md:text-xl text-lg '>order summary</h2>
                                <div className='flex items-center  md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>subtotal</p>
                                    <p className='md:text-base text-xs'>$565</p>
                                </div>
                                <div className='flex items-center  md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>discount(-20%)</p>
                                    <p className='text-red-500 md:text-base text-xs'>-$113</p>
                                </div>
                                <div className='flex items-center md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>delivery fee</p>
                                    <p className='md:text-base text-xs'>$015</p>
                                </div>
                                <hr className='md:my-6 my-4' />
                                <div className='flex items-center md:my-6 my-4'>
                                    <p className='text-gray-500 md:text-base text-xs flex-1'>total</p>
                                    <p className='md:text-base text-xs'>$467</p>
                                </div>
                                <div className='flex justify-center md:gap-9 gap-1  md:my-6 my-4'>
                                    <input type="text" name="" id="" placeholder='Add promo code' className='bg-slate-200 p-2 rounded-full text-center w-80 outline-none' />
                                    <button type="submit" className='bg-black md:p-2 p-3 rounded-full text-center text-white capitalize w-32 md:text-base text-xs'>apply</button>
                                </div>
                                <div className='flex items-center gap-9  md:my-6 my-4'>
                                    <button type="submit" className='bg-black p-3 rounded-full  text-white md:text-base text-xs capitalize w-full grid place-content-center items-center'><p className='flex items-center gap-2'>go to checkout<ArrowRight className='md:h-auto md:w-auto h-4 w-4' /></p></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
