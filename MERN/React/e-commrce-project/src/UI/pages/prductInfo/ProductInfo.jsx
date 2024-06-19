import React, { useContext, useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import { useParams } from 'react-router-dom'; // Make sure to import from 'react-router-dom'
import RatingStars from '../../components/ratingstar/RatingStars';

function ProductInfo() {
    const context = useContext(myContext);
    const { mode, products, addCart } = context; // Assuming you only need 'products' from context
    const [productInfo, setProductInfo] = useState(null);
    console.log("🚀 ~ ProductInfo ~ productInfo:", productInfo)
    const { id } = useParams(); // Extract 'id' from params


    useEffect(() => {
        if (products && id) {
            const product = products.find(product => product.id === parseInt(id));
            if (product) {
                setProductInfo(product);
            }
        }
    }, [products, id]);

    if (!productInfo || productInfo.length === 0) {
        return <Layout><div className='flex items-center justify-center font-black text-3xl my-5'>Loading...</div></Layout>;
    }


    return (
        <Layout>
            <section className="text-gray-600 body-font overflow-hidden" style={{ color: mode === 'dark' ? 'white' : '' }}>
                <div className="container px-5 py-32 mx-auto">
                    {productInfo && (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img
                                alt="Product"
                                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                                src={productInfo.image}
                            />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font tracking-widest">
                                    {productInfo.category.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                </h2>
                                <div className='text-gray-900'>
                                    <h1 className=" text-3xl title-font font-medium mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        {productInfo.title}
                                    </h1>
                                </div>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <RatingStars rating={productInfo.rating.rate} />
                                    </span>
                                </div>
                                <p className="leading-relaxed border-b-2 mb-5 pb-5">
                                    {productInfo.description}
                                </p>

                                <div className="flex text-gray-900">
                                    <span className="title-font font-medium text-2xl" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                        ₹ {productInfo.price}
                                    </span>
                                    <button onClick={() => addCart(productInfo)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Layout>
    );
}

export default ProductInfo;
