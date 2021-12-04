import React, { useState } from 'react';
import { CREATE_PRODUCT } from '../Graphql/Mutation';
import {useMutation} from '@apollo/client';
import '../index.css';

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
            <fieldset className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="pb-6">
                    <input 
                        className="form-input px-4 py-3 rounded-full"
                            type="text" 
                            placeholder="product code" 
                            onChange={(event) => {
                                setproduct_code(event.target.value)
                            }} 
                        />
                    </div>
                    <div className="pb-6">
                    <input 
                        className="form-input px-4 py-3 rounded-full"
                            type="text" 
                            placeholder="Name" 
                            onChange={(event) => { 
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div>
                    <input 
                        className="form-input px-4 py-3 rounded-full"
                        type="text" 
                            placeholder="Product Description" 
                            onChange={(event) =>{
                                setProduct_Description(event.target.value)
                            }} 
                        />
                    </div>

                </div>
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="pb-6">
                        <input 
                            className="form-input px-4 py-3 rounded-full"
                            type="text" 
                            placeholder="Category code" 
                            onChange={(event) =>{
                                setCategory_code(event.target.value)
                            }} 
                        />
                    </div>
                    <div className="pb-6">
                        <input 
                            className="form-input px-4 py-3 rounded-full"
                            type="text" 
                            placeholder="price" 
                            onChange={(event) =>{
                                setprice(event.target.value)
                            }} 
                        />
                    </div>

                    <div>
                        <input 
                            className="form-input px-4 py-3 rounded-full"
                            type="text" 
                            placeholder="Status" 
                            onChange={(event) =>{
                                setStatus(event.target.value)
                            }} 
                        />
                    </div>
                 </div>
           
            
            
            <button 
            className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
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
