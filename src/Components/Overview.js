import React from "react";


const Overview = ({key, statText, statValue, icon, iconup, icondown, change, isIncrease}) => {
    return (
            <article className={`  flex flex-row md:w-[220px] p-6  bg-lightGrayishblueCardBg
                 dark:bg-darkDesaturatedBlueCardbg mb-6 hover:brightness-75 dark:hover:brightness-150 cursor-pointer`} >
                <div className={`  mr-auto `}>
                    <h3 className={` text-darkGbText font-bold mb-10`}>{statText}</h3>
                    <p className={`text-4xl text-veryDbBg font-bold dark:text-whiteText`}>{statValue}</p>
                </div>
                <div>
                    <img src={icon} alt="icon" />
                    <div className={`flex flex-row items-center mt-14 `}>
                        <img className=" w-2 h-2 mr-1" src={isIncrease ? iconup : icondown} alt="change-icon" />
                        <p className={`font-bold ${isIncrease ? 'text-limeGreen' : 'text-brightRed'} `}>{change}%</p>
                    </div>

                </div>
            </article>

        
    )
};

export default Overview