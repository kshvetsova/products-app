import React, { useContext } from 'react';
import classNames from 'classnames';
import { ProductsContext } from '../../ProductsProvider';
import './Options.scss';

export const Options = () => {
  const {
    currency,
    setCurrency,
    valueInputFrom,
    setValueInputFrom,
    valueInputTo,
    setValueInputTo,
    applyQueryTo,
    applyQueryFrom,
    valueRadio,
    setValueRadio,
  } = useContext(ProductsContext);

  return (
    <div className="Options">
      <div className="Options-Price">
        <h2 className="Options-TitlePrice">Цена</h2>
        <div className="Options-InputsPrice">
          <div className={classNames('input-from', {
            input_active: valueInputFrom,
          })}
          >
            от:
            <br />
            <input
              type="number"
              className="input-price"
              name="от"
              min="10"
              max="100"
              placeholder="10"
              value={valueInputFrom}
              onChange={(e) => {
                setValueInputFrom(e.target.value);
                applyQueryFrom(e.target.value);
              }}
            />
          </div>
          <div className={classNames('input-to', {
            input_active: valueInputTo,
          })}
          >
            до:
            <br />
            <input
              type="number"
              className="input-price"
              name="до"
              min="100"
              max="50000"
              placeholder="50000"
              value={valueInputTo}
              onChange={(e) => {
                setValueInputTo(e.target.value);
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
            onClick={() => setCurrency('usd')}
          >
            USD
          </button>
          <button
            type="button"
            className={classNames('button button-uah', {
              currency_active: currency === 'uah',
            })}
            onClick={() => setCurrency('uah')}
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
              name="asc"
              className="radio"
              value="asc"
              checked={valueRadio === 'asc'}
              onChange={e => setValueRadio(e.target.value)}
            />
            <p className={classNames('option', {
              option_active: valueRadio === 'asc',
            })}
            >
              по возростанию цены
            </p>
          </label>
          <label className="input-desc input-radio">
            <input
              type="radio"
              name="desc"
              className="radio"
              value="desc"
              checked={valueRadio === 'desc'}
              onChange={e => setValueRadio(e.target.value)}
            />
            <p className={classNames('option', {
              option_active: valueRadio === 'desc',
            })}
            >
              по убыванию цены
            </p>
          </label>
          <label className="input-alphabet input-radio">
            <input
              type="radio"
              name="alphabet"
              className="radio"
              value="alphabet"
              checked={valueRadio === 'alphabet'}
              onChange={e => setValueRadio(e.target.value)}
            />
            <p className={classNames('option', {
              option_active: valueRadio === 'alphabet',
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
