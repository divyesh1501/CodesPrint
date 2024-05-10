import { ChevronDown, CircleUser, Menu, Search, ShoppingCart, User, UserCircle, X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RegisterModal } from '../Modal/RegisterModal/RegisterModal';
import { LoginModal } from '../Modal/LoginModal.jsx/LoginModal';

export default function Header() {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);

    const toggleLoginModal = () => {
        setLoginModalOpen(!isLoginModalOpen);
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    let navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    function navToCart() {
        navigate('/cart');
        window.location.reload()
    }
    function navToCategory() {
        navigate('/category');
        window.location.reload()
    }
    function navToHome() {
        navigate('/');
        window.location.reload()
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    function openModal() {
        toggleLoginModal()
    }
    function openRegModal() {
        toggleModal();
    }

    return (
        <>
            {/* Header */}
            <header>
                <div className="bg-black h-[38px] flex items-center justify-center sm:flex sm:items-center md:block">
                    <div className="text-white flex py-2 items-center md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3">
                        <h1 className="flex-1 text-nowrap text-xs md:text-sm font-normal text-center">Sign up and get 20% off to your first
                            order.<span className="underline" role='button' onClick={openRegModal}>Sign Up Now</span>
                        </h1>
                        <p className="hidden md:block lg:block" role='button'><X className='md:h-auto md:w-auto h-4 w-4' /></p>
                    </div>
                </div>

                {/* Navbar */}
                <div className='flex items-center md:mx-5 lg-mx-5 xl:mx-auto md:max-w-7xl lg:max-w-7xl mx-3'>
                    <div className=" flex-1 ">
                        <nav className="flex gap-5 text-black items-center flex-wrap pt-6">
                            <div className="flex items-center">
                                <span className=" lg:hidden block md:text-4xl mr-2" onClick={toggleMenu}><Menu /></span>
                                <p className="flex-1 logo md:text-4xl text-xl  font-bold flex items-center gap-2" role='button' onClick={navToHome}>SHOP.CO</p>
                            </div>
                            {/* Togglebar */}
                            <div
                                className={`w-full flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'
                                    }`}
                            >
                                <div className='flex gap-5 lg:flex-row flex-col'>
                                    <a
                                        href="#responsive-header"
                                        className="block mt-4 lg:inline-block text-base font-normal  lg:mt-0  "
                                    >
                                        <div class="flex w-full">
                                            <div class="group relative cursor-pointer">

                                                <div class="flex  justify-between space-x-5 bg-white">
                                                    <a class="menu-hover text-base text-black lg:mx-4 flex items-center" onClick="">
                                                        Shop<ChevronDown />
                                                    </a>
                                                </div>

                                                <div
                                                    class="invisible absolute z-50 flex items-center w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">

                                                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2" onClick={navToCategory}>
                                                        Men
                                                    </a>

                                                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                                        Woman
                                                    </a>

                                                    <a class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                                                        Kids
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                    </a>
                                    <a
                                        href="#sale"
                                        className="block mt-4 lg:inline-block text-base font-normal lg:mt-0 lg:mx-4"
                                    >
                                        On Sale
                                    </a>
                                    <a
                                        href="#newarrival"
                                        className="link block mt-4 lg:inline-block text-base font-normal lg:mt-0 lg:mx-4 "
                                    >
                                        New Arrivals
                                    </a>
                                    <a
                                        href="#brand"
                                        className="block mt-4 lg:inline-block text-base font-normal lg:mt-0 lg:mx-4"
                                    >
                                        Brands
                                    </a>
                                </div>
                            </div>

                        </nav>

                    </div>
                    <div className="flex gap-2 items-center mt-6 ">
                        <div className="relative  hidden lg:block" id='search'>
                            <input
                                type="text"
                                className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none focus:shadow-outline"
                                placeholder="Search for products..."
                            />
                            <div className="absolute top-0 right-0 mt-3">
                                <Search className="h-4 w-4 text-gray-400 mr-3 cursor-pointer" />
                            </div>
                        </div>
                        <button className="text-black block lg:hidden">
                            <a href="#search"><Search className='md:h-auto md:w-auto h-4 w-4' /></a>
                        </button>
                        <button className="text-black">
                            <ShoppingCart className='md:h-auto md:w-auto h-4 w-4' />
                        </button>
                        <button className="text-black">
                            <UserCircle className='md:h-auto md:w-auto h-4 w-4'
                            />
                        </button>
                        

                    </div>
                </div>

            </header>

        </>
    )
}

