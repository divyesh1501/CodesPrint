import { Link } from 'react-router-dom'
import Layout from '../../components/layout/Layout'

function Login() {

    return (
        <Layout>
            <div className='container px-3 py-5 mx-auto flex justify-center items-center'>
                <div className='bg-gray-800 px-3 py-10 rounded-xl'>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                    </div>
                    <div>
                        <input type="email"
                            name='email'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full  rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Email'
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full  rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Password'
                        />
                    </div>
                    <div className=' flex justify-center mb-3'>
                        <button
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                            Login
                        </button>
                    </div>
                    <div>
                        <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Login