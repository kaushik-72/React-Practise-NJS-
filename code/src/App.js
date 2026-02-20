import React from 'react';
import ReactDOM from "react-dom/client";
import Header from './components/Header';
import Body from './components/Body';



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
