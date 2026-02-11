import React from 'react';
import ReactDOM from "react-dom/client";


/**
 * Header
 * --Logo
 * --New Items
 * 
 * Body
 * --search
 * --Restaurant Container
 *      Restaurant Card
 *          -Images
 *          -Name of Restaurant/ Rating/ Location/ Delivery Time
 * 
 * Footer
 * --Copyright
 * --Links
 * --Adddress
 * --Contact
 */

// Header
const Header = () =>{
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/aad4d0110142211.5fe4b63868daa.jpg'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resName,rating,foodType,address}) =>{    
return(
    <div className='res-card' style={{backgroundColor: "#a0c1b9",}}>
        <img className='res-logo' alt="Wraps Kathi Rolls IMG" src='https://manjulaskitchen.com/wp-content/uploads/vegetable_kathi_roll.jpg'/>
        <h3>{resName}</h3>
        <h5>{rating}</h5>
        <h5>{foodType}</h5>
        <h5>{address}</h5>
    </div>
);
};

//Body
const Body = () =>{
    return(
        <div className='body'>
            <div className='search-bar'>Search</div>
            <div className='res-Container'>
                <RestaurantCard resName="Wraps Kathi Rolls" rating="4.1 • 30-35 mins" foodType="Rolls & Wraps, Fast Food" address="Noida Sector 62" />
                <RestaurantCard resName="Burger Culture" rating="4.6 • 25-30 mins" foodType="American, Snacks, Desserts, Beverages" address="Noida Sector 62" />
                <RestaurantCard resName="Burger King" rating="4.4 • 45-50 mins" foodType="Burgers, American" address="Noida Sector 62" />
                <RestaurantCard resName="Rolls Mania - Rolls, Wraps & More" rating="4 • 35-40 mins" foodType="Rolls & Wraps, Fast Food, Snacks, Beverages" address="Noida Sector 62" />            </div>
        </div>
    )
}

// Restaurant Container


const styleCard = {
backgroundColor: "#a0c1b9",
};

const AppLayout = () =>{
    return(
        <div className='app'> 
        {/* Header Body Footer */}
        <Header/>
        <Body/>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
