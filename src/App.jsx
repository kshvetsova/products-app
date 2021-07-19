import React from 'react';
import './App.scss';

import { NewProduct } from './components/NewProduct';
import { Options } from './components/Options';
import { Products } from './components/Products';
import { Scroll } from './components/Scroll';

import { ProductsProvider } from './ProductsProvider';

export const App = () => (
  <ProductsProvider>
    <div className="App" id="product">
      <div className="App-Sidebar">
        <Options />
        <NewProduct />
      </div>
      <div className="App-Content">
        <Products />
      </div>
      <Scroll />
    </div>
  </ProductsProvider>
);
