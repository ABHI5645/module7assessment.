import React,{useEffect,useState} from "react";
import "./Product.css"
import ProductCard from "./ProductCard";


 function Product(){
   const [list1,setList]=useState([]);
   useEffect(()=>{
    fetch("https://acciojob-module-7-sept-2022-default-rtdb.asia-southeast1.firebasedatabase.app/products.json").then((res)=>res.json()).then((data)=>{
        const arr =Object.values(data);
        
        setList(arr);

    })
   },[])
  
   
   
    return(
        
        
        
        <div className="product-container">
            <div className="product-header">
                Products
            </div>
            <div className="product-list">
                {
                    list1.map((items)=>
                        <ProductCard 

                        key={items.id}
                        title={items.productName}
                        price={items.newPrice}
                        priceOld={items.oldPrice}
                        image={items.productImage}/>
 )
                }
            </div>
        </div>
    )
}
export default Product;