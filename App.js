import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = (
    <div> 
    <h1>Hello World</h1>
    </div>

);

const Layout = () => {

    const price1 = 2000;
    const price2 = 3000;
    const calculateprice = () =>{
        return price1 + price2;
    }

    return(
        <div>
           
            <h1>This is my product price:{calculateprice()}</h1>
        </div>
    )
}
// console.log(heading);

    

// const heading = React.createElement("h1", {id:"heading"},"Hello world");
// console.log(heading);
// const heading2 = <h1>Hello world JSX!!</h1>
// console.log(heading2);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<Layout/>);