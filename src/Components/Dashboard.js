import React from "react";
import Header from "./Header";
import Overview from "./Overview";
import Users from "./Users";


const Dashboard = () => {

    const UsersInfo = [
        { icon: 'icon-facebook.svf', username: '@nathanf', followers: 1987, change: 12, isIncrease: true, borderColor: 'facebook' },
        { icon: 'icon-twitter.svg', username: '@nathanf', followers: 1044, change: 99, isIncrease: true, borderColor: 'twitter' },
        { icon: 'icon-instagram.svg', username: '@realnathanf', followers: 11, change: 1099, isIncrease: true, borderColor: 'insta' },
        { icon: 'icon-youtube.svg', username: 'Nathan F', followers: 8239, change: 144, isIncrease: false, borderColor: 'youtube' },
      ];
    return (
        <div className=" mx-8 my-10"> 
        {UsersInfo.map((user, index) =>
            <Users
                key={index}
                icon={card.icon}
                username={card.username}
                followers={card.followers}
                change={card.change}
                isIncrease={card.isIncrease}
                borderColor={card.borderColor}
            />
        )}
        <Header />
        
        <Overview />

        

        </div>

    )
};

export default Dashboard