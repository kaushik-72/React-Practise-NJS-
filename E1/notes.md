
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

not usefull fact but Error: Each child in a list should have a unique "key" prop.  (while using cdn but it's dpricated)





