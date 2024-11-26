import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
        <table className={clsx(css.table)} >
            <thead className={clsx(css.head)} >
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
                
            <tbody>
                {
                    items.map(({ id, type, amount, currency }) => 
                        (
                            <tr key = {id} className={clsx(css.bodyTr)} >
                                <td>{type}</td>
                                <td>{amount}</td>
                                <td>{currency}</td>
                            </tr>
                        )
                    )
                }
            </tbody>
        </table>
    )
}
