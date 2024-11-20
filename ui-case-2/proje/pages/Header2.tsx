import React from 'react'

const Header2Page = () => {
    return (
        <div className='mt-2 responsive'>
            <div className='ml-24 mr-24 bg-white h-14 flex items-center font-semibold text-mycolor4 justify-between rounded-md'>

                <div className='space-x-20 flex'>
                    <a href='#' className='text-mycolor1 ml-12 text underline'>HOME</a>
                    <a href='#' className=''>ABOUT</a>
                    <a href='#'>FEATURES</a>
                </div>

                <div className="bg-white w-[200px] h-[90px] rounded-lg shadow-lg flex items-center justify-center">
                    <img src="/logo.png" alt="Logo" className="w-[167px] h-[28px]" />

                </div>

                <div className='space-x-20'>
                    <a href='#'>SCREENSHOT</a>
                    <a href='#'>BLOG</a>
                    <button className="bg-mycolor1 px-4 py-2 border-8 text-white border-white rounded-xl ">DOWNLOAD</button>
                </div>

            </div>

        </div>
    )
}

export default Header2Page