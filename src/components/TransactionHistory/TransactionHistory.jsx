import Transaction from "../Transaction/Transaction";
import css from "../TransactionHistory/TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </tbody>
    </table>
  );
}
