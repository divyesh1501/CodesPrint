import React from 'react'
import { Check, ChevronDown, ChevronRight, CircleCheck, Ellipsis, ShoppingCart, SlidersVertical, Star, StarHalf } from 'lucide-react'
import GT1 from "./images/GT-1.png";
import GT2 from "./images/GT-2.png";
import GT3 from "./images/GT-3.png";
import AL1 from "./images/AL1.png";
import AL2 from "./images/AL2.png";
import AL3 from "./images/AL3.png";
import AL4 from "./images/AL4.png";
import { useNavigate } from 'react-router-dom';


export default function ProductPage() {
    let navigate = useNavigate();

    function navtoHome() {
        navigate('/');
        window.location.reload()
    }
    return (
        <>
            {/* product-page */}

            {/* product-details */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto  md:max-w-7xl lg:max-w-7xl mx-3 mt-6'>
            <hr className='md:my-6 my-4'/>
                <div>
                    <p className='flex capitalize md:text-base text-sm text-gray-500' role='button'><span onClick={navtoHome}>home</span><ChevronRight /> shop<ChevronRight /> men<ChevronRight /> <span className='text-black' role='button'>t-shirts</span></p>
                    <div className='grid md:grid-cols-2 gap-5 mt-6'>
                        <div className='flex md:flex-col lg:flex-row flex-col-reverse gap-5 mt-7'>
                            <div className='flex md:flex-row lg:flex-col gap-5'>
                                <div ><img src={GT1} alt="" className='md:w-[15vw] md:h-[25vh] w-[26.5vw] h-[15vh] rounded-xl md:border-none border-2 border-black' role='button' /></div>
                                <div><img src={GT2} alt="" className='md:w-[15vw] md:h-[25vh] w-[26.5vw] h-[15vh] rounded-xl' role='button' /></div>
                                <div><img src={GT3} alt="" className='md:w-[15vw] md:h-[25vh] w-[26.5vw] h-[15vh] rounded-xl' role='button' /></div>
                            </div>
                            <div>
                                <img src={GT1} alt="" className='md:w-[47vw] md:h-[88vh] lg:w-[47vw] lg:h-[80vh] w-[92vw] h-[50vh] rounded-xl' />
                            </div>
                        </div>
                        <div>
                            <div className='flex flex-col gap-3 mt-5'>
                                <h1 className='md:text-3xl text-xl font-black uppercase'>one life graphic t-shirt</h1>
                                <p className='flex items-center'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <span>4.5/5</span>
                                </p>
                                <p className='font-bold flex items-center gap-5 md:text-xl text-xs'>$260 <span className='text-slate-400 line-through'>$300</span> <span className='bg-red-200 rounded-2xl text-xs px-2 py-1  text-red-600'>-40%</span></p>
                                <p className='text-gray-500 md:text-base text-xs text-wrap'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                            </div>
                            <hr className=' h-1 my-5 dark:bg-gray-300' />
                            <div className=''>
                                <p className='capitalize text-gray-500 mb-3 md:text-base text-sm'>select colors</p>
                                <div className='flex gap-5'>
                                    <p className='bg-lime-950 md:h-10 md:w-10 h-8 w-8 rounded-full grid place-content-center text-white' role='button'><Check /></p>
                                    <p className='bg-green-950 md:h-10 md:w-10 h-8 w-8 rounded-full grid place-content-cente' role='button'></p>
                                    <p className='bg-indigo-950 md:h-10 md:w-10 h-8 w-8 rounded-full grid place-content-center' role='button'></p>
                                </div>
                                <hr className=' h-1 mx-auto my-5 dark:bg-gray-100' />
                                <p className='capitalize text-gray-500 mb-3 md:text-base text-sm'>choose size</p>
                                <div className='flex flex-row gap-5 capitalize'>
                                    <p className='bg-gray-200 px-2 py-2 rounded-full md:text-base text-xs' role='button'>small</p>
                                    <p className='bg-gray-200 px-2 py-2 rounded-full md:text-base text-xs' role='button'>medium</p>
                                    <p className='bg-gray-200 px-2 py-2 rounded-full md:text-base text-xs' role='button'>large</p>
                                    <p className='bg-gray-200 px-2 py-2 rounded-full md:text-base text-xs' role='button'>x-large</p>
                                </div>
                                <hr className=' h-1 mx-auto my-5 dark:bg-gray-100' />
                                <div className='grid grid-cols-3 gap-5 '>
                                    <input className='flex md:gap-14 gap-2 bg-gray-200 px-5 py-3 rounded-3xl md:text-base text-sm outline-none placeholder-black cursor-pointer' placeholder='-               1              +' />
                                    <p className='flex items-center gap-5 justify-center bg-black text-white px-5 py-3 rounded-3xl capitalize col-span-2 md:text-base text-sm' role='button'>add to cart<ShoppingCart className='h-6 w-5' /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='md:mx-5 lg-mx-5 xl:mx-auto  md:max-w-7xl lg:max-w-7xl mx-3 mt-12'>
                <div className='capitalize grid grid-cols-3 text-center md:text-base text-xs'>
                    <p role='button'>product details</p>
                    <p className='border-b-2 pb-5 border-black ' role='button'>rating & reviews</p>
                    <p role='button'>FAQs</p>
                </div>
                <hr className=' h-1 mx-auto dark:bg-gray-100' />
                <div>
                    <div className='flex items-center my-5'>
                        <h2 className='capitalize font-bold md:text-xl flex-1 text-sm'>all reviews <span className='text-gray-500 md:text-sm text-xs font-normal'>(451)</span></h2>
                        <div className='flex flex-row gap-5'>
                            <p className='bg-gray-200 px-2 py-1 rounded-full' role='button'><SlidersVertical /></p>
                            <div className='md:block hidden'><p className='bg-gray-200 px-2 py-1 rounded-3xl flex capitalize md:text-base text-xs ' role='button'>latest <ChevronDown /></p></div>
                            <p className='bg-black flex items-center text-white px-2 py-1 rounded-3xl capitalize md:text-base text-xs' role='button'>write a review</p>
                        </div>
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf /></p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>samantha d.<CircleCheck /></h2>
                            <p className='text-gray-500'>"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</p>
                            <p className='text-gray-500'>Posted on August 14, 2023</p>
                        </div>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>alex m.<CircleCheck /></h2>
                            <p className='text-gray-500'>"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</p>
                            <p className='text-gray-500'>Posted on August 15, 2023</p>
                        </div>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf /></p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>ethan r.<CircleCheck /></h2>
                            <p className='text-gray-500'>"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</p>
                            <p className='text-gray-500'>Posted on August 16, 2023</p>
                        </div>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>olivia p.<CircleCheck /></h2>
                            <p className='text-gray-500'>"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</p>
                            <p className='text-gray-500'>Posted on August 17, 2023</p>
                        </div>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                </p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>liam k.<CircleCheck /></h2>
                            <p className='text-gray-500'>"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</p>
                            <p className='text-gray-500'>Posted on August 18, 2023</p>
                        </div>
                        <div className='flex flex-col gap-3 border p-5 rounded-xl'>
                            <div className='flex'>
                                <p className='flex flex-1'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf /></p>
                                <p className='md:block hidden'><Ellipsis /></p>
                            </div>
                            <h2 className='capitalize flex font-bold'>ava h.<CircleCheck /></h2>
                            <p className='text-gray-500'>"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</p>
                            <p className='text-gray-500'>Posted on August 19, 2023</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <button className='border rounded-full p-3 my-5 capitalize font-semibold text-sm'>load more reviews</button>
                    </div>
                </div>

            </section>


            {/* also-like-section */}
            <section className='md:mx-5 lg-mx-5 xl:mx-auto  md:max-w-7xl lg:max-w-7xl mx-3 mt-12'>
                <div>
                    <h1 className='md:text-4xl text-2xl font-black uppercase text-center'>you might also like</h1>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-5 my-12'>
                        <div className=''>
                            <img src={AL1} alt="" className='md:h-[200px] md:w-[295px] lg:h-[280px] lg:w-[295px] h-44 w-44 rounded-lg' role='button' />
                            <div className='flex flex-col gap-2 mt-1'>
                                <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>polo with contrast trims</h1>
                                <p className='flex items-center'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <span>4.0/5</span>
                                </p>
                                <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$212 <span className='text-slate-400 line-through'>$242</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-20%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                            </div>
                        </div>
                        <div className=''>
                            <img src={AL2} alt="" className='md:h-[200px] md:w-[295px] lg:h-[280px] lg:w-[295px] h-44 w-44 rounded-lg' role='button' />
                            <div className='flex flex-col gap-2 mt-1'>
                                <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>gradiant graphic t-shirt</h1>
                                <p className='flex items-center'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf />
                                    <span>3.5/5</span>
                                </p>
                                <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$145<ShoppingCart className='h-6 w-5' role='button' /></p>
                            </div>
                        </div>
                        <div className='md:block hidden'>
                            <img src={AL3} alt="" className='md:h-[200px] md:w-[295px] lg:h-[280px] lg:w-[295px] h-44 w-44 rounded-lg' role='button' />
                            <div className='flex flex-col gap-2 mt-1'>
                                <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>polo with tipping details</h1>
                                <p className='flex items-center'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <StarHalf />
                                    <span>4.5/5</span>
                                </p>
                                <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$180<ShoppingCart className='h-6 w-5' role='button' /></p>
                            </div>
                        </div>
                        <div className='md:block hidden'>
                            <img src={AL4} alt="" className='md:h-[200px] md:w-[295px] lg:h-[280px] lg:w-[295px] h-44 w-44 rounded-lg' role='button' />
                            <div className='flex flex-col gap-2 mt-1'>
                                <h1 className='capitalize font-semibold md:text-base text-xs' role='button'>black striped t-shirt</h1>
                                <p className='flex items-center'>
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <Star />
                                    <span>5.0/5</span>
                                </p>
                                <p className='font-bold flex items-center gap-5 md:text-base text-xs'>$120 <span className='text-slate-400 line-through'>$150</span> <span className='bg-red-200 rounded-xl px-2 py-1 text-xs text-red-600'>-30%</span><ShoppingCart className='h-6 w-5' role='button' /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
