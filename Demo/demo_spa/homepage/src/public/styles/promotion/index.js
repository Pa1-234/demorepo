import { Colors } from "../theme";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const PromotionContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px 0px 20px 0px',
    overflow: 'hidden',
    background : Colors.secondary,
    [theme.breakpoints.down('md')]:{
        padding: '40px 0px 40px 0px',
    }
}));

export const MessageText = styled(Typography)(({theme}) => ({
   fontFamily: '"Montez", "cursive"',
   [theme.breakpoints.down('md')]:{
        fontSize: '3rem'
    },
    color: Colors.white,
    fontSize: '1.5rem',

}));