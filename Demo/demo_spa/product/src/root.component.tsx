import { useEffect, useState } from "react";
import { getAllProduct } from "../src/component/api-helper/frontend/util.js"
import ProductList from "./component/product/ProductList.js";

export default function Root(props){
  const [product,setProduct] = useState();
  useEffect(() =>{
    getAllProduct()
      .then((data) => setProduct(data))
      .catch((err) =>console.log(err));
  },[]);
    return (
        <div>
          { product ? (<section className="core">
          <ProductList data={product}/>
        </section>): (<p>Looding...</p>)}
          
        </div>
    )
    
        
}