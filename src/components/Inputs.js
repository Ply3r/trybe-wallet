import React from 'react';
import PropTypes from 'prop-types';

const Inputs = ({ valor, setValor, descricao, setDescricao }) => (
  <>
    <label htmlFor="valor">
      Valor:
      <input
        id="valor"
        type="number"
        className="valor-input"
        value={ valor }
        autoComplete="off"
        onChange={ ({ target: { value } }) => setValor(value) }
      />
    </label>
    <label htmlFor="descricao">
      Descrição:
      <input
        id="descricao"
        className="descricao-input"
        autoComplete="off"
        value={ descricao }
        onChange={ ({ target: { value } }) => setDescricao(value) }
      />
    </label>
  </>
);

export default Inputs;

Inputs.propTypes = {
  valor: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  setValor: PropTypes.func.isRequired,
  setDescricao: PropTypes.func.isRequired,
};
