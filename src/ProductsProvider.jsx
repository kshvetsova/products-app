import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import productsFromServer from './data/products.json';
import { getExchangeRate, changeCurrency } from './api/exchange_rate';
import { debounce } from './helpers/debounce';

export const ProductsContext = React.createContext({
  products: [],
  productsList: [],
  setProductsList: () => {},
  exchangeRate: '',
  setExchangeRate: () => {},
  currency: '',
  setCurrency: () => {},
  valueInputFrom: '',
  setValueInputFrom: () => {},
  valueInputTo: '',
  setValueInputTo: () => {},
  queryFrom: '',
  setQueryFrom: () => {},
  applyQueryFrom: () => {},
  queryTo: '',
  setQueryTo: () => {},
  applyQueryTo: () => {},
  valueRadio: '',
  setValueRadio: () => {},
});

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(
    JSON.parse(localStorage.getItem('products'))
    || productsFromServer,
  );
  const [exchangeRate, setExchangeRate] = useState();
  const [currency, setCurrency] = useState('uah');
  const [valueInputFrom, setValueInputFrom] = useState('');
  const [queryFrom, setQueryFrom] = useState('');
  const applyQueryFrom = useCallback(debounce(setQueryFrom, 1000), []);
  const [valueInputTo, setValueInputTo] = useState('');
  const [queryTo, setQueryTo] = useState('');
  const applyQueryTo = useCallback(debounce(setQueryTo, 1000), []);
  const [valueRadio, setValueRadio] = useState();

  useEffect(() => {
    getExchangeRate().then(setExchangeRate);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!queryFrom && !queryTo) {
      return productsList;
    }

    if (currency === 'uah' && queryFrom && !queryTo) {
      return productsList.filter(product => +product.price >= +queryFrom);
    }

    if (currency === 'usd' && queryFrom && !queryTo) {
      return productsList.filter(product => (
        changeCurrency(exchangeRate, product.price) >= +queryFrom));
    }

    if (currency === 'uah' && queryTo && !queryFrom) {
      return productsList.filter(product => +product.price <= +queryTo);
    }

    if (currency === 'usd' && queryTo && !queryFrom) {
      return productsList.filter(product => (
        changeCurrency(exchangeRate, product.price) <= +queryTo));
    }

    if (currency === 'uah' && queryFrom && queryTo) {
      return productsList
        .filter(product => (
          +product.price <= +queryTo && +product.price >= +queryFrom));
    }

    if (currency === 'usd' && queryFrom && queryTo) {
      return productsList
        .filter(product => (
          changeCurrency(exchangeRate, product.price) >= +queryFrom
        && changeCurrency(exchangeRate, product.price) <= +queryTo));
    }

    return '';
  }, [currency, queryFrom, queryTo, productsList]);

  const products = useMemo(() => {
    switch (valueRadio) {
      case 'asc':
        return [...filteredProducts]
          .sort((a, b) => (+a.price) - (+b.price));
      case 'desc':
        return [...filteredProducts]
          .sort((a, b) => (+b.price) - (+a.price));
      case 'alphabet':
        return [...filteredProducts]
          .sort((a, b) => a.name.localeCompare(b.name));

      default:
        return filteredProducts;
    }
  }, [valueRadio, filteredProducts, productsList]);

  const contextValue = {
    products,
    productsList,
    setProductsList,
    exchangeRate,
    setExchangeRate,
    currency,
    setCurrency,
    valueInputFrom,
    setValueInputFrom,
    valueInputTo,
    setValueInputTo,
    queryFrom,
    setQueryFrom,
    applyQueryFrom,
    queryTo,
    setQueryTo,
    applyQueryTo,
    valueRadio,
    setValueRadio,
  };

  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

ProductsProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
