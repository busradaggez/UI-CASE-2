'use client';
import React, { useEffect, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";

const Team = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();
        setUsers(data.users);
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div className="p-8 mb-64 responsive">

            <div className="text-center mb-12">
                <h2 className="text-3xl font-semibold text-mycolor4 mb-4">OUR REATIVE TEAM</h2>
                <p className="text-mycolor3 text-lg max-w-2xl mx-auto leading-relaxed mb-24">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus tempor, ac nunc libero urna, feugiat.
                </p>
            </div>
            <div className="flex justify-center flex-wrap gap-8">
                {users.slice(0, 3).map((user: any) => (
                    <div
                        key={user.id}
                        className="p-6 border rounded-xl shadow-md text-center transition w-[370px] h-[580px]"
                    >
                        <div className="w-[198px] h-[198px] mx-auto mb-4 mt-2 rounded-full overflow-hidden border-4 border-mycolor2">
                            <img
                                src={user.image}
                                alt={`${user.firstName} ${user.lastName}`}
                                className="w-full h-full object-cover border p-6"
                            />
                        </div>
                        <h2 className="text-[31.25px] font-bold mt-24 uppercase text-mycolor4">{user.firstName} {user.lastName}</h2>
                        <p className="text-[20px] text-mycolor3  uppercase font-semibold">{user.company.title}</p>
                        <p className=" text-mycolor3 text-[16px] mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.</p>
                        <div className="flex justify-center items-center gap-8 mt-8">
                            <a href='https://www.facebook.com/'><FaFacebookF className=" text-mycolor1 text-xl" /></a>
                            <div>|</div>
                            <a href='https://www.instagram.com/'><AiFillInstagram className="text-xl" /></a>
                            <div>|</div>
                            <a href='https://x.com/'><FaTwitter className="text-xl" /></a>
                            <div>|</div>
                            <a href='https://www.youtube.com/'><AiFillYoutube className="text-xl" /></a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
