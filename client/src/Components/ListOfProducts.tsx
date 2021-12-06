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
                <table className="table-fixed">

                    <tbody>
                        <tr>
                            <td className="w-1/4">{product.Name}</td>
                            <td className="w-1/4">{product.product_code}</td>
                            <td className="w-1/4">{product.Product_Description}</td>
                            <td className="w-1/4"><button 
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                            onClick={() => {deleteProduct({variables:{id: product.id}})}}>Delete</button></td>
                            <td className="w-1/4"><button 
                            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                            >Edit</button></td>
                        </tr>
                    </tbody>
                </table>
                
                
            </div>
        }))} </div>
    )
}

export default ListOfProducts
