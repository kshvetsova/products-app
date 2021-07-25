import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProductsContext } from '../../ProductsProvider';
import './Options.scss';

export const Options = () => {
  const {
    value,
    handleChange,
    changeValue,
    applyQueryTo,
    applyQueryFrom,
  } = useContext(ProductsContext);
  const { currency, from, to, radio } = value;

  return (
    <div className="Options">
      <div className="Options-Price">
        <h2 className="Options-TitlePrice">Цена</h2>
        <div className="Options-InputsPrice">
          <div className={classNames('input-from', {
            input_active: from,
          })}
          >
            от:
            <br />
            <input
              type="number"
              className="input-price"
              name="from"
              min="10"
              max="100"
              placeholder="10"
              value={from}
              onChange={(e) => {
                handleChange(e);
                applyQueryFrom(e.target.value);
              }}
            />
          </div>
          <div className={classNames('input-to', {
            input_active: to,
          })}
          >
            до:
            <br />
            <input
              type="number"
              className="input-price"
              name="to"
              min="100"
              max="50000"
              placeholder="50000"
              value={to}
              onChange={(e) => {
                handleChange(e);
                applyQueryTo(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="Options-Currency">
        <h2 className="Options-TitleCurrency">Валюта</h2>
        <div className="container">
          <button
            type="button"
            className={classNames('button button-usd', {
              currency_active: currency === 'usd',
            })}
            onClick={() => changeValue('currency', 'usd')}
          >
            USD
          </button>
          <button
            type="button"
            className={classNames('button button-uah', {
              currency_active: currency === 'uah',
            })}
            onClick={() => changeValue('currency', 'uah')}
          >
            UAH
          </button>
        </div>
      </div>

      <div className="Options-Sorting">
        <h2 className="Options-TitleSorting">Coртировка</h2>
        <div className="container-radio">
          <label className="input-asc input-radio">
            <input
              type="radio"
              name="radio"
              className="radio"
              value="asc"
              checked={radio === 'asc'}
              onChange={handleChange}
            />
            <p className={classNames('option', {
              option_active: radio === 'asc',
            })}
            >
              по возростанию цены
            </p>
          </label>
          <label className="input-desc input-radio">
            <input
              type="radio"
              name="radio"
              className="radio"
              value="desc"
              checked={radio === 'desc'}
              onChange={handleChange}
            />
            <p className={classNames('option', {
              option_active: radio === 'desc',
            })}
            >
              по убыванию цены
            </p>
          </label>

          <label className="input-alphabet input-radio">
            <input
              type="radio"
              name="radio"
              className="radio"
              value="alphabet"
              checked={radio === 'alphabet'}
              onChange={handleChange}
            />
            <p className={classNames('option', {
              option_active: radio === 'alphabet',
            })}
            >
              по алфавиту
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};
