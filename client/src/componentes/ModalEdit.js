import React, { useState, useEffect } from 'react';
import css from './modalEdit.module.css';
import HostServices from '../services/HostServices';

export default function ModalEdit(props) {
  const { updateModal, modalSubmit } = props;
  const [inputForm, setInputForm] = useState(updateModal);

  useEffect(() => {
    setInputForm(updateModal);
  }, [updateModal]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'yearMonthDay') {
      const year = parseInt(value.substring(0, 4));
      const month = parseInt(value.substring(5, 7));
      const day = parseInt(value.substring(8, 10));
      const yearMonth = value.substring(0, 7);
      setInputForm({
        ...inputForm,
        day: day,
        month: month,
        year: year,
        yearMonth: yearMonth,
        [name]: value,
      });
    } else {
      setInputForm({ ...inputForm, [name]: value });
    }
  };

  const updateTransaction = async (e) => {
    e.preventDefault();
    modalSubmit();
    const data = await HostServices.updateTransaction(inputForm._id, inputForm);
    alert(data.data);
  };

  //VARIAVEIS CSS
  const cssModal = `modal ${css.modal}`;

  return (
    <div className={cssModal} id="modalTeste">
      <div className="modal-content">
        <div className={css.divModalFlex}>
          <h4>Edição de Lançamento</h4>
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
                    checked={inputForm.type === '+'}
                    disabled="disabled"
                  />
                  <span>Receitas</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="-"
                    checked={inputForm.type === '-'}
                    disabled="disabled"
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
                  value={inputForm.description}
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
                  value={inputForm.category}
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
                  defaultValue={inputForm.value}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Data de Lançamento
                <input
                  type="date"
                  name="yearMonthDay"
                  value={inputForm.yearMonthDay}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              <button className="btn" type="submit" onClick={updateTransaction}>
                Salvar
              </button>
              <button
                className="modal-close btn"
                type="submit"
                onClick={updateTransaction}
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
