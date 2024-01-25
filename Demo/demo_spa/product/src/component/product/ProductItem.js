
import { Alert, Box, Button, Card, CardActions, CardContent, Link, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const ProductItem =({ productId,productName,listPrice,productDescription,salesPrice, productImage,currency }) =>{
    const[open, setOpen] = useState(false);

    return(
        <Fragment>
             <Card sx={{ width: "100%" , height: "100%" , borderRadius:3, boxShadow:"5px 5px 10px #ccc"
            , ":hover":{ boxShadow:"10px 10px 20px #ccc"}
        }}>
            <a href={`/pdp/${productId}`}><Box component='img' src={productImage} sx={{ width: "100%", height:"50%" , borderRadius:3, boxShadow:"5px 5px 10px #ccc"
            , ":hover":{ boxShadow:"10px 10px 20px #ccc"}
            }}> 
           
           </Box></a>
           <CardContent  sx={{ width: "100%" , height: "30%" }}>
                <Typography sx={{ fontWeight:"bold" }} fontSize="22px" width="300px" fontFamily={'Ubuntu'} 
                gutterBottom variant="h6" >
                    { productName }
                </Typography>
                <Typography fontFamily={'Ubuntu'}  variant="body2" width="300px">
                    { productDescription }
                </Typography>
                <Typography variant="h5" sx={{ fontWeight:"bold", color:"#ff6d00"}} fontFamily="monospace">
                Best Buy &#8377;{ salesPrice }
                </Typography>
                <Typography style={{textDecoration: 'line-through'}} variant="subtitle2" sx={{ color:"gray" }} fontFamily="monospace">
                &#8377; { listPrice }
                </Typography>
            </CardContent>
            <CardActions>
                <Link href="#">
                    <Button sx={{ marginRight:"auto"}} endIcon={<ModeEditIcon/>} size="small" color="warning">Add To Cart</Button>
                </Link>
            
            </CardActions>
        
            </Card>
        </Fragment>
        
    )
};

export default ProductItem