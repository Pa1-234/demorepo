import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../public/styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import { useState } from "react";

export default function SingleProductsDesktop({ product, matches }){
    const [showOption, setShowOption] = useState(false);
    const handleMouseEnter = ()=>{
        setShowOption(true)
    }
    const handleMouseLeave = ()=>{
        setShowOption(false)
    }
    return(
        <>
        <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href={`/product/${product.productId}`}><ProductImage src={ product.productImage} /></a>
            <ProductFavButton isFav={1}>
                <FavoriteIcon/>
            </ProductFavButton>
            {showOption && <ProductAddToCart show={showOption} variant="contained">Add To cart</ProductAddToCart>}
                
                <ProductActionWrapper show={showOption}>
                    <Stack direction="column">
                        <ProductFavButton isFav={1}>
                            <FavoriteIcon/>
                        </ProductFavButton>
                        <ProductActionButton>
                            <ShareIcon color="primary" />
                        </ProductActionButton>
                        <ProductActionButton>
                            <FitScreenIcon color="primary" />
                        </ProductActionButton>
                        
                    </Stack>
                </ProductActionWrapper>
                
        </Product>
        <ProductMeta product={product} matches={ matches}/>
        </>
    )
}