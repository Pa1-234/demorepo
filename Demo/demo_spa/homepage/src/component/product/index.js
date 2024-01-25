import { useTheme } from "@mui/material/styles"
import { Container, Grid, useMediaQuery } from "@mui/material"
import { getAllProduct } from "../api-helper/frontend/util";
import { useState , useEffect } from "react";
import SingleProducts from "./SingleProduct";
import SingleProductsDesktop from "./SingleProductDesktop";

function Products(){
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const data = await getAllProduct();
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error);
          setLoading(false);
        }
      }
  
      fetchData();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const renderproducts  =  data.map((product ,index)=> (
      
        <Grid item key={product.productId} xs={2} sm={4} md={4} display="flex" flexDirection={'column'} alignItems="center" >
              {matches ? (
              <SingleProducts product={ product } matches={ matches }/>
              ) : (
                <SingleProductsDesktop product={ product } matches={ matches }/> 
              )}
              
        </Grid>
    ));
    
    return(
        <Container>
            <Grid columns= {{ xs:4 , sm:8, md: 12 }} container spacing={{ xs:2 , md:3 }}justifyContent={"center"} sx={{ margin: '20px 4px 10px 4px'}}>
                {renderproducts}
            </Grid>
        </Container>
    );
  }

export default Products;
