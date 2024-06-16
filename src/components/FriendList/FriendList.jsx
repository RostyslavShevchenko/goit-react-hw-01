import FriendListItem from "../FriendListItem/FriendListItem"
import clsx from "clsx";
import css from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={clsx(css.list)}>
            {friends.map((friend) => (
                <li className={css.listItem} key={friend.id}>
                    <FriendListItem friends={friend} />
                </li>
            ))}
        </ul>
    )
}