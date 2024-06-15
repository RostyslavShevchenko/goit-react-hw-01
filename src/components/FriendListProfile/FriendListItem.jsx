export default function FriendListItem({
    friends: { avatar, name, isOnline },
}) { return (
        <>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? 'Is online' : 'Is offline'}</p>
        </>
    )
}