import { GraphQLString, GraphQLID } from "graphql";
import { MessageType } from "../TypeDefs/Messages";
import { ProductType } from "../TypeDefs/Product";
import { Products } from "../../Entities/Products";

export const CREATE_PRODUCT = {
    type: ProductType,  // return message
    args: {
        product_code: {type: GraphQLString},
        Name: {type: GraphQLString},
        Product_Description: {type: GraphQLString},
        Category_code: {type: GraphQLString},
        price: {type: GraphQLString},
        Status: {type: GraphQLString}
    },
    async resolve(parent:any, args:any) {
        const {product_code, Name, Product_Description, Category_code, price, Status} = args;
        await Products.insert({product_code, Name, Product_Description, Category_code, price, Status})
        return args;
    }
}


export const UPDATE_PRODUCT = {
    type: MessageType, // return message 
    args: {
        id: {type: GraphQLID},
        product_code: {type: GraphQLString},
        Name: {type: GraphQLString},
        Product_Description: {type: GraphQLString},
        Category_code: {type: GraphQLString},
        price: {type: GraphQLString},
        Status: {type: GraphQLString}
    },
    async resolve(parent:any, args:any) {
        const {id, newProduct_code, newName, newProduct_Description, newCategory_code, newprice, newStatus} = args;
        const product = await Products.findOne({id:id});
        if(!product) {
            throw new Error("PRODUCT ID NOT FOUND");
        }
        const productId = product?.id;
        let obj = {
            product_code: newProduct_code, 
            Name: newName, 
            Product_Description: newProduct_Description, 
            Category_code: newCategory_code, 
            price: newprice, 
            Status: newStatus,
        };
        if (productId){
            await Products.update(
                {id:id}, 
                {product_code: newProduct_code}
            );
            return {successful:true, message: "Succesfully updated"}
        } else {
            throw new Error("Opps.... Something Happen")
        }
            
    }
}


export const DELETE_PRODUCT = {
    type: MessageType,  // return message
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent:any, args:any) {
        const id = args.id
        await Products.delete(id)
        return {successfull: true, message: "Deleted Successfull"};
    }
}