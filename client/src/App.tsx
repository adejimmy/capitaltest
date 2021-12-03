import React from 'react';
import {
  ApolloClient, 
  InMemoryCache, 
  ApolloProvider
} from '@apollo/client';

import './App.css';
import CreateProduct from './Components/CreateProduct';
import ListOfProducts from './Components/ListOfProducts';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return  (
    <>
      <ApolloProvider client={client}> 
        <CreateProduct /> 
        <ListOfProducts />
      </ApolloProvider>
    </>
  );
}

export default App;
