export default function TransactionHistory({transactions}) {
    console.log(transactions);
    return (
    <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
            
            {transactions.map(({type, amount, currency, id}) => (
            <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>
        ))}
    </table>
    )
}