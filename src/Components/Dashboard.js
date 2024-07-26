import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Header from "./Header";
import Overview from "./Overview";
import Users from "./Users";


const Dashboard = () => {

    const [darkMode, setDarkmode] = useState(false)

    useEffect ( () => {
        const theme = localStorage.getItem('theme');
        if (theme==='dark') {
            setDarkmode(true);
            document.documentElement.classList.add('dark');
        }
        else {
            setDarkmode(false);
            document.documentElement.classList.remove('dark')
        }

    }, []); 

    const toggleTheme = () =>{
        if(darkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light')
        }
        else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        setDarkmode(!darkMode);
    }

    const borderColorClasses = {
        facebook: 'border-facebook',
        twitter: 'border-twitter',
        instagram: 'border-instagram',
        youTube: 'border-brightRed',
      };

    const UsersInfo = [
        { icon: 'icon-facebook.svg', username: '@nathanf', followers: 1987, iconup: 'icon-up.svg', change: 12, isIncrease: true, borderColor: 'facebook' },
        { icon: 'icon-twitter.svg', username: '@nathanf', followers: 1044, iconup: 'icon-up.svg', change: 99, isIncrease: true, borderColor: 'twitter' },
        { icon: 'icon-instagram.svg', username: '@realnathanf', followers: 11, iconup: 'icon-up.svg', change: 1099, isIncrease: true, borderColor: 'instagram' },
        { icon: 'icon-youtube.svg', username: 'Nathan F', followers: 8239, icondown: 'icon-down.svg', change: 144, isIncrease: false, borderColor: 'youTube' },
      ];

      

      const overviewInfo = [
        { statText: 'Page Views', statValue: 87, icon: 'icon-facebook.svg', iconup: 'icon-up.svg', change: 3, isIncrease: true, },
        { statText: 'Likes', statValue: 52, icon: 'icon-facebook.svg', icondown: 'icon-down.svg', change: 2, isIncrease: false, },
        { statText: 'Likes', statValue: 5462, icon: 'icon-instagram.svg', iconup: 'icon-up.svg', change: 2257, isIncrease: true, },
        { statText: 'Profile Views', statValue: 52, icon: 'icon-instagram.svg', iconup: 'icon-up.svg', change: 1375, isIncrease: true, },
        { statText: 'Retweets', statValue: 117, icon: 'icon-twitter.svg', iconup: 'icon-up.svg', change: 303, isIncrease: true, },
        { statText: 'Likes', statValue: 507, icon: 'icon-twitter.svg', iconup: 'icon-up.svg', change: 553, isIncrease: true, },
        { statText: 'Likes', statValue: 107, icon: 'icon-youtube.svg', icondown: 'icon-down.svg', change: 19, isIncrease: false, },
        { statText: 'Total Likes', statValue: 1407, icon: 'icon-youtube.svg', icondown: 'icon-down.svg', change: 12, isIncrease: false, },
      ];
    
    return (
        <div className={ ` bg-whiteBg dark:bg-veryDbBg p-12`}> 
       
            <Header toggleTheme={toggleTheme} darkMode={darkMode}/>

            <div className=" flex flex-col md:flex-row md:gap-14">
                {UsersInfo.map((user, index) =>
                    <Users
                        
                        key={index}
                        icon={user.icon}
                        username={user.username}
                        followers={user.followers}
                        change={user.change}
                        isIncrease={user.isIncrease}
                        borderClass={borderColorClasses[user.borderColor]}
                        iconup={user.iconup}
                        icondown={user.icondown}
                    />
                )}
            </div>    

                <h1 className={`text-DesBlueText font-bold mb-6  text-3xl`}>Overview - today</h1>


            <div className=" flex flex-col md:flex-row md:flex-wrap md:gap-14">
                {overviewInfo.map((overview, index) =>
                <Overview 

                key={index}
                statText={overview.statText}
                statValue={overview.statValue}
                icon={overview.icon}
                iconup={overview.iconup}
                icondown={overview.icondown}
                change={overview.change}
                isIncrease={overview.isIncrease}
                
                />
                
            )}
            </div>
        </div>

    )
};

export default Dashboard