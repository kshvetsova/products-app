import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProductsContext } from '../../ProductsProvider';
import { changeCurrency } from '../../api/exchange_rate';
import './Products.scss';

export const Products = () => {
  const {
    products,
    currency,
    exchangeRate,
    errorList,
  } = useContext(ProductsContext);

  return (
    <>
      <div className={classNames('Error', {
        product_error: !errorList,
      })}
      >
        Товар не найден!
      </div>
      <div className={classNames('Products', {
        product_error: errorList,
      })}
      >
        { products.map(product => (
          <div
            key={product.id}
            className="Product"
          >
            <div
              className={`Product-Photo
              Product-Photo_img_${product.image.slice(0, -4)}`}
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
                {product.description.length > 150
                  ? `${product.description.slice(0, 150)}...`
                  : product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
