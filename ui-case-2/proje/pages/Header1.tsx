import React from 'react'
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

/*bg-[rgba(0,0,0,0)]*/
const Header1Page = () => {
    return (
        <div className='responsive'>
            <div className='border-[16px] border-mycolor1'></div>
            <div className='bg-[rgba(0,0,0,0)] flex items-center justify-between w-full   text-white mb-6' >

                <div className="flex items-center space-x-20 ml-24 ">
                    <div className="flex items-center space-x-6">
                        <IoMdMail className="text-xl " />
                        <span>Info@youremail.com</span>
                    </div>

                    <div className="flex items-center space-x-6">
                        <FaPhoneAlt className="text-xl" />
                        <span>(480) 555-0103</span>
                    </div>
                </div>

                <div className='flex items-center space-x-6 mr-24'>
                    <a href='https://www.facebook.com/'><FaFacebookF /></a>
                    <a href='https://www.instagram.com/#'><AiFillInstagram /></a>
                    <a href='https://x.com/'><FaTwitter /></a>
                    <a href='https://www.youtube.com/'><AiFillYoutube /></a>
                </div>

            </div>
        </div>
    )
}

export default Header1Page