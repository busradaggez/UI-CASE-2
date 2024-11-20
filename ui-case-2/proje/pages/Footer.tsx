import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { FaRegCopyright } from "react-icons/fa6";

const FooterPage = () => {
    return (
        <div className="relative ">
            <div className="absolute -top-28 w-full flex justify-center responsive">
                <div
                    className="bg-white w-[1170px] h-[230px] rounded-3xl px-16 py-4 flex justify-between items-center shadow-custom"
                    style={{
                        boxShadow:
                            "0 20px 80px rgba(0, 0, 0, 0.1), 0 -20px 80px rgba(0, 0, 0, 0.1)",
                    }}
                >
                    <div className="flex items-center ">
                        <div className="flex items-center gap-2">
                            <div className="bg-mycolor1 text-white p-2 rounded-full w-[100px] h-[100px] flex justify-center items-center">
                                <IoMdMail className="text-3xl" />
                            </div>
                            <div className="text-mycolor4 text-2xl ml-4">info@youremail.com</div>
                        </div>

                        <div className="w-[4px] h-[117px] bg-mycolor3 ml-[170px] border-[1px]"></div>

                        <div className="flex items-center">
                            <div className="bg-mycolor1 text-white p-2 rounded-full w-[100px] h-[100px] flex justify-center items-center ml-16 ">
                                <FaPhoneAlt className="text-2xl" />
                            </div>
                            <div className="text-mycolor4 text-2xl ml-4">+880 321 655 9985</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-mycolor5 x-auto h-[542px] text-white flex flex-col mt-10">
                <div className="flex justify-start flex-grow">
                    <div className="mt-48 lg:ml-48 xl:ml-96">
                        <h1 className="font-semibold text-[31.25px]">LOGO</h1>
                        <p className="mt-4 max-w-xs mx-auto">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                        </p>

                        <div className="flex items-center gap-4 mt-4">
                            <a href='https://www.facebook.com/'><FaFacebookF className="text-mycolor2 text-xl" /></a>
                            <div>|</div>
                            <a href='https://www.instagram.com/'><AiFillInstagram className="text-xl" /></a>
                            <div>|</div>
                            <a href='https://x.com/'><FaTwitter className="text-xl" /></a>
                            <div>|</div>
                            <a href='https://www.youtube.com/'><AiFillYoutube className="text-xl" /></a>
                        </div>
                    </div>

                    <div className="mt-48 lg:ml-24 xl:ml-24">
                        <h1 className="font-semibold text-[31.25px]">QUICK LINK</h1>
                        <p className="mb-1.5 mt-4">About</p>
                        <p className="mb-1.5">Features</p>
                        <p className="mb-1.5">Screenshot</p>
                        <p>Blog</p>
                    </div>

                    <div className="mt-48 lg:ml-64 xl:ml-64">
                        <h1 className="font-semibold text-[31.25px]">NEWS LETTER</h1>
                        <p className="mb-1.5 mt-4 max-w-xs mx-auto">
                            Subscribe our newsletter to get our latest update & news
                        </p>

                        <div className="relative mt-8 w-full max-w-sm">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-2 rounded-md text-mycolor3 focus:outline-none"
                            />
                            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-mycolor1 text-white px-3 py-2 rounded-md hover:bg-mycolor2 flex items-center">
                                <IoMdSend />
                            </button>
                        </div>
                    </div>
                </div >
                <div className=" lg:ml-48 xl:ml-96 w-[1167px] border-t border-white mt-8 mb-8 flex justify-center items-center gap-2">
                    <FaRegCopyright className="text-white text-md mt-4" />
                    <span className="text-white mt-4 ml-8 text-md">Copyright 2021 .Ojjomedia. All Right Reserved.</span>
                </div>
            </div >
        </div >
    );
};

export default FooterPage;
