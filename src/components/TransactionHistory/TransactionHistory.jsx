import TransactionItem from '../TransactionItem/TransactionItem';
import styless from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table className={styless.table}>
      <thead className={styless.head}>
        <tr>
          <th className={styless.th}>Type</th>
          <th className={styless.th}>Amount</th>
          <th className={styless.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, idx) => (
          <TransactionItem
            key={transaction.id}
            idx={idx}
            transaction={transaction}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
