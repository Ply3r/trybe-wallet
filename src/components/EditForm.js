import React, { useContext } from 'react';
import walletContext from '../context/walletContext';
import Form from './Form';

const EditForm = () => {
  const { expenses, id } = useContext(walletContext);
  const expense = expenses.find((obj) => obj.id === id);
  return (
    <Form expense={ expense } />
  );
};

export default EditForm;
