import React from 'react'

const Footer = () => {
    return (
        <footer className='grid grid-cols-3 md:w-[60%] mx-auto pb-20'>
            <div>
                <h1 className='text-3xl mb-6'>MNTN</h1>
                <p>Get out there & discover your next slope, mountain & destination!</p>
            </div>
            <div></div>
            <div>
                <h4 className='text-2xl text-[#FBD784] mb-4'>More on the blog</h4>
                <ul className='flex flex-col gap-2'>
                    <li><a href="/">About MNTN</a></li>
                    <li><a href="/">Contributors and Writers</a></li>
                    <li><a href="/">Wait for Us</a></li>
                    <li><a href="/">Contact Us</a></li>
                    <li><a href="/">Privacy Policy</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer