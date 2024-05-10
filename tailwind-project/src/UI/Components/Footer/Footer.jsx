import React from 'react'
import { Facebook, Github, Instagram, Twitter } from 'lucide-react'
import Vlogo from "./images/VISA-logo.png";
import Mlogo from "./images/MASTER-CARD-logo.png";
import Plogo from "./images/PAYPAL-logo.png";
import Alogo from "./images/APPLE-PAY-logo.png";
import Glogo from "./images/GPAY-logo.png";

export default function Footer() {
    

    return (
        <>
            {/* Footer */}
            <footer className="bg-slate-100 font-[sans-serif] mt-32">
                <div className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3'>
                    <div className="relative">
                        <div className=' flex flex-col sm:flex-row  items-center md:px-10 lg:px-20 py-4 md:gap-3 lg:gap-28 gap-5 bg-black rounded-xl top-[-100px] text-center absolute'>
                            <div>
                                <h1 className='uppercase text-sm md:text-xl lg:text-3xl font-black  md:py-12 md:flex-1 text-white'>stay upto date about our latest offers</h1>
                            </div>
                            <div className='md:flex md:flex-col flex flex-col gap-3 md:items-center items-center md:justify-center md:gap-3'>
                                <input type="text" className='w-60 h-10 rounded-3xl outline-none px-5' placeholder='Enter your email address' />
                                <button type="submit" className='w-60 h-10 rounded-3xl bg-white text-black capitalize lg:text-base md:text-xs text-xs'>subscribe to newsletter</button>
                            </div>
                        </div>
                        <div className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 md:mt-36 mt-28'>
                            <div className='grid md:grid-cols-6 pt-32 sm:pt-40 pb-12 md:gap-0 gap-5'>
                                <div className='col-span-2 leading-6 md:grid md:grid-cols-1 md:gap-0 grid grid-cols-1 gap-3 md:py-0 py-5'>
                                    <h3 className='uppercase font-black md:text-3xl text-2xl md:mb-5'>shop.co</h3>
                                    <p className='text-gray-500 md:mb-4 lg:text-base md:text-xs text-xs'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                                    <ul className='flex gap-4'>
                                        <a href='https://twitter.com/' target="_blank" className='bg-white border p-2 rounded-full'><Twitter className='md:h-auto md:w-auto h-3 w-3' /></a>
                                        <a href='https://www.facebook.com/' target="_blank" className='bg-white border p-2 rounded-full'><Facebook className='md:h-auto md:w-auto h-3 w-3' /></a>
                                        <a href='https://www.instagram.com/' target="_blank" className='bg-white border p-2 rounded-full'><Instagram className='md:h-auto md:w-auto h-3 w-3' /></a>
                                        <a href='https://github.com/' target="_blank" className='bg-white border p-2 rounded-full'><Github className='md:h-auto md:w-auto h-3 w-3' /></a>

                                    </ul>
                                </div>
                                <div>
                                    <h3 className='uppercase font-medium md:text-base text-sm'>company</h3>
                                    <ul className='text-gray-500 capitalize md:leading-8 lg:leading-9 leading-8 lg:text-base md:text-xs text-xs'>
                                        <li role='button'>about</li>
                                        <li role='button'>features</li>
                                        <li role='button'>works</li>
                                        <li role='button'>career</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='uppercase font-medium md:text-base text-sm'>help</h3>
                                    <ul className='text-gray-500 capitalize md:leading-8 lg:leading-9 leading-8 lg:text-base md:text-xs text-xs'>
                                        <li role='button'>customer support</li>
                                        <li role='button'>delivery details</li>
                                        <li role='button'>terms & conditons</li>
                                        <li role='button'>privacy policy</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='uppercase font-medium md:text-base text-sm'>faq</h3>
                                    <ul className='text-gray-500 capitalize md:leading-8 lg:leading-9 leading-8 lg:text-base md:text-xs text-xs'>
                                        <li role='button'>account</li>
                                        <li role='button'>manage deliveries</li>
                                        <li role='button'>orders</li>
                                        <li role='button'>payments </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className='uppercase font-medium md:text-base text-sm'>resources</h3>
                                    <ul className='text-gray-500 capitalize md:leading-8 lg:leading-9 leading-8 lg:text-base md:text-xs text-xs'>
                                        <li role='button'>free eBooks</li>
                                        <li role='button'>development tutorial</li>
                                        <li role='button'>how to - blog</li>
                                        <li role='button'>youtube playlist</li>
                                    </ul>
                                </div>

                            </div>
                            <hr />
                            <div className='pt-6 pb-12 flex md:flex-row flex-col md:gap-0 gap-3 lg:text-base md:text-xs text-xs items-center'>
                                <p className='capitalize text-gray-500 flex-1'>shop.co &copy; 2000-2023. all rights reserved.</p>
                                <div className='flex gap-3'>
                                    <img src={Vlogo} alt="" className='h-5 w-8 bg-white rounded' />
                                    <img src={Mlogo} alt="" className='h-5 w-8 bg-white rounded' />
                                    <img src={Plogo} alt="" className='h-5 w-8 bg-white rounded' />
                                    <img src={Alogo} alt="" className='h-5 w-8 bg-white rounded' />
                                    <img src={Glogo} alt="" className='h-5 w-8 bg-white rounded' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

