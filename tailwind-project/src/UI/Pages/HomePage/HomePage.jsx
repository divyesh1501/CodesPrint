import React from 'react'
import b1 from "./images/banner-1.png";
import GT1 from "./images/GT-1.png";
import NA2 from "./images/NA2.png";
import NA3 from "./images/NA3.png";
import NA4 from "./images/NA4.png";
import TS1 from "./images/TS1.png";
import TS2 from "./images/TS2.png";
import TS3 from "./images/TS3.png";
import TS4 from "./images/TS4.png";
import DS1 from "./images/DS1.png";
import DS2 from "./images/DS2.png";
import DS3 from "./images/DS3.png";
import DS4 from "./images/DS4.png";
import { ArrowLeft, ArrowRight, CircleCheck, ShoppingCart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function HomePage({toggle}) {
    let navigate = useNavigate();

    function navtoProduct() {
        navigate('/product');
        window.location.reload()
    }


    return (
        <>
            {/* Home-Page */}
          
            {/* Hero-Section */}
            <section className="banner-1 mt-12 md:mt-12  md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 ">
                <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 ">
                    <div className="grid gap-5">
                        <h1 className="md:text-4xl text-2xl uppercase font-black md:leading-10 leading-6">find clothes that matches your style</h1>
                        <p className="lg:text-base md:text-xs text-xs font-normal text-gray-400">Browse through our diverse range of meticulously crafted
                            garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="bg-black rounded-3xl text-white text-base font-medium md:w-40" style={{ height: '40px' }}>Shop now</button>

                        <div className="grid md:grid-cols-3 lg:grid-cols-3 grid-cols-2 place-content-center capitalize gap-4">
                            <div>
                                <h2 className="text-2xl md:text-[30px] lg:text-[40px] font-bold">200+</h2>
                                <p className="md:text-base text-xs font-normal text-gray-400 mt-2 ">international brands</p>
                            </div>
                            <div>
                                <h2 className="text-2xl md:text-[30px] lg:text-[40px] font-bold">2,000+</h2>
                                <p className="md:text-base text-xs font-normal text-gray-400 mt-2 line-clamp-1">high-quality products</p>
                            </div>
                            <div className="md:col-span-1 lg:col-span-1 col-span-2 md:block grid place-content-center">
                                <h2 className="text-2xl md:text-[30px] lg:text-[40px] font-bold">30,000+</h2>
                                <p className="md:text-base text-xs font-normal text-gray-400 mt-2">happy customers</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid bg-center relative col-span-1 place-content-end">
                        <img src={b1} alt="" className="" />
                    </div>
                </div>
            </section>
            <div className='bg-black' id='brand'>
                <div className="uppercase col-span-2 text-white md:p-10 p-5 text-2xl md:text-2xl md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3">
                    <div className="grid md:grid-cols-5 grid-cols-5 text-nowrap">
                        <p className="md:col-span-1 col-span-2 cursor-pointer">versace</p>
                        <p className="md:col-span-1 col-span-2 cursor-pointer">zara</p>
                        <p className="md:col-span-1 col-span-1 cursor-pointer">gucii</p>
                        <p className="md:col-span-1 col-span-2 cursor-pointer">prada</p>
                        <p className="md:col-span-1 col-span-2 cursor-pointer">calvin klein</p>
                    </div>
                </div>
            </div>
            {/* new-arrival */}
            <section className="md:mt-12 mt-12 md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 " id='newarrival'>
                <div>
                    <h1 className='uppercase md:text-4xl font-black text-center text-xl'>new arrivals</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 my-12'>
                    <div className=''>
                        <img src={GT1} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' onClick={navtoProduct} />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer' onClick={navtoProduct}>gradiant graphic t-shirt</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.5/5</span>
                            </p>
                                <p className='font-bold flex items-center gap-5 md:text-lg text-xs'>$260 <span className='text-slate-400 line-through'>$300</span> <span className='bg-red-200 rounded-2xl text-xs px-2 py-1  text-red-600'>-40%</span><ShoppingCart role='button' />
                                </p>

                        </div>
                    </div>
                    <div className=''>
                        <img src={NA2} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer'>skinny fit jeans</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.5/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$240 <span className='text-slate-400 line-through'>$260</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-20%</span><ShoppingCart role='button' /></p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={NA3} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer'>checkerd shirt</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.5/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$180<ShoppingCart role='button' /></p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={NA4} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer'>sleeve striped t-shirt</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.5/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$130 <span className='text-slate-400 line-through'>$160</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600 '>-30%</span><ShoppingCart role='button' /></p>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-12'>
                    <button className='capitalize md:w-40 w-full h-10 border rounded-3xl font-semibold'>view all</button>
                </div>
            </section>
            <hr className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3' />
            {/* top-selling */}
            <section className="md:mt-12 mt-12 md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 " id='sale'>
                <div>
                    <h1 className='uppercase md:text-4xl font-black text-center text-xl'>top selling</h1>
                </div>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5 my-12'>
                    <div className=''>
                        <img src={TS1} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer'>vertical striped shirt</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>5.0/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$212 <span className='text-slate-400 line-through'>$232</span> <span className='bg-red-200 rounded-xl p-1 text-xs text-red-600'>-20%</span><ShoppingCart role='button' /></p>
                        </div>
                    </div>
                    <div className=''>
                        <img src={TS2} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1'>
                            <h1 className='capitalize font-semibold md:text-base text-xs cursor-pointer'>courgae graphic t-shirt</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.0/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$145<ShoppingCart role='button' /></p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={TS3} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1 cursor-pointer'>
                            <h1 className='capitalize font-semibold md:text-base text-xs'>loose fit bermuda shorts</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <span>3.0/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$80<ShoppingCart role='button' /></p>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <img src={TS4} alt="" className='md:h-[298px] md:w-[295px] h-44 w-44 rounded-lg cursor-pointer' />
                        <div className='flex flex-col gap-2 mt-1 cursor-pointer'>
                            <h1 className='capitalize font-semibold md:text-base text-xs'>faded skinny jeans</h1>
                            <p className='flex items-center'>
                                <Star />
                                <Star />
                                <Star />
                                <Star />
                                <span>4.5/5</span>
                            </p>
                            <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$210<ShoppingCart role='button' /></p>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-12'>
                    <button className='capitalize md:w-40 h-10 w-full border rounded-3xl font-semibold'>view all</button>
                </div>
            </section>
            {/* dress-style */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 '>
                <div className='bg-gray-100 rounded-xl' >
                    <h1 className='uppercase md:text-4xl text-2xl font-black text-center md:py-12 py-6'>browse by dress style</h1>
                    <div className='grid md:grid-cols-3 gap-5 items-center md:place-content-center md:mx-12 md:pb-12 mx-6 pb-6 '>

                        <div className=" justify-center items-center">
                            <div className='relative'>
                                <img src={DS1} alt="" className="object-cover md:w-[500px] md:h-[289px] w-[90vw] h-36 rounded-xl cursor-pointer" />
                                <h2 className='md:top-5 top-0 md:left-3 left-1 absolute capitalize font-bold md:text-2xl'>casual</h2>
                            </div>
                        </div>
                        <div className=" justify-center items-center md:col-span-2">
                            <div className='relative'>
                                <img src={DS2} alt="" className=" object-cover md:w-[780px] md:h-[289px] w-[90vw] h-36 rounded-xl cursor-pointer" />
                                <h2 className='md:top-5 top-0 md:left-3 left-1 absolute capitalize font-bold md:text-2xl'>formal</h2>
                            </div>
                        </div>
                        <div className=" justify-center items-center md:col-span-2">
                            <div className='relative'>
                                <img src={DS3} alt="" className=" object-cover md:w-[780px] md:h-[289px] w-[90vw] h-36 rounded-xl cursor-pointer" />
                                <h2 className='md:top-5 top-0 md:left-3 left-1 absolute capitalize font-bold md:text-2xl'>party</h2>
                            </div>
                        </div>
                        <div className=" justify-center items-center">
                            <div className='relative'>
                                <img src={DS4} alt="" className=" object-cover md:w-[407px] md:h-[289px] w-[90vw] h-36 rounded-xl cursor-pointer" />
                                <h2 className='md:top-5 top-0 md:left-3 left-1 absolute capitalize font-bold md:text-2xl'>gym</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* happy-cutomer */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto md:mt-12 mt-12 md:max-w-7xl lg:max-w-7xl mx-3 md:mb-0 mb-36 '>
                <div>
                    <div className='flex md:items-center'>
                        <h1 className='uppercase md:text-4xl font-black text-2xl md:py-12 flex-1'>our happy customers</h1>
                        <div className='flex items-center'><p><ArrowLeft /></p><p><ArrowRight /></p></div>
                    </div>
                    <div className='grid md:grid-cols-3 md:gap-10 gap-5 md:my-0 my-5'>
                        <div className='p-6 leading-6 border rounded-xl grid grid-cols-1 gap-3'>
                            <p className='flex'><Star /><Star /><Star /><Star /><Star /></p>
                            <h2 className='flex items-center capitalize font-bold text-xl'>sarah m.<span className='ms-1'><CircleCheck /></span></h2>
                            <p className='text-gray-400 lg:text-base md:text-xs text-xs'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>
                        </div>
                        <div className='md:block hidden'>
                            <div className='p-6 leading-6 border rounded-xl grid grid-cols-1 gap-3'>
                                <p className='flex'><Star /><Star /><Star /><Star /><Star /></p>
                                <h2 className='flex items-center capitalize font-bold text-xl'>alex k.<span className='ms-1'><CircleCheck /></span></h2>
                                <p className='text-gray-400 lg:text-base md:text-xs text-xs'>"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”</p>
                            </div>
                        </div>
                        <div className='md:block hidden'>
                            <div className='p-6 leading-6 border rounded-xl grid grid-cols-1 gap-3'>
                                <p className='flex'><Star /><Star /><Star /><Star /><Star /></p>
                                <h2 className='flex items-center capitalize font-bold text-xl'>james l.<span className='ms-1'><CircleCheck /></span></h2>
                                <p className='text-gray-400 lg:text-base md:text-xs text-xs'>"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
