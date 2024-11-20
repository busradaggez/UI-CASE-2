import React from 'react'
import { IoCheckmarkCircle } from "react-icons/io5";


const AboutPage = () => {
    return (
        <div className=' ml-[161px] mr-[161px] mt-20 bg-white relative justify-center items-center mb-32 responsive' >

            <div className="text-center mt-16">

                <h2 className="text-3xl font-semibold text-mycolor4 mb-8">ABOUT OUR APP</h2>
                <p className="text-mycolor3 text-lg max-w-2xl mx-auto leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>

            </div>

            <div className="mt-24 flex justify-between space-x-4">

                <img src="/phone2.png" alt="Phone2" className="w-auto h-auto mb-20 mt-16" />

                <div>
                    <div className="mt-16 border border-white shadow-lg w-[570px] h-[160px] p-4 rounded-lg text-mycolor4 text-lg">

                        <div className=" mt-4 flex items-center mb-2">
                            <IoCheckmarkCircle className="text-2xl mr-4 text-mycolor1 " />
                            <div className="font-semibold">CREATIVE DESIGN</div>
                        </div>

                        <div className="text-mycolor3 ml-10 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>

                    </div>

                    <div className="mt-12 border border-white shadow-lg w-[570px] h-[160px] p-4 rounded-lg text-mycolor4 text-lg">
                        <div className=" mt-4 flex items-center mb-2">
                            <IoCheckmarkCircle className="text-2xl mr-4 text-mycolor1 " />
                            <div className="font-semibold">EASY TO USE</div>
                        </div>

                        <div className="text-mycolor3 ml-10 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>
                    </div>

                    <div className="mt-12 border border-white shadow-lg w-[570px] h-[160px] p-4 rounded-lg text-mycolor4 text-lg">

                        <div className=" mt-4 flex items-center mb-2">
                            <IoCheckmarkCircle className="text-2xl mr-4 text-mycolor1 " />
                            <div className="font-semibold">BEST USER EXPERINCE</div>
                        </div>

                        <div className="text-mycolor3 ml-10 text-sm">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                        </div>

                    </div>

                </div>
            </div>

        </div >
    )
}

export default AboutPage