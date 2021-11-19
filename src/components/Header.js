import React, { useContext } from 'react';
import walletContext from '../context/walletContext';

const Header = () => {
  const { email, expenses } = useContext(walletContext);

  let total = 0;

  if (expenses.length) {
    const totalExpenses = expenses
      .reduce((
        acc, { value, currency, exchangeRates: { [currency]: { ask } } },
      ) => {
        const sum = Number(value) * Number(ask) + acc;
        return sum;
      }, 0);
    total = totalExpenses;
  }

  console.log(expenses);

  return (
    <header>
      <div className="logo-header">
        <h1>TrybeWallet</h1>
      </div>
      <div className="information-header">
        <p>{ `Email: ${email}` }</p>
        <p>{ `Despesas total ${total.toFixed(2)} BRL` }</p>
      </div>
    </header>
  );
};

export default Header;
