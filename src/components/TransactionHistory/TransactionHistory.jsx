export default function TransactionHistory({transactions}) {
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
                {transactions.map(({type, amount, currency, id}) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                ))}
            </tbody>
        
    </table>
    )
}