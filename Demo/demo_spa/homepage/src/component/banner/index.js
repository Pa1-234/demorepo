import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { BannerContainer, BannerContenet, BannerDiscription, BannerImage, BannerTitle } from "../../public/styles/banner";
import banner1 from "../../public/Pictures/banner/banner1.jpg";
function Banner( {books}){
    const theme = useTheme();

    return (
        <>
        <BannerContainer>
            <BannerImage src={ banner1 } />
            <BannerContenet>
                <Typography variant="h6">Huge Collection</Typography >
                <BannerTitle variant="h2">New Product</BannerTitle>
                <BannerDiscription variant="subtitle">
                If you sell on an online marketplace make sure to theme you banners according to the season or your product. Use witty statements to entice people to click on the banner.

For example, if you are introducing new LG air conditioners you can include in your banners something like – “Want to beat the heat? Here are 10 cool ways from LG”
                </BannerDiscription>
            </BannerContenet>
        </BannerContainer>
        </>
    )
}
export default Banner

