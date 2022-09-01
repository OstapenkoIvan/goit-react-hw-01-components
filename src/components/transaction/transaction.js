import s from './transaction.module.css';

const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <td className={[s.bodyCell, s.firstCell].join(' ')}>{type}</td>
      <td className={s.bodyCell}>{amount}</td>
      <td className={s.bodyCell}>{currency}</td>
    </tr>
  );
};

export default Transaction;
