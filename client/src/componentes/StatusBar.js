import React, { useState, useEffect } from 'react';
import css from './statusBar.module.css';
import { formatNumber } from '../formatValues/formatValues';

export default function StatusBar(props) {
  const { transactions, filter } = props;
  const [totalTransactions, setTotalTransactons] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    const totalTrans = transactions.filter((filterType) => {
      const { description } = filterType;
      const filterLower = filter.toLowerCase();
      const descriptionLower = description.toLowerCase();
      return descriptionLower.includes(filterLower);
    });
    const totalIncome = transactions
      .filter((filterType) => {
        const { description } = filterType;
        const filterLower = filter.toLowerCase();
        const descriptionLower = description.toLowerCase();
        return (
          filterType.type === '+' && descriptionLower.includes(filterLower)
        );
      })
      .reduce((total, value) => {
        return (total += value.value);
      }, 0);
    const totalExpenses = transactions
      .filter((filterType) => {
        const { description } = filterType;
        const filterLower = filter.toLowerCase();
        const descriptionLower = description.toLowerCase();
        return (
          filterType.type === '-' && descriptionLower.includes(filterLower)
        );
      })
      .reduce((total, value) => {
        return (total += value.value);
      }, 0);
    setTotalTransactons(totalTrans.length);
    setExpenses(totalExpenses);
    setIncome(totalIncome);
    setBalance(totalIncome - totalExpenses);
  }, [totalTransactions, income, transactions, filter]);

  const cssDiv = `row ${css.div}`;
  return (
    <div className={cssDiv}>
      <span className="col m3">
        <strong>Lançamentos:</strong> {totalTransactions}
      </span>
      <span className="col m3">
        <strong>Receitas:</strong>
        <span style={{ color: '#008800' }}> {formatNumber(income)}</span>
      </span>
      <span className="col m3">
        <strong>Despesas:</strong>
        <span style={{ color: '#ff0000' }}> {formatNumber(expenses)}</span>
      </span>
      <span className="col m3">
        <strong>Saldo:</strong> {formatNumber(balance)}
      </span>
    </div>
  );
}
