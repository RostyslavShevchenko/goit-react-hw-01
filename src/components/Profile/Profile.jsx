export default function Profile({
    data: {avatar, username, tag, location, stats}
}) {
    const keys = Object.keys(stats);

    return (
        <div>
            <img src={avatar} alt="icon" width={150} />
            <p>{username}</p>
            <p>@{tag}</p>
            <p>{location}</p>
            <ul>
                {keys.map((key, index) => (
                    <li key={index}>
                        <span>{key}</span>
                        <span>{stats[key]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}