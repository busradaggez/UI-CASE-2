import React from 'react'

const SliderPage = () => {
    return (
        <div className="relative mt-20 flex justify-between items-center min-h-screen responsive">

            <div className=" absolute z-10 left-[185px] p-8 w-[570px] h-[535px] border-[18px] border-mycolor2 opacity-30"></div>

            <div className="relative z-10 left-[135px] p-8 bg-white bg-opacity-90 border-2 border-gray-200 w-[570px] h-[432px]">
                <h2 className="text-5xl font-bold text-mycolor1 mb-4">A GREAT APP MAKES YOUR LIFE BETTER</h2>
                <p className="text-mycolor3 mt-12 mb-6">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
                <h2 className="text-black text-2xl mt-16 mb-2">DOWNLOAD APP NOW</h2>

                <div className="flex space-x-4">
                    <img src="/google-appstore.png" alt="Google Play App Store" className="w-auto" />
                </div>

            </div>

            <div className="flex justify-end ">
                <img src="/phone1.png" alt="Phone1" className="w-auto h-auto mb-20" />
            </div>

        </div>

    )
}

export default SliderPage


