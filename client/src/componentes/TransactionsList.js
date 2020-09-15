import React from 'react';
import Transaction from './Transaction';
import ModalEdit from './ModalEdit';
import { useState } from 'react';
import HostServices from '../services/HostServices';

export default function TransactionsList(props) {
  const { transactions, filter, flagRefresh } = props;

  const [dataUpdate, setDataUpdate] = useState({});

  const handleIdUpdate = (value) => {
    const getTransacion = async () => {
      const filterData = await HostServices.getOneTransaction(value);
      setDataUpdate(filterData.data);
    };
    getTransacion();
  };

  const RefreshUpOrDel = () => {
    flagRefresh(true);
  };

  return (
    <div>
      {transactions
        .map((transaction, index) => {
          const { _id, day, category, description, value, type } = transaction;
          //Realizar if para alternar divs
          return (
            <Transaction
              key={index}
              id={_id}
              day={day}
              category={category}
              description={description}
              value={value}
              type={type}
              onId={handleIdUpdate}
              refreshDel={RefreshUpOrDel}
            />
          );
        })
        .filter((transactionFilter) => {
          const { description } = transactionFilter.props;
          const filterLower = filter.toLowerCase();
          const descriptionLower = description.toLowerCase();
          return descriptionLower.includes(filterLower);
        })
        .sort((a, b) => {
          return a.props.day - b.props.day;
        })}
      <ModalEdit
        updateModal={Object.assign(dataUpdate)}
        modalSubmit={RefreshUpOrDel}
      />
    </div>
  );
}
