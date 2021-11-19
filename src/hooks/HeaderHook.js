/* eslint-disable max-lines-per-function */
import { useState, useEffect } from 'react';
import moneyApi from '../servises/money';

const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
  isEditing: false,
  id: '',
};

const HeaderHook = () => {
  const [header, setHeader] = useState(INITIAL_STATE);
  const [email, setEmail] = useState('');
  const [isEditing, setIsEditing] = useState(header.isEditing);
  const [expenses, setExpenses] = useState(header.wallet.expenses);
  const [id, setId] = useState(header.id);

  const changeExpense = () => {
    const newHeader = {
      ...header,
      wallet: {
        ...header.wallet,
        expenses,
      },
    };
    setHeader(newHeader);
  };

  const changeEditing = () => {
    const newHeader = {
      ...header,
      isEditing,
      id,
    };
    setHeader(newHeader);
  };

  const getMoedas = async () => {
    const obj = await moneyApi();
    let currencies = Object.keys(obj);
    currencies = currencies.filter((currencie) => currencie !== 'USDT');

    const newHeader = {
      ...header,
      wallet: {
        ...header.wallet,
        currencies,
      },
    };

    setHeader(newHeader);
  };

  const changeEmail = () => {
    const newHeader = {
      ...header,
      user: {
        email,
      },
    };
    setHeader(newHeader);
  };

  useEffect(getMoedas, []);
  useEffect(changeEmail, [email]);
  useEffect(changeExpense, [expenses]);
  useEffect(changeEditing, [isEditing]);

  return {
    email: header.user.email,
    setEmail,
    currencies: header.wallet.currencies,
    expenses,
    setExpenses,
    setIsEditing,
    isEditing,
    id,
    setId,
  };
};

export default HeaderHook;
