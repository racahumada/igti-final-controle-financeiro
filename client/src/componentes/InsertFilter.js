import React from 'react';
import ModalCreate from './ModalCreate';

export default function InsertFilter(props) {
  const { changeInput, flagRefresh } = props;
  const handleChange = (event) => {
    const value = event.target.value;
    changeInput(value);
  };

  const refreshCreate = () => {
    flagRefresh(true);
  };

  const classButton = `btn waves-effect waves-light col m2 modal-trigger`;
  const classInput = `col m10`;
  return (
    <div className="row">
      <span>
        <a className={classButton} href="#modalCreate">
          Novo Lançamento
          <i className="material-icons left">add</i>
        </a>
      </span>
      <span className={classInput}>
        <input type="text" placeholder="Filtro" onChange={handleChange} />
      </span>
      <ModalCreate modalSubmit={refreshCreate} />
    </div>
  );
}
