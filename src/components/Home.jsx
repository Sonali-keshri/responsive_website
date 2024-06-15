import React from 'react'
import Navbar from './Navbar'
import { IoIosArrowRoundDown } from "react-icons/io";
import { FaTwitter, FaInstagram } from "react-icons/fa";
import Card from './Card';
import CardData from "../CardData.json"
import Footer from './Footer';


const Home = () => {

    const cardComponents = CardData.map((item, index) => {
        return <Card key={index} data={item} />;
    });

    return (
        <div className="home">
            <div className='md:px-[50px] px-4'>
                <Navbar />
                <div className='mt-[80px] 2xl:mt-[150px] relative mx-auto max-w-[1546px]'>
                    <div className='md:max-w-[60%] mx-auto'>
                        <div className='flex items-center gap-5 mb-10'>
                            <div className='w-20 h-1 bg-[#FBD784] shadow-md'></div>
                            <span className='uppercase text-[#FBD784] font-sans drop-shadow-md'>A Hiking Guide</span>
                        </div>
                        <div>
                            <h1 className='text-7xl'>Be Prepared For The Mountains And Beyond!</h1>
                            <a className='flex items-center mt-10 text-lg cursor-pointer' href="#footer">scroll down <IoIosArrowRoundDown size={30} /></a>
                        </div>
                    </div>
                    <div className='flex md:flex-col gap-4 absolute md:top-20 md:left-0 md:bg-transparent bg-slate-600 opacity-70 md:p-0 p-4 md:rounded-none rounded-xl -bottom-28 mx-auto'>
                        <p>Follow us</p>
                        <FaTwitter size={25} />
                        <FaInstagram size={25} />
                    </div>
                    <div className='border-r-4 border-white absolute lg:top-0 md:top-64 top-[380px] right-0 flex flex-col gap-6 p-10 text-right text-2xl'>
                        <p>Start</p>
                        <p>01</p>
                        <p>02</p>
                        <p>03</p>
                    </div>
                </div>
                <div className='mt-[500px]' id="cardComponents">
                    {cardComponents}
                </div>
                <div id='footer'>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home
