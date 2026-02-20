import { IMG_URL } from "../utils/constant";
const RestaurantCard = (props) =>{ 
    const {resData} = props;   

    const{name,avgRating,cuisines,areaName}=resData?.info;
return(
    <div className='res-card' style={{backgroundColor: "#a0c1b9",}}>
        <img 
        className='res-logo' 
        alt="Food IMG" 
        src={
            IMG_URL+resData.info.cloudinaryImageId
            }

            />
        <h3>{name}</h3>
        <h5>{avgRating}</h5>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
    </div>
);
};

export default RestaurantCard;