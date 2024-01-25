import Promotions from "./component/promotions";
import Banner from "./component/banner";
import Products from "./component/product";
import { Box, Typography } from "@mui/material";
export default function Root(props) {
  return (
    <>
      <Banner/>
        <Promotions/>
        <Box display={"flex"} justifyContent={"center"} sx={{ p:4 }}>
            <Typography variant="h4">Our Products</Typography>
        </Box>
        <Products/>
    </>
  )
}
