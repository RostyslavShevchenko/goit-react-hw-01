import FriendListItem from "../FriendListProfile/FriendListItem"

export default function FriendList({ friends }) {
    return (
        <ul>
            {friends.map((friend) => (
                <li key={friend.id}>
                    <FriendListItem friends={friend} />
                </li>
            ))}
        </ul>
    )
}