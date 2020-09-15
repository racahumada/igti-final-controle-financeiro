import React, { useState } from 'react';
import HostService from '../services/HostServices';
import M from 'materialize-css';
import css from './selectDate.module.css';
import { useEffect } from 'react';

export default function SelectDate(props) {
  const { periodValue, currentDate } = props;
  const [periods, setPeriods] = useState([]);

  useEffect(() => {
    M.AutoInit();
    searchPeriods();
  }, []);

  const searchPeriods = async () => {
    const data = await HostService.getAllData();
    const dataTransactions = data.data.transactions;
    let valuesPeriod = [];
    dataTransactions.forEach((period) => {
      let flagPeriod = false;
      if (valuesPeriod.length === 0) {
        valuesPeriod.push(period.yearMonth);
      }
      for (const iterator of valuesPeriod) {
        if (period.yearMonth === iterator) {
          flagPeriod = true;
        }
      }
      if (!flagPeriod) {
        valuesPeriod.push(period.yearMonth);
      }
    });
    setPeriods(valuesPeriod);
  };

  const handleChangePeriod = (event) => {
    const value = event.target.value;
    periodValue(value);
  };
  const selectStyle = `${css.div} browser-default`;
  return (
    <div>
      <select
        className={selectStyle}
        value={currentDate}
        onChange={handleChangePeriod}
      >
        {periods.map((values, index) => {
          return (
            <option key={index} value={values}>
              {values}
            </option>
          );
        })}
      </select>
    </div>
  );
}
