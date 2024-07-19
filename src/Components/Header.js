import React from "react";

const Header = () => {
    return (
        <header>
            <h2 className=" text-left text-3xl font-bold text-veryDarkblueText mb-1">Social Media Dashboard</h2>
            <p className=" text-left text-xl font-bold text-darkGbText border-b
             border-darkGbText pb-6">  Total Followers: 23,004</p>

             <div className=" flex flex-row">
                <h4 className=" mr-auto ">Dark Mode</h4>
                <div className=" flex flex-row bg-lightToggle w-16 h-8 rounded-full items-center ">
                <div className=" bg-white w-6 h-6 ml-1 rounded-full"></div>

            </div>


             </div>



        </header>
    )
};

export default Header