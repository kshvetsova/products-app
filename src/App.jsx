import React from 'react';
import './App.scss';

import { NewProduct } from './components/NewProduct';
import { Options } from './components/Options';
import { Products } from './components/Products/Products';

import { ProductsProvider } from './ProductsProvider';

export const App = () => (
  <ProductsProvider>
    <div className="App">
      <div className="App-Sidebar">
        <Options />
        <NewProduct />
      </div>
      <div className="App-Content">
        <Products />
      </div>
    </div>
  </ProductsProvider>
);
