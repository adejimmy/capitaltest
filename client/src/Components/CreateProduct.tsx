import React, { useState } from 'react';
import { CREATE_PRODUCT } from '../Graphql/Mutation';
import {useMutation} from '@apollo/client';

function CreateProduct() {

    const [product_code, setproduct_code] = useState("");
    const [Name, setName] = useState("");
    const [Product_Description, setProduct_Description] = useState("");
    const [Category_code, setCategory_code] = useState("");
    const [price, setprice] = useState("");
    const [Status, setStatus] = useState("")

    const [createProduct, {error}] = useMutation(CREATE_PRODUCT);

    return (   
        <div className="createProductt">
            <fieldset>
            <input 
                type="text" 
                placeholder="product code" 
                onChange={(event) => {
                    setproduct_code(event.target.value)
                }} 
            /> <br />
            <input 
                type="text" 
                placeholder="Name" 
                onChange={(event) => { 
                    setName(event.target.value)
                }}
            /><br />
            <input 
               type="text" 
                placeholder="Product Description" 
                onChange={(event) =>{
                    setProduct_Description(event.target.value)
                }} 
            /><br />
            <input 
                type="text" 
                placeholder="Category code" 
                onChange={(event) =>{
                    setCategory_code(event.target.value)
                }} 
            /><br />
            <input 
                type="text" 
                placeholder="price" 
                onChange={(event) =>{
                    setprice(event.target.value)
                }} 
            /><br />
            <input 
                type="text" 
                placeholder="Status" 
                onChange={(event) =>{
                    setStatus(event.target.value)
                }} 
            /><br />
            <button 
            onClick={() =>{ createProduct({ 
                    variables: { product_code: product_code,  Name: Name,  Product_Description: Product_Description, Category_code: Category_code, price: price, Status: Status
                        },
                    });
                }
            }
            >
            Create Product</button>
            </fieldset>
            
        </div>
    )
    
}

export default CreateProduct
