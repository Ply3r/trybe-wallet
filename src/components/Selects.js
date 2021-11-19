import React from 'react';
import PropTypes from 'prop-types';

const Selects = ({ moeda, setMoeda, options, metodo, setMetodo, tag, setTag }) => (
  <>
    <label htmlFor="moeda">
      Moeda
      <select
        value={ moeda }
        onChange={ ({ target: { value } }) => setMoeda(value) }
        id="moeda"
      >
        { options }
      </select>
    </label>
    <label htmlFor="metodo">
      Metodo de Pagamento:
      <select
        value={ metodo }
        onChange={ ({ target: { value } }) => setMetodo(value) }
        id="metodo"
      >
        <option value="Dinheiro">Dinheiro</option>
        <option value="Cartão de Credito">Cartão de Credito</option>
        <option value="Cartão de Debito">Cartão de Debito</option>
      </select>
    </label>
    <label htmlFor="tag">
      Tag
      <select
        value={ tag }
        onChange={ ({ target: { value } }) => setTag(value) }
        id="tag"
      >
        <option value="Alimentação">Alimentação</option>
        <option value="Lazer">Lazer</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Transporte">Transporte</option>
        <option value="Saúde">Saúde</option>
      </select>
    </label>
  </>
);

export default Selects;

Selects.propTypes = {
  moeda: PropTypes.string.isRequired,
  metodo: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  setMoeda: PropTypes.func.isRequired,
  setMetodo: PropTypes.func.isRequired,
  setTag: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.element).isRequired,
};
