const url = 'https://economia.awesomeapi.com.br/json/all';

const moneyApi = () => (
  fetch(url)
    .then((res) => res.json())
    .then((res) => res)
);

export default moneyApi;
