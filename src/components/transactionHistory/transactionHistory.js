import PropTypes from 'prop-types';
import Transaction from '../Transaction/Transaction';
import s from './transactionHistory.module.css';

function TransactionHistory({ transactions }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={[s.headCell, s.firstCell].join(' ')}>Type</th>
          <th className={s.headCell}>Amount</th>
          <th className={s.headCell}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <Transaction
            key={transaction.id}
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
