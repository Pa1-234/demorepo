import { useEffect, useState } from "react";
import { getProductById } from "../src/component/api-helper/frontend/util.js";
import ProductDetails from "./component/product/ProductDetail.js"
export default function Root(props) {
  const productId = props.productId; // Access productId as a prop
  const [product,setProduct] = useState();
    useEffect(() =>{
      getProductById(productId)
        .then((data) => setProduct(data))
        .catch((err) =>console.log(err));
    },[productId]);
    
    return (
        <div>
        { product ? (<section className="core">
          <ProductDetails data={product}/>
        </section>): (<p>Looding...</p>)}
        </div>
    
    )
}