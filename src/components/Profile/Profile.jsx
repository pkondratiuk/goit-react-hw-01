import clsx from "clsx";
import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats: { followers, views, likes } }) {
    return (
        <div className={clsx(css.container)} >
            <div className={clsx(css.topPart)} >
                <img className={clsx(css.img)}
                    src={image}
                    alt={name}
                    width={180}
                />
                <p className={clsx(css.name)} >{name}</p>
                <p className={clsx(css.text)} >@{tag}</p>
                <p className={clsx(css.text)} >{location}</p>
            </div>

            <ul className={clsx(css.list)} >
                <li className={clsx(css.listItem)} >
                    <span className={clsx(css.listText)} >Followers</span>
                    <span className={clsx(css.listNumber)} > {followers}</span>
                </li>
                <li className={clsx(css.listItem)} >
                    <span className={clsx(css.listText)} >Views</span>
                    <span className={clsx(css.listNumber)} > {views}</span>
                </li>
                <li className={clsx(css.listItem)} >
                    <span className={clsx(css.listText)} >Likes</span>
                    <span className={clsx(css.listNumber)} > {likes}</span>
                </li>
            </ul>
        </div>
    )
}