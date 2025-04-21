import styless from './TransactionItem.module.css';
import clsx from 'clsx';

function TransactionItem({ idx, transaction }) {
  return (
    <tr className={clsx(idx % 2 !== 0 && styless.bgGrey)}>
      <td className={styless.td}>{transaction.type}</td>
      <td className={styless.td}>{transaction.amount}</td>
      <td className={styless.td}>{transaction.currency}</td>
    </tr>
  );
}

export default TransactionItem;
