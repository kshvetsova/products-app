const EXCHANGE_RATE_URL = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

const request = url => (
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error`${response.status} - ${response.statusText}`;
      }

      return response.json();
    })
    // eslint-disable-next-line no-console
    .catch(error => console.warn('Error: ', error))
);

export const getExchangeRate = async() => {
  const result = await request(EXCHANGE_RATE_URL);
  const rate = result.find(res => res.ccy === 'USD');

  return rate ? rate.buy : '27';
};

export const changeCurrency = (rate, price) => (+price / +rate).toFixed();
