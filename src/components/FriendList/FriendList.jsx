import clsx from "clsx";
import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

export default function FriendList({ friends }) {
    return (
        <ul className={clsx(css.list)} >
            {
                friends.map(friend => {
                    return (
                        <li className={clsx(css.listItem)} key = {friend.id}>
		                    <FriendListItem friend = {friend} />
	                    </li>
                    )
                })
            }
        </ul>
    )
}

