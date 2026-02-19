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

const RestaurantCard = (props) =>{ 
    const {resData} = props;   

    const{name,avgRating,cuisines,areaName}=resData?.info;
return(
    <div className='res-card' style={{backgroundColor: "#a0c1b9",}}>
        <img 
        className='res-logo' 
        alt="Food IMG" 
        src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId
            }

            />
        <h3>{name}</h3>
        <h5>{avgRating}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
    </div>
);
};

//Body
const Body = () =>{
    return(
        <div className='body'>
            <div className='search-bar'>Search</div>
            <div className='res-Container'>
                {
                    resList.map(restaurant => 
                    <RestaurantCard key={restaurant.info.id}resData={restaurant}/>)
                }
            </div>
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

const resList = [
{
// 0: Burger King
"info": {
"id": "18762",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f03d975c-f83f-4b28-bf56-cc9913b59147_18762.jpg",
"locality": "Shipra Mall",
"areaName": "Indirapuram",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.4,
"parentId": "166",
"avgRatingString": "4.4",
"totalRatingsString": "25K+",
"sla": {
"deliveryTime": 38,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "35-40 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-02-19 23:00:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹59"
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-2c5f3add-b7d4-4776-ad8d-e5dd5782070f"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/burger-king-shipra-mall-indirapuram-rest18762",
"type": "WEBLINK"
}
},

// 1: La Pino'z Pizza
{
"info": {
"id": "854337",
"name": "La Pino'z Pizza",
"cloudinaryImageId": "e0d5fd488228a6a9d5942b9f56c0f4ac",
"locality": "SECTOR-63",
"areaName": "D-SQUARE MALL",
"costForTwo": "₹400 for two",
"cuisines": [
"Pizzas",
"Pastas",
"Italian",
"Desserts",
"Beverages"
],
"avgRating": 4,
"parentId": "4961",
"avgRatingString": "4.0",
"totalRatingsString": "4.0K+",
"sla": {
"deliveryTime": 30,
"lastMileTravel": 3.8,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "3.8 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-02-19 23:59:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "67% OFF",
"subHeader": "UPTO ₹125"
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-2c5f3add-b7d4-4776-ad8d-e5dd5782070f"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/la-pinoz-pizza-sector-63-d-square-mall-rest854337",
"type": "WEBLINK"
}
},

// 2: Faasos - Wraps, Rolls & Shawarma
{
"info": {
"id": "43901",
"name": "Faasos - Wraps, Rolls & Shawarma",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/28/323c1a7a-4955-43c2-b2d0-35b4836d37e6_43901.JPG",
"locality": "Sector 66",
"areaName": "Sector 59 Noida",
"costForTwo": "₹200 for two",
"cuisines": [
"Kebabs",
"Fast Food",
"Snacks",
"American",
"Healthy Food",
"Desserts",
"Beverages"
],
"avgRating": 4.3,
"parentId": "21809",
"avgRatingString": "4.3",
"totalRatingsString": "17K+",
"sla": {
"deliveryTime": 28,
"lastMileTravel": 2,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "2.0 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2026-02-19 23:59:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Rolls.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Rolls.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "ITEMS",
"subHeader": "AT ₹79"
},
"loyaltyDiscoverPresentationInfo": {
"logoCtx": {
"text": "BENEFITS",
"logo": "v1634558776/swiggy_one/OneLogo_3x.png"
},
"freedelMessage": "FREE DELIVERY"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {},
"externalRatings": {
"aggregatedRating": {
"rating": "--"
}
},
"ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
},
"analytics": {
"context": "seo-data-2c5f3add-b7d4-4776-ad8d-e5dd5782070f"
},
"cta": {
"link": "https://www.swiggy.com/city/noida-1/faasos-wraps-rolls-and-shawarma-sector-66-sector-59-noida-rest43901",
"type": "WEBLINK"
}
}
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);
