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
  errorList: '',
  setErrorList: () => {},
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
  const [errorList, setErrorList] = useState(false);

  useEffect(() => {
    getExchangeRate().then(setExchangeRate);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!queryFrom && !queryTo) {
      setErrorList(false);

      return productsList;
    }

    if (queryFrom && !queryTo) {
      let result;

      if (currency === 'uah') {
        result = productsList.filter(product => (
          +product.price >= +queryFrom));
      }

      if (currency === 'usd') {
        result = productsList.filter(product => (
          changeCurrency(exchangeRate, product.price) >= +queryFrom));
      }

      return result.length === 0 ? (setErrorList(true), productsList) : (
        setErrorList(false),
        result
      );
    }

    if (queryTo && !queryFrom) {
      let result;

      if (currency === 'uah') {
        result = productsList.filter(product => (
          (+product.price) <= +queryTo));
      }

      if (currency === 'usd') {
        result = productsList.filter(product => (
          changeCurrency(exchangeRate, product.price) <= +queryTo));
      }

      return result.length === 0 ? (setErrorList(true), productsList) : (
        setErrorList(false),
        result
      );
    }

    if (queryFrom && queryTo) {
      let result;

      if (currency === 'uah') {
        result = productsList.filter(product => (
          +product.price <= +queryTo && +product.price >= +queryFrom));
      }

      if (currency === 'usd') {
        result = productsList.filter(product => (
          changeCurrency(exchangeRate, product.price) >= +queryFrom
          && changeCurrency(exchangeRate, product.price) <= +queryTo));
      }

      return result.length === 0 ? (setErrorList(true), productsList) : (
        setErrorList(false),
        result
      );
    }

    return productsList;
  }, [currency, queryFrom, queryTo, productsList, errorList]);

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
  }, [valueRadio, filteredProducts, productsList, errorList]);

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
    errorList,
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
