// use axios for api call
import axios from "axios";
import { GETDATA } from "./actionTypes";

async function getProductsData(dispatch) {

        let r = await fetch("https://movie-fake-server.herokuapp.com/products")
        let d = await r.json()
        console.log(d)
        dispatch({
            type : GETDATA , 
            payload : d
        })  
    
}

const sortProducts = () => {
    
};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
