/* eslint-disable max-lines-per-function */
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import walletContext from '../context/walletContext';
import moneyApi from '../servises/money';
import Inputs from './Inputs';
import Selects from './Selects';

const Form = ({ expense: { description, value, method, tag: tagReceive, currency } }) => {
  const {
    id,
    currencies,
    expenses,
    setExpenses,
    isEditing,
    setIsEditing,
  } = useContext(walletContext);

  const [valor, setValor] = useState(value);
  const [descricao, setDescricao] = useState(description);
  const [moeda, setMoeda] = useState(currency);
  const [metodo, setMetodo] = useState(method);
  const [tag, setTag] = useState(tagReceive);

  const options = currencies.map((currencie) => (
    <option key={ currencie } value={ currencie }>{ currencie }</option>
  ));

  const addExpense = async () => {
    const exchangeRates = await moneyApi();
    const expenseObj = {
      id: expenses.length,
      value: valor,
      description: descricao,
      currency: moeda,
      method: metodo,
      tag,
      exchangeRates,
    };

    setValor('');
    setDescricao('');
    setMoeda('USD');
    setMetodo('Dinheiro');
    setTag('Alimentação');

    setExpenses([...expenses, expenseObj]);
  };

  const onEdited = async () => {
    const filtredExpense = expenses.filter((expense) => expense.id !== id);
    const exchangeRates = await moneyApi();
    const expenseObj = {
      id: expenses.length,
      value: valor,
      description: descricao,
      currency: moeda,
      method: metodo,
      tag,
      exchangeRates,
    };
    setExpenses([...filtredExpense, expenseObj]);
    setIsEditing(false);
  };

  return (
    <form className={ `form ${isEditing ? 'editing' : ''}` }>
      <Inputs
        valor={ valor }
        setValor={ setValor }
        descricao={ descricao }
        setDescricao={ setDescricao }
      />
      <Selects
        moeda={ moeda }
        setMoeda={ setMoeda }
        options={ options }
        metodo={ metodo }
        setMetodo={ setMetodo }
        tag={ tag }
        setTag={ setTag }
      />
      { isEditing ? (
        <button
          type="button"
          onClick={ onEdited }
        >
          Editar Despesas
        </button>

      ) : (
        <button
          type="button"
          onClick={ addExpense }
        >
          Adicionar Despesas
        </button>
      ) }
    </form>
  );
};

export default Form;

Form.propTypes = {
  expense: PropTypes.shape({
    value: PropTypes.string,
    description: PropTypes.string,
    method: PropTypes.string,
    tag: PropTypes.string,
    currency: PropTypes.string,
  }),
};

Form.defaultProps = {
  expense: {
    value: '',
    description: '',
    method: 'Dinheiro',
    tag: 'Alimentação',
    currency: 'USD',
  },
};
