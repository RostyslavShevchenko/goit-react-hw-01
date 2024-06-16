import Profile from '../Profile/Profile'
import userData from './userData.json'
import FriendList from '../FriendList/FriendList'
import friends from '../FriendList/friends.json'
import TransactionHistory from '../TransactionHistory/TransactionHistory'
import transactions from '../TransactionHistory/transactions.json'


export default function App() {
    return (
        <>
            <Profile data={userData} /> 
            <FriendList friends={friends} />
            <TransactionHistory transactions={transactions}/>
        </>
    )
}