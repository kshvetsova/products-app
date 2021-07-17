import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProductsContext } from '../../ProductsProvider';
import { changeCurrency } from '../../api/exchange_rate';

import './Products.scss';

export const Products = () => {
  const { products, currency, exchangeRate } = useContext(ProductsContext);

  return (
    <div className="Products">
      {products.map(product => (
        <div key={product.id} className="Product">
          <div
            className={classNames('photo', {
              [`photo_${product.id + 1}`]: product.image !== 'product.jpg',
              new_photo: product.image === 'product.jpg',
            })}
          >
            {}
          </div>
          <div className="Product-Content">
            <h3 className="Product-Name">{product.name}</h3>
            <p className="Product-Price">
              {currency === 'uah'
                ? product.price
                : changeCurrency(exchangeRate, product.price)}
              &nbsp;
              <span className="currency">
                {currency.toUpperCase()}
              </span>
            </p>
            <p className="Product-Description">
              {product.description.slice(0, 150)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
