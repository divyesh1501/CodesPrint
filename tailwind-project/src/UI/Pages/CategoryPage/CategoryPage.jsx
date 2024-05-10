import { ArrowLeft, ArrowRight, Check, ChevronDown, ChevronRight, ChevronUp, Ellipsis, ShoppingCart, SlidersVertical, Star, StarHalf, X } from 'lucide-react'
import React from 'react'
import CT1 from "./images/CT1.png";
import CT2 from "./images/CT2.png";
import CT3 from "./images/CT3.png";
import CT4 from "./images/CT4.png";
import CT5 from "./images/CT5.png";
import CT6 from "./images/CT6.png";
import CT7 from "./images/CT7.png";
import CT8 from "./images/CT8.png";
import CT9 from "./images/CT9.png";

import { useNavigate } from 'react-router-dom';

export default function CategoryPage() {

    let navigate = useNavigate();

    function navtoFilter() {
        navigate('/filter');
        window.location.reload()
    }
    function navtoHome() {
        navigate('/');
        window.location.reload()
    }
    return (
        <>
            {/* Category-Page */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3 mt-6'>
            <hr className='md:my-6 my-4'/>
                <div>
                    <p className='flex items-center capitalize md:text-base text-xs text-gray-500' role='button'><span onClick={navtoHome}>home</span><ChevronRight className='md:h-auto md:w-auto h-4 w-4' />category<ChevronRight className='md:h-auto md:w-auto h-4 w-4' /> <span className='text-black'>casual</span></p>

                    <div className='flex flex-row gap-5 md:my-6 my-4'>

                        {/* Filter-section */}
                        <div className='hidden md:hidden lg:block '>
                            <div className='border rounded-xl p-5'>
                                <div>
                                    <div className='flex items-center md:my-6 my-4'>
                                        <h2 className='capitalize font-bold md:text-2xl text-lg flex-1'>filters</h2>
                                        <p className='text-gray-500' role='button'><X className='md:h-auto md:w-auto h-5 w-5' /></p>
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
                                    <hr className='md:my-6 my-4' />
                                </div>
                                <div>
                                    <div className='flex flex-col'>
                                        <div className='flex items-center'><label for="price" className='capitalize font-bold md:text-2xl text-lg flex-1 my-6'>Price</label><p className='text-gray-500' role='button'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p></div>
                                        <input type="range" id="price" name="price" min="20" value="80" max="100" className='relative accent-black' role='button' />
                                        <hr className='md:my-6 my-4' />
                                    </div>
                                </div>
                                <div>
                                    <h2 className='flex items-center md:my-6 my-4'>
                                        <p className='capitalize flex-1 font-bold md:text-2xl text-lg'>colors</p>
                                        <p className='text-gray-500' role='button'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p>
                                    </h2>
                                    <div className='grid lg:grid-cols-3 xl:grid-cols-5 gap-5'>
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
                                    <hr className='md:my-6 my-4' />
                                </div>
                                <div>
                                    <div>
                                        <h2 className='flex items-center md:my-6 my-4'>
                                            <p className='capitalize flex-1 font-bold md:text-2xl text-lg'>size</p>
                                            <p className='text-gray-500'><ChevronUp className='md:h-auto md:w-auto h-5 w-5' /></p>
                                        </h2>
                                        <div className='grid md:grid-cols-1 xl:grid-cols-2 grid-cols-3 gap-3'>
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
                                    <hr className='md:my-6 my-4' />
                                </div>
                                <div>
                                    <h2 className='flex items-center md:my-6 my-4'>
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
                                <button className='text-white bg-black rounded-full p-3 capitalize w-full md:my-6 my-4 md:text-base text-xs'>apply filter</button>
                            </div>
                        </div>

                        <div>
                            <div className='flex flex-row items-center lg:gap-[0px]'>
                                <h2 className='flex-1 md:text-3xl text-lg font-bold'>Casual</h2>
                                <div className='flex flex-row items-center md:text-base text-xs'><p className='text-gray-500 flex items-center'>Showing 1-10 of 100 Products <span className='hidden md:hidden lg:block '>Sort by: Most Poular</span></p><p className='text-black hidden md:hidden lg:block ' role='button'><ChevronDown /></p></div>
                                <a href="" className='text-gray-500 bg-slate-200 p-2 rounded-full  lg:hidden md:block block ml-1' role='button' onClick={navtoFilter}><SlidersVertical className='md:h-auto md:w-auto h-3 w-3' /></a>
                            </div>

                            {/* Category */}
                            <div className='grid place-content-end grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 lg:gap-5 xl:gap-5 md:gap-5 gap-3 my-6'>
                                <div className=''>
                                    <img src={CT1} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>gradiant graphic t-shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <StarHalf className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>3.5/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$145 <ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={CT2} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>polo with tipping details</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <StarHalf className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs' >4.5/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$180<ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={CT3} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>black striped t-shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>5.0/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$120 <span className='text-slate-400 line-through'>$150</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-30%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={CT4} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>skkiny fit jeans</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <StarHalf className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs' >3.5/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$240 <span className='text-slate-400 line-through'>$260</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-20%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={CT5} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>checkered shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <StarHalf className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>4.5/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$180<ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className=''>
                                    <img src={CT6} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>sleeve striped t-shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <StarHalf className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>4.5/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$130 <span className='text-slate-400 line-through'>$160</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-30%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className='hidden md:hidden lg:block'>
                                    <img src={CT7} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>vertical striped shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>5.0/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$212 <span className='text-slate-400 line-through'>$232</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-20%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className='hidden md:hidden lg:block'>
                                    <img src={CT8} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>courage graphic t-shirt</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>4.0/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$145<ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>
                                <div className='hidden md:hidden lg:block '>
                                    <img src={CT9} alt="" className='md:h-[300px] md:w-[360px] lg:h-[250px] lg:w-[250px] xl:h-[300px] xl:w-[300px] h-[25vh] w-[45vw] rounded-lg' role='button' />
                                    <div className='flex flex-col gap-2 mt-1'>
                                        <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>loose fit bermuda short</h1>
                                        <p className='flex items-center'>
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <Star className='md:h-auto md:w-auto h-3 w-3' />
                                            <span className='md:text-base text-xs'>3.0/5</span>
                                        </p>
                                        <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$80<ShoppingCart className='h-6 w-5' role='button' /></p>
                                    </div>
                                </div>

                            </div>
                            <hr className='my-6' />

                            {/* Pagination */}
                            <div className='flex items-center lg:gap-52 md:gap-48 xl:gap-80 gap-5'>
                                <button className='flex capitalize items-center md:text-base text-xs border rounded-lg p-1'><ArrowLeft />previous</button>
                                <div className='text-gray-500 flex items-center gap-3'>
                                    <p className='bg-gray-200 text-black md:px-3 px-2 py-1 rounded-lg md:text-base text-xs' role='button'>1</p>
                                    <p className='md:text-base text-xs' role='button'>2</p>
                                    <p className='md:block hidden md:text-base text-xs' role='button'>3</p>
                                    <p className='md:text-base text-xs' role='button'> <Ellipsis /></p>
                                    <p className='md:block hidden md:text-base text-xs' role='button'>8</p>
                                    <p className='md:text-base text-xs' role='button'>9</p>
                                    <p className='md:text-base text-xs' role='button'>10</p>
                                </div>
                                <button className='flex capitalize items-center md:text-base text-xs border rounded-lg p-1'>next<ArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            
        </>
    )
}
