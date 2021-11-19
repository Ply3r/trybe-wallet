import React, { useContext } from 'react';
import walletContext from '../context/walletContext';
import { BsPencil, BsTrashFill } from 'react-icons/bs';

const Table = () => {
  const { expenses, setExpenses, setIsEditing, setId } = useContext(walletContext);

  const editElement = (id) => {
    setIsEditing(true);
    setId(id);
  };

  const deleteElement = (id) => {
    const filtredExpense = expenses.filter((expense) => expense.id !== id);
    setExpenses(filtredExpense);
  };

  const showTable = () => (
    expenses
      .map((
        {
          id,
          description,
          tag,
          method,
          value,
          currency,
          exchangeRates: { [currency]: moeda },
        },
      ) => (
        <tr key={ id }>
          <td>{ description }</td>
          <td className="white-table">{ tag }</td>
          <td>{ method }</td>
          <td className="white-table">{ Number(value).toFixed(2) }</td>
          <td>{ moeda.name.replace('/Real Brasileiro', '') }</td>
          <td className="white-table">{ Number(moeda.ask).toFixed(2) }</td>
          <td>{ (Number(moeda.ask) * Number(value)).toFixed(2) }</td>
          <td className="white-table">Real</td>
          <td>
            <button
              onClick={ () => editElement(id) }
              type="button"
              className="table-bot edit"
            >
              <BsPencil />
            </button>
            <button
              onClick={ () => deleteElement(id) }
              type="button"
              className="table-bot delete"
            >
              <BsTrashFill />
            </button>
          </td>
        </tr>
      ))
  );

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Metodo de Pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Cambio Utilizado</th>
          <th>Valor Convertido</th>
          <th>Moeda de Conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        { !!expenses.length && showTable() }
      </tbody>
    </table>
  );
};

export default Table;
