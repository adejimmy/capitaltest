import {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInputObjectType} from "graphql";

export const ProductType = new GraphQLObjectType({
    name: "Product",
    fields: () => ({
        id: {type: GraphQLID},
        product_code: {type: GraphQLString},
        Name: {type: GraphQLString},
        Product_Description: {type: GraphQLString},
        Category_code: {type: GraphQLString},
        price: {type: GraphQLString},
        Status: {type: GraphQLString}
    })
})
