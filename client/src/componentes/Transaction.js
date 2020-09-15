import React from 'react';
import { formatNumber } from '../formatValues/formatValues';
import css from './transaction.module.css';
import HostServices from '../services/HostServices';

export default function Transaction(props) {
  const {
    id,
    day,
    category,
    description,
    value,
    type,
    onId,
    refreshDel,
  } = props;

  const handleIdUpdate = (event) => {
    const idUpdate = event.target.id;
    onId(idUpdate);
  };

  const deleteTransaction = async (event) => {
    console.log(event.target.id);
    const idDelete = event.target.id;
    const data = await HostServices.deleteTransaction(idDelete);
    alert(data.data);
    refreshDel();
  };

  const cssColor = type === '+' ? css.divIncome : css.divExpenses;
  const cssDivBase = `row ${css.divBase} ${cssColor}`;
  const cssInfo = `col m8 ${css.divFlex}`;
  const cssIcons = `col m1 ${css.iconsFlex}`;
  const cssIconsButton = `${css.icons} modal-trigger`;

  return (
    <div className={cssDivBase}>
      <div className="col m1">{day}</div>
      <div className={cssInfo}>
        <span>{category}</span>
        <span>{description}</span>
      </div>
      <div className="col m2">{formatNumber(value)}</div>
      <div className={cssIcons}>
        <a
          href="#modalTeste"
          className={cssIconsButton}
          onClick={handleIdUpdate}
        >
          <i className="material-icons" id={id}>
            edit
          </i>
        </a>
        <a href="/#" className={css.icons} onClick={deleteTransaction}>
          <i className="material-icons" id={id}>
            delete
          </i>
        </a>
      </div>
    </div>
  );
}
