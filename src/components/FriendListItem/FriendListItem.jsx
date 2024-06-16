import clsx from "clsx"
import css from "./FriendListItem.module.css";

export default function FriendListItem({
    friends: { avatar, name, isOnline },
}) {
    const statusText = clsx(css.status, isOnline && css.isOnline, !isOnline && css.isOffline);
    return (
        <>
            <img src={avatar} alt="Avatar" width="80" />
            <p className={clsx(css.name)}>{name}</p>
        <p className={statusText}>{isOnline ? 'Is online' : 'Is offline'}</p>
        </>
    )
}