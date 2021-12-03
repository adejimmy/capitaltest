import {gql} from "@apollo/client";

export const CREATE_PRODUCT = gql`
    mutation createProduct ( $product_code: string!, $Name: string!, $Product_Description: string!,  $Category_code: string!, $price: string!, $Status: string!) 
    {
        createProduct (product_code: $product_code, Name: $Name, Product_Description: $Product_Description, Category_code: $Category_code, price: $price,  Status: $Status)
         {
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

export const DELETE_PRODUCT = gql`
    mutation deleteProduct($id: ID!) {
        deleteProduct(id: $id) {
            message
        }
        
    }
`;