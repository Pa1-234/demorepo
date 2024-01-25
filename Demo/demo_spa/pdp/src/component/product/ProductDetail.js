import { Box, Button, Card, CardMedia, Divider, Grid, List, ListItem, Paper, Skeleton, TableRow, Tooltip, Typography, useTheme } from "@mui/material";
import React, { Fragment, useEffect, useState } from "react";
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AddIcon  from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { addItemToCart } from "../api-helper/frontend/util";

const ProductDetails = ({ data  }) =>{
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };
  const handleAddItemToCart = () => {
    const productId = data.productId;
    const quantity = count;
    /*const items = [
      {
        productId: productId,
        quantity : quantity,
      }
    ];*/
    //console.log(items);
    addItemToCart(productId,quantity).then((value) =>{
      console.log(value);
      if(value.cartId){
          window.location = '/cart';
      }else{
        alert("Error adding to cart");
      }
    })
    .then(() => console.log("success"))
    .catch((err) =>console.log(err));
  };

    return(
      <>
      <Grid
        container
        mt={5}
        className='animate__animated animate__fadeIn'
        spacing={3}
      >
        <Grid
          item
          sm={6}
          md={4}
          className='animate__animated animate__fadeInLeft'
        >
          <Card raised>
            <CardMedia component='img' image={data.productImage} alt={data.productName} />
          </Card>
          <Box
            display='flex'
            justifyContent='space-between'
            mt={1}
            alignContent='center'
          >
            
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={8}>
          <Typography component='h3' textAlign='center' gutterBottom>
            {data.productName}
          </Typography>
          <Divider />
          
          <Paper elevation={8} sx={{ my: 3 }}>
            <List>
              <Fragment>
                <ListItem>
                  <Typography variant='caption' component='p'>
                      <strong>{data.productName}</strong>
                  </Typography>
                </ListItem>
                <Divider variant={'middle'} />
              </Fragment>
            </List>
          </Paper>
          <Typography component='h5' variant='h6' textAlign='center'>
          Best Buy &#8377;{data.listPrice}
            </Typography>
            <Typography component='h5' style={{textDecoration: 'line-through'}} variant='h6' textAlign='center'>
          &#8377;{data.listPrice}
            </Typography>
          <Divider sx={{ mb: 2 }} />
          <div className="main_div">
             <div className="center_div">
             <Typography textAlign='center'>Quantity</Typography>
                <Typography textAlign='center'>{count}</Typography>
                  <div className="btn_div" style={{display:'flex', justifyContent:'center'}}>
                    <Tooltip title="Increment">
                      <Button onClick={IncNum}>
                        <AddIcon />
                      </Button>
                    </Tooltip>
                    <Tooltip title="Decrement">
                      <Button onClick={DecNum}>
                        <RemoveIcon />
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
          <Box display='flex' justifyContent={'center'} my>
              <Button
                variant='contained'
                color='error'
                startIcon={<AssignmentTurnedInIcon />}
                onClick={handleAddItemToCart}
              >
                Add To Cart
              </Button>
          </Box>
        </Grid>
      </Grid>
    </>
    );
}

export default ProductDetails;