import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
// import card1 from "../assets/card1.svg"
// import card2 from "../assets/card2.svg"
// import card3 from "../assets/card3.svg"

const Card = ({ data, flexRow }) => {
    return (
        // <div >
        <div className={`flex  ${data.id === 2 ? "md:flex-row-reverse":"md:flex-row"} flex-col md:gap-32 gap-8 md:w-[80%]  mx-auto md:my-48 my-44 p-2 md:p-0`}>
            <div className='md:w-[60%] w-[100%] relative'>
                <h1 className='text-9xl absolute -top-12 md:-left-10 -left-6 opacity-35 font-sans font-bold'>{`0${data.id}`}</h1>
                <div className='flex  items-center gap-5 '>
                    <div className='w-20 h-1 bg-[#FBD784] shadow-md'></div> <span className='uppercase text-[#FBD784] font-sans drop-shadow-md'>{data.subtitle}</span>
                </div>
                <h1 className='text-5xl my-5'>{data.title}</h1>
                <p className='text-lg my-5'>{data.para}</p>
                <a href='' className='text-[#FBD784] flex items-center gap-3'>read more <MdArrowRightAlt size={30} /></a>
            </div>
            <div className='md:w-[40%] w-[100%]'>
                <img src={data.src} className='w-full md:h-auto h-52 place-items-center object-cover mx-auto md:m-0' />
            </div>
        </div>

        // </div>
    )
}

export default Card