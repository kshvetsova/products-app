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
  queryFrom: '',
  setQueryFrom: () => {},
  applyQueryFrom: () => {},
  queryTo: '',
  setQueryTo: () => {},
  applyQueryTo: () => {},
  value: {},
  handleChange: () => {},
  changeValue: () => {},
});

const initialValue = {
  currency: 'uah',
  from: '',
  to: '',
  radio: '',
  errorList: false,
};

export const ProductsProvider = ({ children }) => {
  const [productsList, setProductsList] = useState(
    JSON.parse(localStorage.getItem('products'))
    || productsFromServer,
  );
  const [exchangeRate, setExchangeRate] = useState('');
  const [queryFrom, setQueryFrom] = useState('');
  const applyQueryFrom = useCallback(debounce(setQueryFrom, 1000), []);
  const [queryTo, setQueryTo] = useState('');
  const applyQueryTo = useCallback(debounce(setQueryTo, 1000), []);
  const [value, setValue] = useState(initialValue);
  const { currency, radio, errorList } = value;
  const handleChange = useCallback((e) => {
    const { name, value: query } = e.target;

    setValue({
      ...value,
      [name]: query,
    });
  }, [value]);

  const changeValue = useCallback((item, val) => (
    setValue({
      ...value,
      [item]: val,
    })), [value]);

  useEffect(() => {
    getExchangeRate().then(setExchangeRate);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!queryFrom && !queryTo) {
      changeValue('errorList', false);

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

      return result.length === 0
        ? (changeValue('errorList', true), productsList)
        : (changeValue('errorList', false), result);
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

      return result.length === 0
        ? (changeValue('errorList', true), productsList)
        : (changeValue('errorList', false), result);
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

      return result.length === 0
        ? (changeValue('errorList', true), productsList)
        : (changeValue('errorList', false), result);
    }

    return productsList;
  }, [currency, errorList, queryFrom, queryTo, productsList]);

  const products = useMemo(() => {
    switch (radio) {
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
  }, [radio, filteredProducts, productsList, errorList]);

  const contextValue = {
    products,
    productsList,
    setProductsList,
    exchangeRate,
    setExchangeRate,
    queryFrom,
    setQueryFrom,
    applyQueryFrom,
    queryTo,
    setQueryTo,
    applyQueryTo,
    value,
    handleChange,
    changeValue,
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
