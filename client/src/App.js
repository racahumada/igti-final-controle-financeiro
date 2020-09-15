import React, { useState, useEffect } from 'react';
import SelectDate from './componentes/SelectDate';
import TransactionsList from './componentes/TransactionsList';
import StatusBar from './componentes/StatusBar';
import HostServices from './services/HostServices';
import InsertFilter from './componentes/InsertFilter';

export default function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [refreshList, setRefreshList] = useState(false);
  const [currentPeriod, setCurrentPeriod] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (currentPeriod === '') {
      const today = new Date();
      const todayString = `${today.getFullYear()}-0${today.getMonth() + 1}`;
      setCurrentPeriod(todayString);
      getTransactions(todayString);
    }
    if (refreshList) {
      getTransactions(currentPeriod);
      setRefreshList(false);
    }
  }, [currentPeriod, refreshList]);

  const getTransactions = async (period) => {
    const valuesTransactions = await HostServices.getPeriod(period);
    setListTransactions(valuesTransactions.data.transactions);
  };

  const handleSelectPeriod = (value) => {
    setCurrentPeriod(value);
    getTransactions(value);
  };
  const handleInputFilter = (value) => {
    setFilter(value);
  };

  const refreshSubmit = (value) => {
    setRefreshList(value);
  };
  return (
    <div className="container">
      <h4>Controle Financeiro Pessoal</h4>
      <SelectDate
        currentDate={currentPeriod}
        periodValue={handleSelectPeriod}
      />
      <StatusBar
        transactions={Object.assign(listTransactions)}
        filter={filter}
      />
      <InsertFilter
        changeInput={handleInputFilter}
        flagRefresh={refreshSubmit}
      />
      <TransactionsList
        transactions={Object.assign(listTransactions)}
        filter={filter}
        flagRefresh={refreshSubmit}
      />
    </div>
  );
}
