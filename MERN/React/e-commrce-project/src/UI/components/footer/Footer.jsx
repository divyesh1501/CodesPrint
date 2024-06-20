import { useContext } from 'react'
import { Link } from 'react-router-dom'
import myContext from '../../context/data/myContext'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
import one5 from "./favicon.ico";

export default function Footer() {
  const context = useContext(myContext)
  const { toggleMode, mode } = context
  return (
    <footer className="text-gray-600 body-font bg-gray-300" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '', }}>
      <div className="container px-3 py-24 mx-auto" >
        <div className="flex flex-wrap text-left ">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>CATEGORIES</h2>
            <nav className="list-none mb-10 ">
              <li>
                <Link to={'/'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Home</Link>
              </li>
              <li>
                <Link to={'/order'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Order</Link>
              </li>
              <li>
                <Link to={'/local'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Local For Vocal</Link>
              </li>
              <li>
                <Link to={'/cart'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Cart</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Customer Service</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/returnpolicy'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Return Policy</Link>
              </li>
              <li>
                <Link to={'/about'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>About</Link>
              </li>
              <li>
                <Link to={'/contact'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Contact Us</Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase" style={{ color: mode === 'dark' ? 'white' : '' }}>Services</h2>
            <nav className="list-none mb-10">
              <li>
                <Link to={'/privacypolicy'} className="text-gray-600 hover:text-gray-800 no-underline" style={{ color: mode === 'dark' ? 'white' : '' }}>Privacy</Link>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>

      </div>

      <div className="bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(55 57 61)' : '', color: mode === 'dark' ? 'white' : '', }}>

        <div className="container px-3 py-3 mx-auto flex items-center sm:flex-row flex-col" >
          <Link to={'/'} className='flex no-underline'>
            <div className="flex ">
              <img src={one5} alt="logo" srcset="" />
              {/* <h1 className=' text-2xl font-bold text-pink-600  px-2 py-1 rounded' style={{ color: mode === 'dark' ? 'white' : '', }}>One5</h1> */}
            </div>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4" style={{ color: mode === 'dark' ? 'white' : '' }}>&copy; 2023 One5 —
            <a href="https://twitter.com" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" style={{ color: mode === 'dark' ? 'white' : '' }}>www.Onefive.com</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link to="https://www.facebook.com/" target="_blank" className="text-gray-500">
              <FaFacebookF />
            </Link>
            <Link to="https://x.com/" target="_blank" className="ml-3 text-gray-500">
              <FaTwitter />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank" className="ml-3 text-gray-500">
              <FaInstagram />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank" className="ml-3 text-gray-500">
              <FaLinkedinIn />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}