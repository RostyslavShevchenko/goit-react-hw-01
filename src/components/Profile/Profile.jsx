import css from "./Profile.module.css";

export default function Profile({
    data: {avatar, username, tag, location, stats}
}) {
    const keys = Object.keys(stats);
    const formattedStatName = str => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <div className={css.wrapper}>
            <img className={css.img} src={avatar} alt="icon" width={150} />
            <p className={css.name}>{username}</p>
            <p className={css.info}>@{tag}</p>
            <p className={css.info}>{location}</p>
            <ul className={css.statsList}>
                {keys.map((key, index) => (
                    <li className={css.listItem} key={index}>
                        <span>{formattedStatName(key)}</span>
                        <span className={css.statValue}>{stats[key]}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}