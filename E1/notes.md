i
In js we use document.createElement in "React" we use create.Element()

createElement take 3 arguments
i> name of tag
ii> obj {} => this where attributes are given
iii> whatever we need to put inside the "i> tag"

React Element is an object => HTML (Browser understands)

React.createElement("tag<h1><div>" ,  {attributes} ,  child or the data )

if you want to use multiple child , have to declre it in an array []

----------E2-----------

dev dependicies : depend. used in dev mode
dpendencies: depend. used in production mode.

package.lock.json: keeps the log of all the version of the packages installed

npx parcel index.html // parcel hosts the file to the local server

cdn links for react is not the prefered way of importing react to our project

npm i react or npm install react/dom adds the react module to our project

npm init -y : adds all the remainig (metadata + instructions) that tell npm and other tools how your project behaves

*** scripts are only run with npm never npx

not usefull fact but Error: Each child in a list should have a unique "key" prop.  (while using cdn but it's depricated)

why it is not a good way to host our project like go live why we run it in local server ?

why react-cdn links are not used?
fetching from the cdn is costly experience

for running vite we write npm run dev using the changes made in scripts obj inside package.json what would be the default like for npx.

why do we not track dist file in our github ?

use of build ? npm run build .

how to write img tag inside jsx / various attributes.


react component 
i> class based component (old)
ii> functional component (new) -> majorly used.

we can do either npm run dev or npm dev , both are acceptable
but we can't do npm build we have to do npm run build.

inside react transpiling is done by Parcel

functional component is a normal js fucntion which returns some jsx elements.

or

 function returnig a jsx element is called funtional comoponent.

 when using img tag use it like <img src="" className"" alt=""/>
 not <img></img>



<div className='res-card' style={{backgroundColor: "#a0c1b9",}}></div>

<RestaurantCard resName="Wraps Kathi Rolls" foodType="Rolls & Wraps, Fast Food"/>

passing props to the component


we can use inline css inside jsx also / condn has to be declared like above

# Destructuring in React (Revision Notes)

## 1️⃣ What is Destructuring?

Destructuring is a JavaScript feature that allows you to extract values from objects or arrays and assign them to variables.

In React, we mainly use destructuring with **props**.



--------------------------------------------------

## 2️⃣ Without Destructuring

```jsx
const RestaurantCard = (props) => {
  return (
    <div className="res-card">
      <h3>{props.resName}</h3>
      <h4>{props.rating}</h4>
      <p>{props.foodType}</p>
      <p>{props.address}</p>
    </div>
  );
};




