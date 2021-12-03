import {gql} from "@apollo/client";

export const GET_ALL_PRODUCT = gql`
   query getAllProduct {
    getAllProduct {
        id
        product_code
        Name
        Product_Description
        Category_code
        price
        Status
     }
   }
`;