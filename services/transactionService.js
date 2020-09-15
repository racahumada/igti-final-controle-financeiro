const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const insertTransaction = async (req, res) => {
  if (!req.body) {
    res.send('Não foram encontrados dados para a inserção!');
  }
  try {
    const data = new TransactionModel(req.body);
    await data.save();
    res.send('Cadastro realizado com sucesso!');
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao Cadastrar Transição',
    });
  }
};

// const findAll = async (req, res) => {
//   try {
//     const data = await TransactionModel.find();
//     let valuesPeriod = [];
//     data.forEach((period) => {
//       let flagPeriod = false;
//       if (valuesPeriod.length === 0) {
//         valuesPeriod.push(period.yearMonth);
//       }
//       for (const iterator of valuesPeriod) {
//         if (period.yearMonth === iterator) {
//           flagPeriod = true;
//         }
//       }
//       if (!flagPeriod) {
//         valuesPeriod.push(period.yearMonth);
//       }
//     });
//     res.send({ length: valuesPeriod.length, transactions: valuesPeriod });
//   } catch (error) {
//     res.status(500).send({
//       message: 'Erro ao pesquisar Periodos',
//     });
//   }
// };

const findPeriod = async (req, res) => {
  const period = req.query.period;
  const condition = period ? { yearMonth: period } : {};
  // if (!period) {
  //   res.send(
  //     'É necessário informar a query "period=yyyy-mm", cujo valor deve estar em yyyy-mm'
  //   );
  // }

  try {
    const data = await TransactionModel.find(condition);
    res.send({ length: data.length, transactions: data });
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao pesquisar Periodo',
    });
  }
};

const findTransaction = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await TransactionModel.findById({ _id: id });
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao encontrar transação',
    });
  }
};

const updateTransaction = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: 'Dados para atualização Vazios!' });
  } else if (!req.params.id) {
    return res.status(400).send({ message: 'Parâmetro de Pesquisa ID Vazio!' });
  }
  const {
    description,
    value,
    category,
    year,
    month,
    day,
    yearMonth,
    yearMonthDay,
    type,
  } = req.body;
  const id = req.params.id;
  try {
    const data = await TransactionModel.updateOne(
      { _id: id },
      {
        description: description,
        value: value,
        category: category,
        year: year,
        month: month,
        day: day,
        yearMonth: yearMonth,
        yearMonthDay: yearMonthDay,
        type: type,
      }
    );
    if (data.nModified === 0) {
      return res.send('Documento não encontrado!');
    }
    res.send('Atualização realizada com Sucesso!');
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao realizar update!',
    });
  }
};

const delTransaction = async (req, res) => {
  const id = req.params.id;
  if (!id) {
    return res.status(400).send({ message: 'Parâmetro de Pesquisa ID Vazio!' });
  }
  try {
    const data = await TransactionModel.deleteOne({ _id: id });
    res.send('Transação Removida com Sucesso!');
  } catch (error) {
    res.status(500).send({
      message: 'Erro ao realizar delete!',
    });
  }
};
module.exports = {
  insertTransaction,
  /* findAll, */
  findPeriod,
  findTransaction,
  updateTransaction,
  delTransaction,
};
