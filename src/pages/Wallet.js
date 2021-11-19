import React, { useContext } from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
import EditForm from '../components/EditForm';
import Table from '../components/Table';
import walletContext from '../context/walletContext';
import '../css/wallet.css';

const Wallet = () => {
  const { isEditing } = useContext(walletContext);

  return (
    <>
      <Header />
      { isEditing ? (
        <EditForm />
      ) : (
        <Form />
      ) }
      <Table />
    </>
  );
};

export default Wallet;
