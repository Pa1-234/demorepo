import { useEffect, useState } from "react";
import { getProductById } from "./src/api-helper/frontend/util";

import { useRouter } from "next/router";
import ProductDetails from "./src/component/product/ProductDetail";
function ProductDetailPage(){
    const [product,setProduct] = useState();
    const router = useRouter();
    const id = router.query.productId;
    useEffect(() =>{
        getProductById(id)
        .then((data) => setProduct(data.data.product))
        .catch((err) =>console.log(err));
    },[router.query.productId]);
    return (
        <div>
        { product ? (<section className="core">
          <ProductDetails data={product}/>
        </section>): (<p>Looding...</p>)}
        </div>
    
    )

}

export default ProductDetailPage;
