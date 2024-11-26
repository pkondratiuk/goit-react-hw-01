import clsx from "clsx"
import css from "./FriendListItem.module.css"

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    return (
        <div>
            <img className={clsx(css.img)} src={avatar} alt={name} width={48} />
            <p className={clsx(css.name)}>{name}</p>
            <p className={clsx(css.text, isOnline ? css.online : css.offline)}>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
}