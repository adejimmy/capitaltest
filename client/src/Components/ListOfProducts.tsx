import React from 'react';
import {GET_ALL_PRODUCT} from '../Graphql/Queries';
import { DELETE_PRODUCT } from '../Graphql/Mutation';

import {useQuery, useMutation} from '@apollo/client';



function ListOfProducts() {

    const {data} = useQuery(GET_ALL_PRODUCT);

    const [deleteProduct, {error}] = useMutation(DELETE_PRODUCT);

    // const executeDelete = (id: number ): void => {
    //     deleteProduct(id)
    // }
    // if(data) {
    //     console.log(data)
    // }
    return (
        <div> {data && (data.getAllProduct.map((product: any)=>{
            return <div>
                {product.id} / {product.product_code} / {product.Name} / {product.Product_Description}
                <button onClick={() => {deleteProduct({variables:{id: product.id}})}}>Delete</button>
            </div>
        }))} </div>
    )
}

export default ListOfProducts
