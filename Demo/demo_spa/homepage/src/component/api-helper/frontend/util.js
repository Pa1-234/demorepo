import axios from "axios";
import sharedConfig from '../../config/config';
const backendendpoint = sharedConfig.REACT_APP_API_URL;

export const getAllProduct = async () => {
  const header = {
    "Content-Type": "application/json",
  };

  try {
    const res = await axios.get(`${backendendpoint}/product/findAll`, {
      headers: header,
    });
    console.log(res);
    return res.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};