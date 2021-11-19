import React from 'react';
import PropTypes from 'prop-types';
import walletContext from './walletContext';
import HeaderHook from '../hooks/HeaderHook';

const Provider = ({ children }) => {
  const {
    email,
    currencies,
    expenses,
    isEditing,
    id,
    setEmail,
    setExpenses,
    setIsEditing,
    setId,
  } = HeaderHook();

  const value = {
    email,
    currencies,
    expenses,
    isEditing,
    id,
    setExpenses,
    setIsEditing,
    setId,
    setEmail,
  };

  return (
    <walletContext.Provider value={ value }>
      { children }
    </walletContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};
