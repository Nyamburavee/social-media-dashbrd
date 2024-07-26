import React from "react";

const Users = ({ icon, username, followers, iconup, icondown, change, isIncrease, borderClass }) => {


    return (
        <section className=" flex flex-col "> 
            <div className= {` w-full lg:w-[300px]  flex flex-col justify-center items-center bg-lightGrayishblueCardBg dark:bg-darkDesaturatedBlueCardbg
                 rounded-lg mb-8  p-8 border-t-4 ${borderClass}  hover:brightness-75 dark:hover:brightness-150 cursor-pointer`} >
                <div className=" flex flex-row justify-center items-center gap-2">
                    <img src={icon} alt="facebook-icon" />
                    <p className=" font-bold text-darkGbText">{username}</p>
        
                </div>
                <h1 className={`text-6xl font-bold text-veryDbBg dark:text-whiteText mt-6`}>{followers}</h1>
                <p className=" text-DesBlueText mb-2">FOLLOWERS</p>
                < div className=" flex flex-row justify-center items-center mt-8">
                    <img className=" w-2 h-2 mr-1" src={isIncrease ? iconup : icondown} alt="icon-up"/>
                    <p className= {` text-limeGreen font-bold dark:text-whiteText`}>{change} today</p>

                </div>
            </div>


        </section>


        
    )
};

export default Users