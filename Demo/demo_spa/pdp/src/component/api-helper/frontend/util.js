import axios from "axios";
import sharedConfig from '../../config/config';
const backendendpoint = sharedConfig.REACT_APP_API_URL;

export const getProductById = async (id) => {
  const header = {
    "Content-Type": "application/json",
  };
  try {
    const res = await axios.post(
      `${backendendpoint}/product/findByProductId`,
      {
        productId: id,
      },
      {
        headers: header,
      }
    );
    const resdata = res.data;
    return resdata;
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

export const addItemToCart = async (productId, quantity) => {
  const header = {
    "Content-Type": "application/json",
  };
  const res = await axios({
    url: `${backendendpoint}/graphql`,
    method: "post",
    headers: header,
    data: {
      query: `mutation{
        addToCart(cartInput: {
            userId:3
            items:[
            {
              productId:"${productId}"
              quantity:${quantity}
            }
          ]
         }
        ){
          cartId
        }
      }
      `,
    },
  });
  const resdata = await res.data;
  return resdata.data.addToCart;
};