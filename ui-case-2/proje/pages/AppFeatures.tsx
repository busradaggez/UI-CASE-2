import React from 'react'
import { MdInsertComment } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { BiSolidVector } from "react-icons/bi";
import { GiWashingMachine } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";

const AppFeaturesPage = () => {
    return (
        <div className=' relative  items-center text-center text-white '>

            <div className='border-[24px] border-mycolor1'></div>

            <div className="text-center mt-16">
                <h2 className="text-[31.25px] font-semibold mb-8 ">APP FEATURES</h2>
                <p className="  max-w-2xl mx-auto ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>

            <div className="flex justify-center mt-16 ">
                <MdInsertComment className="text-white text-[40px]" />
            </div>

            <div className="flex justify-center mt-4 text-[25px] ">
                FULL FREE CHAT
            </div>

            <div className="flex justify-center mt-4  max-w-xs mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>

            <div className='flex justify-center items-center '>

                <div className="flex flex-col">

                    <div className="text-right max-w-xs mx-auto flex flex-col items-end">
                        <div className="flex justify-end w-full">
                            <GiWashingMachine className="text-[40px] mb-2" />
                        </div>
                        <h3 className="text-[25px] font-semibold">UNLIMITER FEATURES</h3>
                        <p className="m mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="text-right max-w-xs mt-72 flex flex-col items-end">
                        <div className="w-full flex justify-end">
                            <BiSolidVector className="text-[40px] mb-2" />
                        </div>

                        <h3 className="text-[25px] font-semibold">FULL FREE CHAT</h3>
                        <p className=" mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                </div>

                <div className="flex justify-center items-center mx-10 ">
                    <div className=" p-4 rounded-lg ml-12">
                        <img src="/app.png" alt="App" className="w-auto h-auto" />
                    </div>
                </div>

                <div className="flex flex-col items-start ">

                    <div className="text-left max-w-xs mx-auto">
                        <div className="flex justify-start w-full">
                            <MdPhoneIphone className="text-[40px] mb-2" />
                        </div>
                        <h3 className="text-[25px] font-semibold">24/7 SUPPORT BY REAL PEOPLE</h3>
                        <p className=" mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>


                    <div className="text-left mt-72 max-w-xs ">
                        <IoEyeOutline className="text-[40px] mb-2" />
                        <h3 className="text-[25px] font-semibold">FULL FREE CHAT</h3>
                        <p className=" mt-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>


                </div>

            </div>
            <div className='-mt-20 -ml-12'>
                <div className="flex justify-center ">
                    <BsPersonCircle className="text-white text-[40px]" />
                </div>

                <div className="flex justify-center mt-4 text-[25px] ">
                    24/7 SUPPORT BY REAL PEOPLE
                </div>

                <div className="flex justify-center mt-4 max-w-xs mx-auto mb-48">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </div>
    )
}

export default AppFeaturesPage