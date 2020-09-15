import React, { useState, useEffect } from 'react';
import css from './modalCreate.module.css';
import HostServices from '../services/HostServices';

const initialCreate = {
  description: '',
  value: 0,
  category: '',
  year: 0,
  month: 0,
  day: 0,
  yearMonth: '',
  yearMonthDay: '',
  type: '',
};

export default function ModalCreate(props) {
  const { modalSubmit } = props;
  const [dataCreate, setDataCreate] = useState(initialCreate);

  useEffect(() => {});

  const createTransaction = async (event) => {
    modalSubmit();
    const data = await HostServices.insertTransaction(dataCreate);
    alert(data.data);
    setDataCreate(initialCreate);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(value);
    if (name === 'yearMonthDay') {
      const year = parseInt(value.substring(0, 4));
      const month = parseInt(value.substring(5, 7));
      const day = parseInt(value.substring(8, 10));
      const yearMonth = value.substring(0, 7);
      setDataCreate({
        ...dataCreate,
        day: day,
        month: month,
        year: year,
        yearMonth: yearMonth,
        [name]: value,
      });
    } else {
      setDataCreate({ ...dataCreate, [name]: value });
    }
  };

  //VARIAVEIS CSS
  const cssModal2 = `modal ${css.modal2}`;

  return (
    <div className={cssModal2} id="modalCreate">
      <div className="modal-content">
        <div className={css.divModalFlex}>
          <h4>Adicionando Lançamento</h4>
          <a href="/#" className="modal-close btn left red">
            X
          </a>
        </div>
        <div className={css.modalBody}>
          <form>
            <div>
              <label>Tipo de Lançamento</label>
              <div className={css.divFormFlex}>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="+"
                    onChange={handleInputChange}
                  />
                  <span>Receitas</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="-"
                    onChange={handleInputChange}
                  />
                  <span>Despesas</span>
                </label>
              </div>
            </div>
            <div>
              <label>
                Descrição
                <input
                  type="text"
                  name="description"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <label>
                Categoria
                <input
                  type="text"
                  name="category"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div className={css.divFormFlex}>
              <label>
                Valor
                <input
                  type="number"
                  name="value"
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Data de Lançamento
                <input
                  type="date"
                  name="yearMonthDay"
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <button
                className="modal-close btn"
                type="submit"
                onClick={createTransaction}
              >
                Salvar e Sair
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
