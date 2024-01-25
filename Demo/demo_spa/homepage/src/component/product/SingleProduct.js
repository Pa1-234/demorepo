import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../public/styles/products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"

export default function SingleProducts({ product, matches }){
    return(
        <>
        <Product>
        <a href={`/product/${product.productId}`}><ProductImage src={ product.productImage} /></a>
                <ProductMeta product={product} matches={ matches}/>
                <ProductActionWrapper>
                    <Stack direction="row">
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
        <ProductAddToCart variant="contained">Add To Cart</ProductAddToCart>
        </>
    )
}