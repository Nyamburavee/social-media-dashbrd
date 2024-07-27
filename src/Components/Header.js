import React from "react";

const Header = ({toggleTheme, darkMode}) => {
    return (
        <header className="  flex flex-col md:flex-row">
            <div className=" md:mr-auto ">
                <h2 className={ `text-left text-veryDarkblueText dark:text-whiteText text-3xl font-bold mb-1`}>Social Media Dashboard</h2>
                <p className=" text-left text-xl font-bold text-darkGbText border-b
                border-darkGbText pb-6 md:border-none md:mb-0">  Total Followers: 23,004</p>
            </div>
            
            <div className=" flex flex-row mb-16 md:mb-0 mt-6 justify-end items-end
                    md:justify-center md:items-start md:mt-2 md:mr-6">
                    <h5 className=" text-DesBlueText font-bold mr-auto md:mr-4 md:mt-2">Dark Mode</h5>
                    <div className=" bg-lightToggle  hover:bg-limeGreen dark:hover:dark-toggle 
                         w-20 rounded-full p-1 hover:brightness-150 cursor-pointer">
                        <div onClick={toggleTheme} className={` bg-white dark:bg-darkGbText w-8  h-8 rounded-full 
                            ${
                                darkMode ? 'transform translate-x-0' : 'transform translate-x-full'
                            }`}>

                        </div>
                    </div>
            </div>
               
            

            



        </header>
    )
};

export default Header