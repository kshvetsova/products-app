import React, { useState, useCallback, useContext } from 'react';
import classNames from 'classnames';
import { ProductsContext } from '../../ProductsProvider';
import { initProduct, initErrors } from '../../helpers/init-product';
import './NewProduct.scss';

export const NewProduct = () => {
  const [visibleForm, setVisibleForm] = useState(false);
  const [productData, setProductData] = useState(initProduct);
  const { name, price, image, description } = productData;
  const [errors, setErrors] = useState(initErrors);
  const { productsList, setProductsList } = useContext(ProductsContext);

  const validate = useCallback((value, item) => {
    const validErrors = {
      name: [],
      price: [],
      description: [],
    };

    if (!value) {
      validErrors[item].push(`Enter a ${item[0].toUpperCase()
        + item.slice(1)} please!`);
    }

    if ((value.length < 1 || value.length > 5) && item === 'price' && value) {
      validErrors[item].push(`${item[0].toUpperCase()
        + item.slice(1)} must contain from 1 to 5 characters!`);
    }

    if (+value < 1 && item === 'price' && value) {
      validErrors[item].push(`${item[0].toUpperCase()
        + item.slice(1)} must be more than 1!`);
    }

    if ((value.length < 5 || value.length > 40) && item === 'name' && value) {
      validErrors[item].push(`${item[0].toUpperCase()
        + item.slice(1)} must contain from 5 to 40 characters!`);
    }

    if ((value.length < 30 || value.length > 150)
      && item === 'description' && value) {
      validErrors[item].push(`${item[0].toUpperCase()
        + item.slice(1)} must contain from 20 to 150 characters!`);
    }

    setErrors({
      ...errors,
      ...validErrors,
    });
  }, [errors, productData]);

  const handleChange = useCallback((e) => {
    const { value, name: item } = e.target;

    setProductData({
      ...productData,
      id: productsList.length,
      [item]: value.trimStart(),
    });

    validate(value, item);
    hasErrors();
  }, [productData, errors]);

  const handleOnBlur = useCallback((e) => {
    const { value, name: item } = e.target;

    validate(value, item);
    hasErrors();
  }, [validate]);

  const hasErrors = useCallback(() => {
    let valid;

    if ((Object.values(errors).some(arr => arr.length > 0))
      || (Object.values(productData).some(arr => arr === ''))) {
      valid = true;
    } else if (Object.values(productData).every(arr => arr !== '')) {
      valid = false;
    }

    return valid;
  }, [errors, productData, validate]);

  const addProduct = useCallback((e) => {
    e.preventDefault();
    if (Object.values(productData).every(arr => arr === '')) {
      return;
    }

    localStorage.setItem('products', JSON.stringify(
      [...productsList, productData],
    ));
    setProductsList([...productsList, productData]);
    setProductData(initProduct);
    setVisibleForm(false);
  }, [productData, productsList]);

  return (
    <div className="NewProduct">
      <button
        className={classNames('NewProduct-Button button-add', {
          hidden_form: visibleForm,
        })}
        type="button"
        onClick={() => setVisibleForm(true)}
      >
        Добавить товар
      </button>
      <div className={classNames('NewProduct-Product', {
        hidden_form: !visibleForm,
      })}
      >
        <form className="NewProduct-Form Form" onSubmit={addProduct}>
          <div className="input-container">
            <span className="error">{errors.name}</span>
            <div className="Form-Item">
              <p className={classNames({
                input_valid: !errors.name[0] && name,
              })}
              >
                Имя
              </p>
              <input
                type="text"
                className={classNames('input', {
                  invalid: errors.name[0],
                  valid: !errors.name[0] && name,
                })}
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                onBlur={handleOnBlur}
              />
            </div>
          </div>
          <div className="input-container">
            <span className="error">{errors.price}</span>
            <div className="Form-Item">
              <p className={classNames({
                input_valid: !errors.price[0] && price,
              })}
              >
                Цена
              </p>
              <input
                type="number"
                className={classNames('input', {
                  invalid: errors.price[0],
                  valid: !errors.price[0] && price,
                })}
                name="price"
                placeholder="Price"
                min="1"
                max="50000"
                value={price}
                onChange={handleChange}
                onBlur={handleOnBlur}
              />
            </div>
          </div>

          <div className="input-container">
            <span className="error">{errors.description}</span>
            <textarea
              className={classNames('description Form-Item input', {
                invalid: errors.description[0],
                valid: !errors.description[0] && description,
              })}
              placeholder="Description"
              rows="5"
              name="description"
              value={description}
              onChange={handleChange}
              onBlur={handleOnBlur}
            />
          </div>

          <div className="Form-Item">
            <p className={classNames({
              input_valid: image,
            })}
            >
              Изображение
            </p>
            <button
              className={classNames('button-image', {
                button_checked: image,
              })}
              type="button"
              onClick={() => {
                setProductData({
                  ...productData,
                  image: 'product.jpg',
                });
              }}
            >
              <span className="button-plus">+</span>
            </button>
          </div>
          <button
            className="Form-Item NewProduct-Button"
            type="submit"
            disabled={hasErrors()}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};
