import React from "react";

const Header = ({toggleTheme, darkMode}) => {
    return (
        <header className=" flex flex-col md:flex-row">
            <div className=" md:mr-auto ">
                <h2 className={ `text-left text-veryDarkblueText dark:text-whiteText text-3xl font-bold mb-1`}>Social Media Dashboard</h2>
                <p className=" text-left text-xl font-bold text-darkGbText border-b
                border-darkGbText pb-6 md:border-none md:mb-0">  Total Followers: 23,004</p>
            </div>
            
               
            <div  className=" flex flex-row mb-16 md:mb-0 mt-6 justify-end items-end
                md:justify-center md:items-start md:mt-2 md:mr-6">
                <h4 className=" text-DesBlueText font-bold mr-auto md:mr-4 md:mt-1 ">Dark Mode</h4>
                
                    <div onClick={toggleTheme}  className=" flex flex-col justify-center
                     bg-lightToggle w-16 h-8 rounded-full hover:bg-limeGreen dark:hover:dark-toggle">
                        <div  className={` bg-white dark:bg-darkGbText pt-2 w-6 h-6 ml-1 rounded-full transition-transform duration-300 ease-in-out
                              darkMode ? 'translate-x-0 ml-1' : ' translate-x-full'} `}>

                        </div>
                    </div>        
            </div>

            



        </header>
    )
};

export default Header